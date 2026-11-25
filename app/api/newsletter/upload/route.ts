import { getSupabase } from '@/app/lib/supabase-server';
import { isAdmin, unauthorized } from '@/app/lib/newsletter-auth';
import { NextResponse } from 'next/server';

// Photo uploads for the newsletter editor, stored in a public Supabase Storage bucket
// so the images can be shown inside emails. The bucket is created automatically.

const BUCKET = 'newsletter-images';
const FOLDER = 'uploads';
const MAX_BYTES = 4 * 1024 * 1024; // the editor shrinks photos before upload, so this is plenty
const TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

async function ensureBucket() {
  const supabase = getSupabase();
  const { data } = await supabase.storage.getBucket(BUCKET);
  if (!data) {
    const { error } = await supabase.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: MAX_BYTES,
      allowedMimeTypes: Object.keys(TYPES),
    });
    if (error && !/already exists/i.test(error.message)) throw error;
  }
  return supabase;
}

// GET: recent uploads, newest first
export async function GET() {
  if (!(await isAdmin())) return unauthorized();
  try {
    const supabase = await ensureBucket();
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .list(FOLDER, { limit: 48, sortBy: { column: 'created_at', order: 'desc' } });
    if (error) throw error;
    const images = (data ?? [])
      .filter((f) => f.name && !f.name.startsWith('.'))
      .map((f) => ({
        name: f.name,
        url: supabase.storage.from(BUCKET).getPublicUrl(`${FOLDER}/${f.name}`).data.publicUrl,
      }));
    return NextResponse.json(images);
  } catch (error) {
    console.error('List uploads error:', error);
    return NextResponse.json({ error: 'Could not load your photos.' }, { status: 500 });
  }
}

// POST: upload one image (multipart form field "file")
export async function POST(request: Request) {
  if (!(await isAdmin())) return unauthorized();
  try {
    const form = await request.formData();
    const file = form.get('file');
    if (!(file instanceof File)) return NextResponse.json({ error: 'No photo received.' }, { status: 400 });

    const ext = TYPES[file.type];
    if (!ext) return NextResponse.json({ error: 'Use a JPG, PNG, WebP or GIF image.' }, { status: 400 });
    if (file.size > MAX_BYTES) return NextResponse.json({ error: 'That image is over 4 MB. Try a smaller one.' }, { status: 400 });

    const supabase = await ensureBucket();
    const path = `${FOLDER}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage.from(BUCKET).upload(path, Buffer.from(await file.arrayBuffer()), {
      contentType: file.type,
      cacheControl: '31536000',
      upsert: false,
    });
    if (error) throw error;

    return NextResponse.json({ url: supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'The upload failed. Try again.' }, { status: 500 });
  }
}
