'use client';

import { useRef, useState } from 'react';
import { EditingContext, EmailBlock } from './EmailTemplate';
import { ImageField } from './ImageField';
import { BLOCK_LIBRARY, TEMPLATES, makeTemplate, newBlock, uid, type Block, type BlockDoc, type BlockType, type TemplateKind } from './types';
import { Button, cx, inputClass } from '../_components/ui';

type Notify = (message: string, tone?: 'success' | 'error' | 'info') => void;

const ICONS: Record<BlockType, string> = {
  header: 'M3 5h18v6H3zM7 8h4',
  hero: 'M3 5h18v14H3zM3 15l5-5 5 5 3-3 5 5',
  heading: 'M6 4v16M18 4v16M6 12h12',
  text: 'M4 6h16M4 10h16M4 14h10M4 18h12',
  image: 'M4 5h16v14H4zM8 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 15l-5-5-8 9',
  imageText: 'M3 6h8v8H3zM14 7h7M14 11h7M14 15h5',
  gallery: 'M3 6h5v12H3zM10 6h4v12h-4zM16 6h5v12h-5z',
  quote: 'M7 7h4v4c0 3-2 5-4 6M15 7h4v4c0 3-2 5-4 6',
  qa: 'M9 9a3 3 0 1 1 4 2.8c-.7.3-1 1-1 1.7V14M12 18h.01',
  button: 'M4 8h16v8H4zM9 12h6',
  signoff: 'M4 17c3 0 4-8 7-8s1 6 4 6 3-3 5-3',
  divider: 'M3 12h18',
  spacer: 'M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4',
};

