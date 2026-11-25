'use client';

import { useEffect } from 'react';

// Small shared building blocks so every screen looks and behaves the same.

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export function Button({
  variant = 'secondary',
  size = 'md',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: 'sm' | 'md' }) {
  return (
    <button
      {...props}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors whitespace-nowrap',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        size === 'sm' ? 'h-8 px-3 text-xs' : 'h-10 px-4 text-sm',
        variant === 'primary' && 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]',
        variant === 'secondary' && 'bg-white text-stone-800 ring-1 ring-inset ring-stone-200 hover:bg-stone-50',
        variant === 'ghost' && 'text-stone-600 hover:bg-stone-100 hover:text-stone-900',
        variant === 'danger' && 'bg-white text-red-700 ring-1 ring-inset ring-red-200 hover:bg-red-50',
        className,
      )}
    />
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cx('rounded-2xl bg-white ring-1 ring-stone-200/80', className)}>{children}</div>;
}

type BadgeTone = 'neutral' | 'green' | 'amber' | 'red' | 'blue';

export function Badge({ tone = 'neutral', children }: { tone?: BadgeTone; children: React.ReactNode }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        tone === 'neutral' && 'bg-stone-100 text-stone-700',
        tone === 'green' && 'bg-emerald-50 text-emerald-800',
        tone === 'amber' && 'bg-amber-50 text-amber-800',
        tone === 'red' && 'bg-red-50 text-red-700',
        tone === 'blue' && 'bg-sky-50 text-sky-800',
      )}
    >
      {children}
    </span>
  );
}

export function Metric({ label, value, hint }: { label: string; value: React.ReactNode; hint?: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200/80">
      <p className="text-sm text-stone-500">{label}</p>
      <p className="mt-1 font-[family-name:var(--font-heading)] text-3xl text-stone-900">{value}</p>
      {hint && <p className="mt-1 text-xs text-stone-500">{hint}</p>}
    </div>
  );
}

export function PageHeader({ title, description, actions }: { title: string; description?: string; actions?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl text-stone-900">{title}</h1>
        {description && <p className="mt-1 max-w-2xl text-sm text-stone-500">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center px-6 py-14 text-center">
      <p className="font-[family-name:var(--font-heading)] text-xl text-stone-900">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-stone-500">{body}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Field({
  label,
  hint,
  children,
  htmlFor,
}: {
  label: string;
  hint?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-stone-800">{label}</label>
      {children}
      {hint && <p className="text-xs text-stone-500">{hint}</p>}
    </div>
  );
}

export const inputClass =
  'h-10 w-full rounded-lg bg-white px-3 text-sm text-stone-900 ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]';

export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  wide,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-stone-900/40 p-4" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(e) => e.stopPropagation()}
        className={cx('flex max-h-[90vh] w-full flex-col rounded-2xl bg-white shadow-xl', wide ? 'max-w-4xl' : 'max-w-md')}
      >
        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-stone-900">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-1 text-stone-500 hover:bg-stone-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-stone-100 px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
}

// Renders an email exactly as HTML, isolated from the admin's own styles
export function EmailFrame({ html, width, height = 640, title }: { html: string; width?: number; height?: number; title: string }) {
  return (
    <iframe
      title={title}
      srcDoc={html}
      sandbox="allow-same-origin"
      style={{ width: width ?? '100%', height }}
      className="block rounded-lg bg-white"
    />
  );
}

export type Toast = { id: number; message: string; tone: 'success' | 'error' | 'info' };

export function Toasts({ toasts, onDismiss }: { toasts: Toast[]; onDismiss: (id: number) => void }) {
  return (
    <div className="pointer-events-none fixed right-5 top-5 z-[130] flex w-full max-w-sm flex-col gap-2" aria-live="polite">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cx(
            'pointer-events-auto flex items-start gap-3 rounded-xl px-4 py-3 text-sm shadow-lg ring-1',
            t.tone === 'success' && 'bg-white text-stone-900 ring-emerald-200',
            t.tone === 'error' && 'bg-white text-red-800 ring-red-200',
            t.tone === 'info' && 'bg-white text-stone-900 ring-stone-200',
          )}
        >
          <span className={cx('mt-1.5 h-2 w-2 shrink-0 rounded-full', t.tone === 'success' ? 'bg-emerald-500' : t.tone === 'error' ? 'bg-red-500' : 'bg-stone-400')} />
          <p className="flex-1">{t.message}</p>
          <button onClick={() => onDismiss(t.id)} className="text-stone-400 hover:text-stone-700" aria-label="Dismiss">×</button>
        </div>
      ))}
    </div>
  );
}
