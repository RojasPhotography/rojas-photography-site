// The Rojas newsletter document: an ordered list of blocks plus a small theme.
// Stored as JSON in newsletters.content (and sequence_emails.json_content).

export const LOGO_URL = 'https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png';

export interface Theme {
  brand: string;
  background: string;
}

export type Align = 'left' | 'center';

export type Block =
  | { id: string; type: 'header'; logo: string; background: string; align: Align }
  | { id: string; type: 'hero'; src: string; alt: string; href: string }
  | { id: string; type: 'heading'; text: string; size: 'lg' | 'md'; align: Align }
  | { id: string; type: 'text'; text: string; align: Align }
  | { id: string; type: 'image'; src: string; alt: string; href: string; caption: string }
  | { id: string; type: 'imageText'; src: string; alt: string; title: string; text: string; side: 'left' | 'right' }
  | { id: string; type: 'quote'; text: string; name: string; role: string }
  | { id: string; type: 'qa'; items: { q: string; a: string }[] }
  | { id: string; type: 'button'; label: string; href: string; align: Align; style: 'solid' | 'outline' }
  | { id: string; type: 'gallery'; images: { src: string; alt: string }[] }
  | { id: string; type: 'divider' }
  | { id: string; type: 'spacer'; size: 16 | 32 | 48 }
  | { id: string; type: 'signoff'; closing: string; names: string; photo: string };

export type BlockType = Block['type'];

export interface BlockDoc {
  rpEditor: 1;
  theme: Theme;
  blocks: Block[];
}

export const DEFAULT_THEME: Theme = { brand: '#1F6B4D', background: '#F4F1EC' };

export function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

export function isBlockDoc(value: unknown): value is BlockDoc {
  return Boolean(value && typeof value === 'object' && (value as BlockDoc).rpEditor === 1 && Array.isArray((value as BlockDoc).blocks));
}

/** Parses stored content. Returns the doc, 'classic' for a Beefree design, or null when empty. */
export function parseContent(content: string | null | undefined): BlockDoc | 'classic' | null {
  if (!content) return null;
  try {
    const parsed = JSON.parse(content);
    if (isBlockDoc(parsed)) return parsed;
    if (parsed && typeof parsed === 'object' && 'page' in parsed) return 'classic';
    return null;
  } catch {
    return null;
  }
}

export const BLOCK_LIBRARY: { type: BlockType; label: string; description: string }[] = [
  { type: 'heading', label: 'Heading', description: 'A title for a section' },
  { type: 'text', label: 'Text', description: 'Paragraphs with bold, italics and links' },
  { type: 'hero', label: 'Hero photo', description: 'Full-width image at the top' },
  { type: 'image', label: 'Photo', description: 'A single image with an optional caption' },
  { type: 'imageText', label: 'Photo and text', description: 'Image beside a short story' },
  { type: 'gallery', label: 'Photo row', description: 'Two or three photos side by side' },
  { type: 'quote', label: 'Testimonial', description: 'A client quote with their name' },
  { type: 'qa', label: 'Q and A', description: 'Questions people ask, answered' },
  { type: 'button', label: 'Button', description: 'One clear next step' },
  { type: 'signoff', label: 'Sign-off', description: 'Closing line from Alfonso and Niomi' },
  { type: 'header', label: 'Logo header', description: 'Your logo on a colored band' },
  { type: 'divider', label: 'Divider', description: 'A thin line between sections' },
  { type: 'spacer', label: 'Space', description: 'Breathing room' },
];

export function newBlock(type: BlockType): Block {
  const id = uid();
  switch (type) {
    case 'header':
      return { id, type, logo: LOGO_URL, background: '#0f3d2a', align: 'center' };
    case 'hero':
      return { id, type, src: '', alt: '', href: '' };
    case 'heading':
      return { id, type, text: 'A headline that earns the next sentence', size: 'lg', align: 'left' };
    case 'text':
      return { id, type, text: 'Hi {{first_name}},\n\nStart with something you noticed this month. Keep it to a few short paragraphs, the way you would tell it in person.', align: 'left' };
    case 'image':
      return { id, type, src: '', alt: '', href: '', caption: '' };
    case 'imageText':
      return { id, type, src: '', alt: '', title: 'Behind the shoot', text: 'A few sentences about what happened and why it mattered.', side: 'left' };
    case 'quote':
      return { id, type, text: 'They made our whole team feel at ease. These are the best photos we have ever had.', name: 'Client name', role: 'Title, Company' };
    case 'qa':
      return { id, type, items: [{ q: 'A question clients ask you?', a: 'Your honest, helpful answer.' }] };
    case 'button':
      return { id, type, label: 'Book a conversation', href: 'https://rojasphotography.net/contact', align: 'center', style: 'solid' };
    case 'gallery':
      return { id, type, images: [{ src: '', alt: '' }, { src: '', alt: '' }] };
    case 'divider':
      return { id, type };
    case 'spacer':
      return { id, type, size: 32 };
    case 'signoff':
      return { id, type, closing: 'With gratitude,', names: 'Alfonso & Niomi', photo: '' };
  }
}

export type TemplateKind = 'story' | 'update' | 'welcome' | 'blank';

export const TEMPLATES: { kind: TemplateKind; name: string; description: string }[] = [
  { kind: 'story', name: 'Monthly story', description: 'Hero photo, a story, a testimonial, Q and A and one clear next step.' },
  { kind: 'update', name: 'Quick note', description: 'A short personal update with one button. Feels like a letter.' },
  { kind: 'welcome', name: 'Welcome email', description: 'For the welcome series: who you are and what to expect.' },
  { kind: 'blank', name: 'Start blank', description: 'Just your logo and sign-off. Build the rest yourself.' },
];

export function makeTemplate(kind: TemplateKind): BlockDoc {
  const b = (type: BlockType, patch: Record<string, unknown> = {}) => ({ ...newBlock(type), ...patch }) as Block;
  const blocks: Block[] = {
    story: [
      b('header'),
      b('hero'),
      b('heading', { text: 'What we learned this month' }),
      b('text'),
      b('quote'),
      b('heading', { text: 'Questions we get asked', size: 'md' }),
      b('qa', { items: [
        { q: 'How long does a team headshot day take?', a: 'About ten to fifteen minutes per person, with coaching so everyone looks like themselves.' },
        { q: 'Do we need to come to the studio?', a: 'No. We bring the studio to you and set up in a conference room.' },
      ] }),
      b('button'),
      b('signoff'),
    ],
    update: [
      b('header'),
      b('text', { text: 'Hi {{first_name}},\n\nA quick note from the studio.\n\nWrite this the way you would talk to a client over coffee. One idea, one story, one next step.' }),
      b('button', { label: 'Reply and say hello', href: 'mailto:alfonso@rojasphotography.net', style: 'outline' }),
      b('signoff'),
    ],
    welcome: [
      b('header'),
      b('heading', { text: "We're glad you're here" }),
      b('text', { text: "Hi {{first_name}},\n\nThank you for joining us. Once a month we'll share what we're learning about helping people and teams be seen as they really are.\n\nNo spam, no pressure. Just stories and ideas worth your time." }),
      b('imageText', { title: 'Who we are', text: "We're Alfonso and Niomi, a husband and wife studio in Modesto photographing leaders, teams and events across California." }),
      b('signoff'),
    ],
    blank: [b('header'), b('text'), b('signoff')],
  }[kind];
  return { rpEditor: 1, theme: { ...DEFAULT_THEME }, blocks };
}