function Icon({ path, size = 18 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

// ---------------- Template picker ----------------

export function TemplatePicker({ onPick }: { onPick: (doc: BlockDoc) => void }) {
  return (
    <div className="rounded-2xl bg-white p-8 ring-1 ring-stone-200/80">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl text-stone-900">How do you want to start?</h2>
      <p className="mt-1 text-sm text-stone-500">Every layout uses your brand colors. You can add, move or remove any section afterward.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {TEMPLATES.map((t) => (
          <button
            key={t.kind}
            type="button"
            onClick={() => onPick(makeTemplate(t.kind as TemplateKind))}
            className="group flex flex-col rounded-xl p-4 text-left ring-1 ring-stone-200 transition hover:ring-2 hover:ring-[var(--color-primary)]"
          >
            <TemplateThumb kind={t.kind} />
            <span className="mt-3 font-medium text-stone-900">{t.name}</span>
            <span className="mt-1 text-sm text-stone-500">{t.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TemplateThumb({ kind }: { kind: TemplateKind }) {
  const bar = (w: string, h = 'h-1.5', tone = 'bg-stone-300') => <div className={cx('rounded-full', h, tone)} style={{ width: w }} />;
  return (
    <div className="flex h-36 flex-col gap-1.5 overflow-hidden rounded-lg bg-[#F4F1EC] p-3">
      <div className="h-4 rounded-sm bg-[#0f3d2a]" />
      {kind === 'story' && <div className="h-10 rounded-sm bg-stone-300/70" />}
      {kind !== 'blank' && bar('70%', 'h-2.5', 'bg-stone-400')}
      {bar('95%')}
      {bar('88%')}
      {kind === 'story' && <div className="my-0.5 h-5 rounded-sm border-l-2 border-[var(--color-primary)] bg-white" />}
      {kind === 'welcome' && (
        <div className="flex gap-1.5">
          <div className="h-7 w-1/2 rounded-sm bg-stone-300/70" />
          <div className="flex w-1/2 flex-col gap-1">{bar('90%')}{bar('70%')}</div>
        </div>
      )}
      {kind !== 'blank' && kind !== 'welcome' && <div className="mx-auto mt-0.5 h-3 w-16 rounded-full bg-[var(--color-primary)]" />}
    </div>
  );
}

// ---------------- Editor ----------------

export function BlockEditor({ doc, onChange, notify }: { doc: BlockDoc; onChange: (doc: BlockDoc) => void; notify: Notify }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const selected = doc.blocks.find((b) => b.id === selectedId) ?? null;

  function setBlocks(blocks: Block[]) {
    onChange({ ...doc, blocks });
  }

  function update(id: string, patch: Partial<Block>) {
    setBlocks(doc.blocks.map((b) => (b.id === id ? ({ ...b, ...patch } as Block) : b)));
  }

  function add(type: BlockType) {
    const block = newBlock(type);
    const index = selected ? doc.blocks.findIndex((b) => b.id === selected.id) + 1 : doc.blocks.length;
    const blocks = [...doc.blocks];
    blocks.splice(index, 0, block);
    setBlocks(blocks);
    setSelectedId(block.id);
    setTimeout(() => document.getElementById(`block-${block.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
  }

  function move(id: string, delta: number) {
    const i = doc.blocks.findIndex((b) => b.id === id);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= doc.blocks.length) return;
    const blocks = [...doc.blocks];
    [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
    setBlocks(blocks);
  }

  function duplicate(id: string) {
    const i = doc.blocks.findIndex((b) => b.id === id);
    const copy = { ...structuredClone(doc.blocks[i]), id: uid() } as Block;
    const blocks = [...doc.blocks];
    blocks.splice(i + 1, 0, copy);
    setBlocks(blocks);
    setSelectedId(copy.id);
  }

  function remove(id: string) {
    setBlocks(doc.blocks.filter((b) => b.id !== id));
    if (selectedId === id) setSelectedId(null);
  }

  function dropAt(index: number) {
    if (!dragId) return;
    const from = doc.blocks.findIndex((b) => b.id === dragId);
    const blocks = [...doc.blocks];
    const [moved] = blocks.splice(from, 1);
    blocks.splice(index > from ? index - 1 : index, 0, moved);
    setBlocks(blocks);
    setDragId(null);
    setDropIndex(null);
  }

  return (
    <div className="grid min-h-[680px] overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200/80 lg:h-[calc(100vh-290px)] lg:grid-cols-[220px_minmax(0,1fr)_340px]">
      {/* Block library */}
      <aside className="border-b border-stone-100 p-4 lg:overflow-y-auto lg:border-b-0 lg:border-r">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-500">Add a section</p>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {BLOCK_LIBRARY.map((item) => (
            <button
              key={item.type}
              type="button"
              onClick={() => add(item.type)}
              title={item.description}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-stone-700 ring-1 ring-inset ring-stone-200 transition hover:bg-emerald-50 hover:text-[var(--color-primary)] hover:ring-emerald-200"
            >
              <Icon path={ICONS[item.type]} />
              {item.label}
            </button>
          ))}
        </div>
        <p className="mt-4 hidden text-xs leading-relaxed text-stone-500 lg:block">
          New sections go below the one you have selected. Drag the handle on any section to move it.
        </p>
      </aside>

      {/* Canvas */}
      <div
        className="overflow-y-auto px-4 py-8"
        style={{ backgroundColor: doc.theme.background }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedId(null);
        }}
      >
        <div
          ref={canvasRef}
          className="rp-canvas mx-auto w-full max-w-[600px] overflow-hidden rounded bg-white shadow-sm [&_table]:[border-collapse:separate] [&_table]:[border-spacing:0] [&_a]:pointer-events-none"
          onClickCapture={(e) => {
            if ((e.target as HTMLElement).closest('a')) e.preventDefault();
          }}
        >
          <EditingContext.Provider value={true}>
            {doc.blocks.length === 0 && (
              <p className="px-10 py-16 text-center text-sm text-stone-500">Add a section from the left to begin.</p>
            )}
            {doc.blocks.map((block, index) => {
              const isSelected = block.id === selectedId;
              return (
                <div key={block.id}>
                  {dropIndex === index && dragId && <div className="h-1 bg-[var(--color-primary)]" />}
                  <div
                    id={`block-${block.id}`}
                    onClick={() => setSelectedId(block.id)}
                    onDragOver={(e) => {
                      if (!dragId) return;
                      e.preventDefault();
                      const rect = e.currentTarget.getBoundingClientRect();
                      setDropIndex(e.clientY < rect.top + rect.height / 2 ? index : index + 1);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (dropIndex !== null) dropAt(dropIndex);
                    }}
                    className={cx(
                      'group relative cursor-pointer outline-offset-[-2px]',
                      isSelected ? 'outline outline-2 outline-[var(--color-primary)]' : 'hover:outline hover:outline-1 hover:outline-emerald-300',
                      dragId === block.id && 'opacity-40',
                    )}
                  >
                    <EmailBlock block={block} theme={doc.theme} />
                    <div
                      className={cx(
                        'absolute right-2 top-2 z-10 flex items-center gap-0.5 rounded-lg bg-white/95 p-0.5 shadow-md ring-1 ring-stone-200 backdrop-blur',
                        isSelected ? 'flex' : 'hidden group-hover:flex',
                      )}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span
                        draggable
                        onDragStart={(e) => {
                          setDragId(block.id);
                          e.dataTransfer.effectAllowed = 'move';
                          const wrapper = document.getElementById(`block-${block.id}`);
                          if (wrapper) e.dataTransfer.setDragImage(wrapper, 20, 20);
                        }}
                        onDragEnd={() => {
                          setDragId(null);
                          setDropIndex(null);
                        }}
                        className="cursor-grab rounded-md p-1.5 text-stone-500 hover:bg-stone-100 active:cursor-grabbing"
                        title="Drag to move"
                      >
                        <Icon path="M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01" size={16} />
                      </span>
                      <ToolButton label="Move up" onClick={() => move(block.id, -1)} disabled={index === 0} path="m6 15 6-6 6 6" />
                      <ToolButton label="Move down" onClick={() => move(block.id, 1)} disabled={index === doc.blocks.length - 1} path="m6 9 6 6 6-6" />
                      <ToolButton label="Duplicate" onClick={() => duplicate(block.id)} path="M8 8h12v12H8zM4 16V4h12" />
                      <ToolButton label="Delete" onClick={() => remove(block.id)} path="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" danger />
                    </div>
                  </div>
                </div>
              );
            })}
            {dropIndex === doc.blocks.length && dragId && <div className="h-1 bg-[var(--color-primary)]" />}
          </EditingContext.Provider>
        </div>
        <p className="mx-auto mt-4 max-w-[600px] text-center text-xs text-stone-500">
          Your address and an unsubscribe link are added at the bottom automatically.
        </p>
      </div>

      {/* Inspector */}
      <aside className="border-t border-stone-100 p-5 lg:overflow-y-auto lg:border-l lg:border-t-0">
        {selected ? (
          <Inspector key={selected.id} block={selected} brand={doc.theme.brand} onChange={(patch) => update(selected.id, patch)} notify={notify} onDone={() => setSelectedId(null)} />
        ) : (
          <DesignPanel doc={doc} onChange={onChange} />
        )}
      </aside>
    </div>
  );
}

function ToolButton({ label, onClick, path, disabled, danger }: { label: string; onClick: () => void; path: string; disabled?: boolean; danger?: boolean }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={cx('rounded-md p-1.5 disabled:opacity-30', danger ? 'text-red-600 hover:bg-red-50' : 'text-stone-600 hover:bg-stone-100')}
    >
      <Icon path={path} size={16} />
    </button>
  );
}

// ---------------- Panels ----------------

function DesignPanel({ doc, onChange }: { doc: BlockDoc; onChange: (doc: BlockDoc) => void }) {
  const setTheme = (patch: Partial<BlockDoc['theme']>) => onChange({ ...doc, theme: { ...doc.theme, ...patch } });
  return (
    <div className="space-y-6">
      <div>
        <p className="font-[family-name:var(--font-heading)] text-lg text-stone-900">Design</p>
        <p className="mt-1 text-sm text-stone-500">Click any section in the email to edit it.</p>
      </div>
      <ColorField label="Brand color" hint="Buttons, links and accents" value={doc.theme.brand} onChange={(brand) => setTheme({ brand })} presets={['#1F6B4D', '#0f3d2a', '#1c1917', '#8a6a3b']} />
      <ColorField label="Background" hint="Around the email" value={doc.theme.background} onChange={(background) => setTheme({ background })} presets={['#F4F1EC', '#ffffff', '#EEF3EF', '#F5F5F4']} />
      <div className="rounded-xl bg-stone-50 p-4 text-sm text-stone-600">
        <p className="font-medium text-stone-800">Formatting text</p>
        <p className="mt-2 leading-relaxed">
          Select words and use the <strong>B</strong>, <em>I</em> and link buttons, or type <code>**bold**</code>, <code>*italic*</code> and <code>[link](https://…)</code>. Type <code>{'{{first_name}}'}</code> to greet people by name.
        </p>
      </div>
    </div>
  );
}

function ColorField({ label, hint, value, onChange, presets }: { label: string; hint: string; value: string; onChange: (v: string) => void; presets: string[] }) {
  return (
    <div>
      <p className="text-sm font-medium text-stone-800">{label}</p>
      <p className="text-xs text-stone-500">{hint}</p>
      <div className="mt-2 flex items-center gap-2">
        {presets.map((c) => (
          <button
            key={c}
            type="button"
            aria-label={c}
            onClick={() => onChange(c)}
            className={cx('h-8 w-8 rounded-full ring-1 ring-stone-300', value.toLowerCase() === c.toLowerCase() && 'ring-2 ring-offset-2 ring-stone-900')}
            style={{ backgroundColor: c }}
          />
        ))}
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} aria-label={`Custom ${label.toLowerCase()}`} className="h-8 w-10 cursor-pointer rounded border-0 bg-transparent" />
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-1.5 text-sm font-medium text-stone-800">{children}</p>;
}

function TextInput({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input className={inputClass} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

function RichText({ label, value, onChange, rows = 6 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
  const ref = useRef<HTMLTextAreaElement>(null);

  function wrap(before: string, after: string, fallback: string) {
    const el = ref.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e } = el;
    const chosen = value.slice(s, e) || fallback;
    const next = value.slice(0, s) + before + chosen + after + value.slice(e);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(s + before.length, s + before.length + chosen.length);
    });
  }

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-sm font-medium text-stone-800">{label}</p>
        <div className="flex gap-0.5">
          <FormatButton label="Bold" onClick={() => wrap('**', '**', 'bold text')}><strong>B</strong></FormatButton>
          <FormatButton label="Italic" onClick={() => wrap('*', '*', 'italic text')}><em className="font-serif">I</em></FormatButton>
          <FormatButton
            label="Link"
            onClick={() => {
              const url = window.prompt('Link address', 'https://');
              if (url && url !== 'https://') wrap('[', `](${url})`, 'link text');
            }}
          >
            <Icon path="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" size={15} />
          </FormatButton>
          <FormatButton label="Insert first name" onClick={() => wrap('', '', '{{first_name}}')}>
            <span className="text-[11px]">Name</span>
          </FormatButton>
        </div>
      </div>
      <textarea
        ref={ref}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-white px-3 py-2 text-sm leading-relaxed text-stone-900 ring-1 ring-inset ring-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
      />
      <p className="mt-1 text-xs text-stone-500">Leave a blank line to start a new paragraph.</p>
    </div>
  );
}

function FormatButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" title={label} aria-label={label} onClick={onClick} className="flex h-7 min-w-7 items-center justify-center rounded-md px-1.5 text-sm text-stone-600 hover:bg-stone-100">
      {children}
    </button>
  );
}

function Segmented<T extends string | number>({ label, value, options, onChange }: { label: string; value: T; options: { value: T; label: string }[]; onChange: (v: T) => void }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="inline-flex rounded-lg bg-stone-100 p-1">
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => onChange(o.value)}
            className={cx('rounded-md px-3 py-1 text-sm', value === o.value ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600')}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const ALIGN = [
  { value: 'left' as const, label: 'Left' },
  { value: 'center' as const, label: 'Center' },
];

function Inspector({ block, brand, onChange, notify, onDone }: { block: Block; brand: string; onChange: (patch: Partial<Block>) => void; notify: Notify; onDone: () => void }) {
  const meta = BLOCK_LIBRARY.find((b) => b.type === block.type);
  const set = (patch: Record<string, unknown>) => onChange(patch as Partial<Block>);

  let fields: React.ReactNode = null;
  switch (block.type) {
    case 'header':
      fields = (
        <>
          <ImageField label="Logo" value={block.logo} onChange={(logo) => set({ logo })} notify={notify} compact />
          <ColorField label="Band color" hint="Behind the logo" value={block.background} onChange={(background) => set({ background })} presets={['#0f3d2a', brand, '#ffffff', '#1c1917']} />
          <Segmented label="Logo position" value={block.align} options={ALIGN} onChange={(align) => set({ align })} />
        </>
      );
      break;
    case 'hero':
      fields = (
        <>
          <ImageField label="Photo" value={block.src} onChange={(src) => set({ src })} notify={notify} />
          <TextInput label="Describe the photo" value={block.alt} onChange={(alt) => set({ alt })} placeholder="Attorneys laughing during a team headshot day" />
          <TextInput label="Link (optional)" value={block.href} onChange={(href) => set({ href })} placeholder="https://rojasphotography.net/work" />
        </>
      );
      break;
    case 'heading':
      fields = (
        <>
          <TextInput label="Heading" value={block.text} onChange={(text) => set({ text })} />
          <Segmented label="Size" value={block.size} options={[{ value: 'lg', label: 'Large' }, { value: 'md', label: 'Medium' }]} onChange={(size) => set({ size })} />
          <Segmented label="Alignment" value={block.align} options={ALIGN} onChange={(align) => set({ align })} />
        </>
      );
      break;
    case 'text':
      fields = (
        <>
          <RichText label="Text" value={block.text} onChange={(text) => set({ text })} rows={10} />
          <Segmented label="Alignment" value={block.align} options={ALIGN} onChange={(align) => set({ align })} />
        </>
      );
      break;
    case 'image':
      fields = (
        <>
          <ImageField label="Photo" value={block.src} onChange={(src) => set({ src })} notify={notify} />
          <TextInput label="Describe the photo" value={block.alt} onChange={(alt) => set({ alt })} />
          <TextInput label="Caption (optional)" value={block.caption} onChange={(caption) => set({ caption })} />
          <TextInput label="Link (optional)" value={block.href} onChange={(href) => set({ href })} placeholder="https://" />
        </>
      );
      break;
    case 'imageText':
      fields = (
        <>
          <ImageField label="Photo" value={block.src} onChange={(src) => set({ src })} notify={notify} />
          <TextInput label="Describe the photo" value={block.alt} onChange={(alt) => set({ alt })} />
          <Segmented label="Photo side" value={block.side} options={[{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }]} onChange={(side) => set({ side })} />
          <TextInput label="Title" value={block.title} onChange={(title) => set({ title })} />
          <RichText label="Text" value={block.text} onChange={(text) => set({ text })} />
        </>
      );
      break;
    case 'quote':
      fields = (
        <>
          <RichText label="What they said" value={block.text} onChange={(text) => set({ text })} rows={5} />
          <TextInput label="Name" value={block.name} onChange={(name) => set({ name })} />
          <TextInput label="Title and company" value={block.role} onChange={(role) => set({ role })} />
          <p className="text-xs text-stone-500">Only use real words from a real client, with their permission.</p>
        </>
      );
      break;
    case 'qa':
      fields = (
        <>
          {block.items.map((item, i) => (
            <div key={i} className="space-y-2 rounded-xl bg-stone-50 p-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">Question {i + 1}</p>
                {block.items.length > 1 && (
                  <button type="button" className="text-xs text-red-600 hover:underline" onClick={() => set({ items: block.items.filter((_, j) => j !== i) })}>
                    Remove
                  </button>
                )}
              </div>
              <input className={inputClass} value={item.q} onChange={(e) => set({ items: block.items.map((it, j) => (j === i ? { ...it, q: e.target.value } : it)) })} aria-label={`Question ${i + 1}`} />
              <textarea
                rows={3}
                value={item.a}
                onChange={(e) => set({ items: block.items.map((it, j) => (j === i ? { ...it, a: e.target.value } : it)) })}
                className="w-full rounded-lg bg-white px-3 py-2 text-sm ring-1 ring-inset ring-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                aria-label={`Answer ${i + 1}`}
              />
            </div>
          ))}
          <Button size="sm" type="button" onClick={() => set({ items: [...block.items, { q: 'Another question?', a: 'The answer.' }] })}>+ Add a question</Button>
        </>
      );
      break;
    case 'button':
      fields = (
        <>
          <TextInput label="Button text" value={block.label} onChange={(label) => set({ label })} />
          <TextInput label="Link" value={block.href} onChange={(href) => set({ href })} placeholder="https://rojasphotography.net/contact" />
          <Segmented label="Style" value={block.style} options={[{ value: 'solid', label: 'Filled' }, { value: 'outline', label: 'Outline' }]} onChange={(style) => set({ style })} />
          <Segmented label="Alignment" value={block.align} options={ALIGN} onChange={(align) => set({ align })} />
        </>
      );
      break;
    case 'gallery':
      fields = (
        <>
          <Segmented
            label="Photos in the row"
            value={block.images.length}
            options={[{ value: 2, label: 'Two' }, { value: 3, label: 'Three' }]}
            onChange={(n) => set({ images: Array.from({ length: n }, (_, i) => block.images[i] ?? { src: '', alt: '' }) })}
          />
          {block.images.map((img, i) => (
            <ImageField
              key={i}
              label={`Photo ${i + 1}`}
              value={img.src}
              compact
              notify={notify}
              onChange={(src) => set({ images: block.images.map((im, j) => (j === i ? { ...im, src } : im)) })}
            />
          ))}
        </>
      );
      break;
    case 'spacer':
      fields = (
        <Segmented label="Space" value={block.size} options={[{ value: 16, label: 'Small' }, { value: 32, label: 'Medium' }, { value: 48, label: 'Large' }]} onChange={(size) => set({ size })} />
      );
      break;
    case 'divider':
      fields = <p className="text-sm text-stone-500">A thin line to separate sections. Nothing to set.</p>;
      break;
    case 'signoff':
      fields = (
        <>
          <TextInput label="Closing line" value={block.closing} onChange={(closing) => set({ closing })} />
          <TextInput label="Names" value={block.names} onChange={(names) => set({ names })} />
          <ImageField label="Photo of you (optional)" value={block.photo} onChange={(photo) => set({ photo })} notify={notify} compact />
        </>
      );
      break;
  }

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-lg text-stone-900">{meta?.label}</p>
          <p className="text-sm text-stone-500">{meta?.description}</p>
        </div>
        <button type="button" onClick={onDone} className="text-sm font-medium text-[var(--color-primary)] hover:underline">Done</button>
      </div>
      {fields}
    </div>
  );
}
