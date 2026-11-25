'use client';

import { useEffect, useRef, useState } from 'react';
import { Button, Modal, cx, inputClass } from '../_components/ui';

type Notify = (message: string, tone?: 'success' | 'error' | 'info') => void;

// Shrink photos in the browser before upload: emails show at most 600px wide,
// so 1200px covers sharp phone and retina screens while keeping emails light.
async function prepareImage(file: File): Promise<File> {
  if (file.type === 'image/gif') return file;
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1200 / bitmap.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const encode = (type: string) => new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, 0.85));
  let type = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
  let blob = await encode(type);
  if (blob && type === 'image/png' && blob.size > 3_500_000) {
    type = 'image/jpeg';
    blob = await encode(type);
  }
  if (!blob) return file;
  const name = file.name.replace(/\.[^.]+$/, '') + (type === 'image/png' ? '.png' : '.jpg');
  return new File([blob], name, { type });
}

export async function uploadImage(file: File): Promise<string> {
  const prepared = await prepareImage(file);
  const form = new FormData();
  form.append('file', prepared);
  const res = await fetch('/api/newsletter/upload', { method: 'POST', body: form });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'The upload failed. Try again.');
  return data.url as string;
}

export function ImageField({
  label,
  value,
  onChange,
  notify,
  compact,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  notify: Notify;
  compact?: boolean;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      notify('That file is not an image.', 'error');
      return;
    }
    setUploading(true);
    try {
      onChange(await uploadImage(file));
    } catch (err) {
      notify(err instanceof Error ? err.message : 'The upload failed.', 'error');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <p className="mb-1.5 text-sm font-medium text-stone-800">{label}</p>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFile(e.dataTransfer.files?.[0]);
        }}
        className={cx(
          'group relative overflow-hidden rounded-xl ring-1 ring-inset transition-colors',
          dragging ? 'bg-emerald-50 ring-2 ring-[var(--color-primary)]' : 'bg-stone-50 ring-stone-200',
        )}
      >
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className={cx('w-full object-cover', compact ? 'h-24' : 'h-36')} />
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className={cx('flex w-full flex-col items-center justify-center gap-1 text-sm text-stone-500', compact ? 'h-24' : 'h-36')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="m21 16-5-5-8 8" />
            </svg>
            {uploading ? 'Uploading…' : 'Drop a photo or click to upload'}
          </button>
        )}
        {uploading && value && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 text-sm text-stone-700">Uploading…</div>
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Button size="sm" type="button" onClick={() => fileRef.current?.click()} disabled={uploading}>
          {value ? 'Replace' : 'Upload'}
        </Button>
        <Button size="sm" type="button" variant="ghost" onClick={() => setLibraryOpen(true)}>Your photos</Button>
        {value && (
          <Button size="sm" type="button" variant="ghost" onClick={() => onChange('')}>Remove</Button>
        )}
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          handleFile(e.target.files?.[0]);
          e.target.value = '';
        }}
      />
      <PhotoLibrary
        open={libraryOpen}
        onClose={() => setLibraryOpen(false)}
        onPick={(url) => {
          onChange(url);
          setLibraryOpen(false);
        }}
      />
    </div>
  );
}

function PhotoLibrary({ open, onClose, onPick }: { open: boolean; onClose: () => void; onPick: (url: string) => void }) {
  const [images, setImages] = useState<{ name: string; url: string }[] | null>(null);
  const [error, setError] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    fetch('/api/newsletter/upload')
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Could not load your photos.');
        if (!cancelled) setImages(data);
      })
      .catch((err) => !cancelled && setError(err.message));
    return () => {
      cancelled = true;
    };
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} title="Your photos" wide>
      {error && <p className="mb-4 text-sm text-red-700">{error}</p>}
      {images === null && !error && <p className="text-sm text-stone-500">Loading…</p>}
      {images && images.length === 0 && <p className="text-sm text-stone-500">Photos you upload show up here so you can reuse them.</p>}
      {images && images.length > 0 && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {images.map((img) => (
            <button
              key={img.name}
              type="button"
              onClick={() => onPick(img.url)}
              className="overflow-hidden rounded-lg ring-1 ring-stone-200 transition hover:ring-2 hover:ring-[var(--color-primary)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt="" className="aspect-square w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <form
        className="mt-6 flex gap-2 border-t border-stone-100 pt-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (/^https:\/\//i.test(link.trim())) onPick(link.trim());
          else setError('Paste a link that starts with https://');
        }}
      >
        <input className={inputClass} placeholder="Or paste an image link, like https://rojasphotography.net/images/…" value={link} onChange={(e) => setLink(e.target.value)} aria-label="Image link" />
        <Button type="submit">Use link</Button>
      </form>
    </Modal>
  );
}
