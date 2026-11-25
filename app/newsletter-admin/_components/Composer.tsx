'use client';

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import BeefreeSDK from '@beefree.io/sdk';
import {
  api,
  apiJson,
  SessionExpiredError,
  errorMessage,
  jsonBody,
  type FullNewsletter,
  type SequenceEmail,
} from '../_lib/api';
import { applyPreheader, extractPreheader } from '../_lib/preheader';
import { Badge, Button, Card, EmailFrame, Field, Modal, cx, inputClass } from './ui';
import { BlockEditor, TemplatePicker } from '../_editor/BlockEditor';
import { renderDoc } from '../_editor/EmailTemplate';
import { parseContent, type BlockDoc } from '../_editor/types';

type Template = Parameters<BeefreeSDK['load']>[0];
const BLANK_TEMPLATE = { page: { rows: [] }, comments: [] } as unknown as Template;
const AUTOSAVE_MS = 20000;
const DEFAULT_TEST_TO = 'alfonso@rojasphotography.net';

type Mode =
  | { kind: 'newsletter'; id: number | null }
  | { kind: 'sequence'; id: number; position: number };

type Step = 1 | 2 | 3 | 4;
type EditorKind = 'blocks' | 'classic';

export interface ComposerHandle {
  newNewsletter: () => void;
  openDraft: (id: number) => Promise<void>;
  openSequence: (email: SequenceEmail) => void;
  /** Saves (newsletter) or asks (welcome email) before leaving. False means stay. */
  prepareToLeave: () => Promise<boolean>;
}

interface ComposerProps {
  active: boolean;
  activeSubscribers: number;
  notify: (message: string, tone?: 'success' | 'error' | 'info') => void;
  onSessionExpired: () => void;
  onChanged: () => void;
  onSent: () => void;
  onExit: (to: 'newsletters' | 'welcome' | 'reports') => void;
}

const NEWSLETTER_STEPS = ['Write', 'Preview and test', 'Audience', 'Send'];
const SEQUENCE_STEPS = ['Write', 'Preview and test'];

export const Composer = forwardRef<ComposerHandle, ComposerProps>(function Composer(
  { active, activeSubscribers, notify, onSessionExpired, onChanged, onSent, onExit },
  ref,
) {
  const [mode, setMode] = useState<Mode>({ kind: 'newsletter', id: null });
  const [step, setStep] = useState<Step>(1);
  const [subject, setSubject] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [html, setHtml] = useState('');
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [saving, setSaving] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [editorKind, setEditorKind] = useState<EditorKind>('blocks');
  const [doc, setDoc] = useState<BlockDoc | null>(null);
  const [editorReady, setEditorReady] = useState(false); // classic (Beefree) editor only
  const [editorFailed, setEditorFailed] = useState(false);
  const [busy, setBusy] = useState<null | 'next' | 'test' | 'send'>(null);
  const [testTo, setTestTo] = useState(DEFAULT_TEST_TO);
  const [testSentFor, setTestSentFor] = useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [sentResult, setSentResult] = useState<{ sent: number; failed: number } | null>(null);
  const [subjectError, setSubjectError] = useState('');

  const beeRef = useRef<BeefreeSDK | null>(null);
  const beeReady = useRef<Promise<void> | null>(null);
  const editorKindRef = useRef<EditorKind>('blocks');
  const docRef = useRef<BlockDoc | null>(null);
  const modeRef = useRef(mode);
  const subjectRef = useRef(subject);
  const previewTextRef = useRef(previewText);
  const dirtyRef = useRef(false);
  const savingRef = useRef(false);
  const ignoreChangesUntil = useRef(0);
  const jsonRef = useRef<string | null>(null);
  const saveResolver = useRef<((c: { json: string; html: string }) => void) | null>(null);
  const editorSaveHandler = useRef<(json: string, html: string) => void>(() => {});

  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { subjectRef.current = subject; }, [subject]);
  useEffect(() => { previewTextRef.current = previewText; }, [previewText]);

  const markDirty = useCallback((dirty: boolean) => {
    dirtyRef.current = dirty;
    setIsDirty(dirty);
  }, []);

  const handleError = useCallback(
    (err: unknown, fallback?: string) => {
      if (err instanceof SessionExpiredError) {
        onSessionExpired();
        return;
      }
      notify(errorMessage(err, fallback), 'error');
    },
    [notify, onSessionExpired],
  );

  // ---------- Editor ----------

  // The classic Beefree editor only loads when an older draft needs it.
  function ensureBeefree(): Promise<void> {
    if (beeReady.current) return beeReady.current;
    beeReady.current = new Promise<void>((resolve, reject) => {
      (async () => {
        try {
          const token = await apiJson<unknown>('/api/newsletter/beefree-token');
          const config = {
            container: 'beefree-editor',
            language: 'en-US',
            trackChanges: true,
            onLoad: () => {
              setEditorReady(true);
              resolve();
            },
            onChange: () => {
              if (Date.now() < ignoreChangesUntil.current) return;
              markDirty(true);
            },
            onSave: (pageJson: string, pageHtml: string) => {
              const done = saveResolver.current;
              if (done) {
                saveResolver.current = null;
                done({ json: pageJson, html: pageHtml });
                return;
              }
              // The editor's own Save button
              editorSaveHandler.current(pageJson, pageHtml);
            },
            onSaveAsTemplate: () => {},
            onError: (error: unknown) => console.error('Beefree error:', error),
          };
          const bee = new BeefreeSDK(token as ConstructorParameters<typeof BeefreeSDK>[0]);
          bee.start(config, BLANK_TEMPLATE);
          beeRef.current = bee;
        } catch (err) {
          setEditorFailed(true);
          beeReady.current = null;
          handleError(err, 'The classic editor could not load. Refresh the page to try again.');
          reject(err);
        }
      })();
    });
    return beeReady.current;
  }

  function setKind(kind: EditorKind) {
    editorKindRef.current = kind;
    setEditorKind(kind);
  }

  function updateDoc(next: BlockDoc | null, dirty = true) {
    docRef.current = next;
    setDoc(next);
    if (dirty) markDirty(true);
  }

  function loadIntoEditor(template: Template) {
    if (!beeRef.current) return;
    ignoreChangesUntil.current = Date.now() + 1500;
    beeRef.current.load(template);
  }

  async function requestEditorContent(): Promise<{ json: string; html: string }> {
    if (editorKindRef.current === 'blocks') {
      const current = docRef.current;
      if (!current) throw new Error('Pick a starting layout first.');
      return { json: JSON.stringify(current), html: await renderDoc(current) };
    }
    return new Promise((resolve, reject) => {
      const bee = beeRef.current;
      if (!bee || !editorReady) {
        reject(new Error('The editor is still loading. Give it a second and try again.'));
        return;
      }
      const timeout = setTimeout(() => {
        if (saveResolver.current) {
          saveResolver.current = null;
          reject(new Error('The editor did not respond. Try again.'));
        }
      }, 15000);
      saveResolver.current = (content) => {
        clearTimeout(timeout);
        resolve(content);
      };
      bee.save();
    });
  }

  // ---------- Saving ----------

  async function persist(json: string, rawHtml: string, { quiet = false } = {}): Promise<boolean> {
    const finalHtml = applyPreheader(rawHtml, previewTextRef.current);
    const current = modeRef.current;
    savingRef.current = true;
    setSaving(true);
    try {
      if (current.kind === 'sequence') {
        await apiJson(
          '/api/newsletter/sequence',
          jsonBody('PUT', { id: current.id, subject: subjectRef.current, html_content: finalHtml, json_content: json }),
        );
      } else {
        const data = await apiJson<{ id: number }>(
          '/api/newsletter/drafts',
          jsonBody('POST', {
            id: current.id,
            subject: subjectRef.current.trim() || 'Untitled Draft',
            content: json,
            html_content: finalHtml,
          }),
        );
        if (current.id !== data.id) {
          const next: Mode = { kind: 'newsletter', id: data.id };
          modeRef.current = next;
          setMode(next);
        }
      }
      setHtml(finalHtml);
      jsonRef.current = json;
      setLastSavedAt(new Date());
      markDirty(false);
      onChanged();
      if (!quiet) notify(current.kind === 'sequence' ? 'Welcome email saved' : 'Draft saved', 'success');
      return true;
    } catch (err) {
      handleError(err, 'Could not save. Your work is still on screen, so try again.');
      return false;
    } finally {
      savingRef.current = false;
      setSaving(false);
    }
  }

  editorSaveHandler.current = (json, rawHtml) => {
    persist(json, rawHtml);
  };

  async function saveNow({ quiet = false } = {}): Promise<boolean> {
    try {
      const { json, html: rawHtml } = await requestEditorContent();
      return await persist(json, rawHtml, { quiet });
    } catch (err) {
      handleError(err);
      return false;
    }
  }

  // Autosave newsletters while writing
  useEffect(() => {
    if (!active || step !== 1 || mode.kind !== 'newsletter') return;
    const timer = setInterval(() => {
      if (dirtyRef.current && !savingRef.current && !saveResolver.current) saveNow({ quiet: true });
    }, AUTOSAVE_MS);
    return () => clearInterval(timer);
    // saveNow reads refs, so it is safe to leave out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, step, mode.kind, editorReady]);

  // Warn before closing the tab with unsaved work
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!dirtyRef.current) return;
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, []);

  // ---------- Opening things ----------

  function reset(next: Mode) {
    modeRef.current = next;
    setMode(next);
    setStep(1);
    setSubject('');
    subjectRef.current = '';
    setPreviewText('');
    previewTextRef.current = '';
    setHtml('');
    jsonRef.current = null;
    setLastSavedAt(null);
    setTestSentFor(null);
    setSentResult(null);
    setSubjectError('');
    setKind('blocks');
    updateDoc(null, false);
    markDirty(false);
  }

  // Opens stored content in the right editor: new blocks, classic Beefree, or the layout picker
  async function openContent(content: string | null) {
    const parsed = parseContent(content);
    if (parsed === 'classic') {
      setKind('classic');
      try {
        await ensureBeefree();
        loadIntoEditor(JSON.parse(content as string));
      } catch {
        /* error already shown */
      }
    } else {
      setKind('blocks');
      updateDoc(parsed, false);
    }
    markDirty(false);
  }

  useImperativeHandle(ref, () => ({
    newNewsletter() {
      reset({ kind: 'newsletter', id: null });
    },
    async openDraft(id: number) {
      try {
        const full = await apiJson<FullNewsletter>(`/api/newsletter/drafts?id=${id}`);
        if (full.status !== 'draft') {
          notify('That newsletter was already sent. Duplicate it to reuse the design.', 'info');
          return;
        }
        reset({ kind: 'newsletter', id: full.id });
        const subj = full.subject === 'Untitled Draft' ? '' : full.subject;
        setSubject(subj);
        subjectRef.current = subj;
        const pre = extractPreheader(full.html_content);
        setPreviewText(pre);
        previewTextRef.current = pre;
        setHtml(full.html_content || '');
        jsonRef.current = full.content;
        setLastSavedAt(full.updated_at ? new Date(full.updated_at) : null);
        await openContent(full.content);
      } catch (err) {
        handleError(err, 'Could not open the draft.');
      }
    },
    openSequence(email: SequenceEmail) {
      if (email.html_content && !email.json_content) {
        const proceed = window.confirm(
          'This welcome email was built outside the editor, so you will start it fresh from a layout. Saving would replace the current email.\n\nOpen it anyway?',
        );
        if (!proceed) return;
      }
      reset({ kind: 'sequence', id: email.id, position: email.position });
      setSubject(email.subject || '');
      subjectRef.current = email.subject || '';
      const pre = extractPreheader(email.html_content);
      setPreviewText(pre);
      previewTextRef.current = pre;
      setHtml(email.html_content || '');
      jsonRef.current = email.json_content;
      openContent(email.json_content);
    },
    async prepareToLeave() {
      if (!dirtyRef.current) return true;
      if (modeRef.current.kind === 'newsletter') {
        const ok = await saveNow({ quiet: true });
        if (ok) return true;
        return window.confirm('Your latest changes could not be saved. Leave anyway and lose them?');
      }
      return window.confirm('This welcome email has unsaved changes. Leave and lose them?');
    },
  }));

  // ---------- Steps ----------

  const isSequence = mode.kind === 'sequence';
  const steps = isSequence ? SEQUENCE_STEPS : NEWSLETTER_STEPS;

  async function goTo(target: Step) {
    if (target === step) return;
    if (step === 1 && target > 1) {
      // Leaving the editor: capture exactly what's on screen
      setBusy('next');
      const ok = await saveNow({ quiet: true });
      setBusy(null);
      if (!ok) return;
    }
    if (target === 4 && !subjectRef.current.trim()) {
      setSubjectError('Add a subject line before sending.');
      setStep(1);
      return;
    }
    setStep(target);
    document.getElementById('composer-top')?.scrollIntoView({ behavior: 'smooth' });
  }

  async function sendTest() {
    setBusy('test');
    try {
      const data = await apiJson<{ to: string }>(
        '/api/newsletter/test-email',
        jsonBody('POST', { subject: subjectRef.current, html_content: html, to: testTo }),
      );
      setTestSentFor(html);
      notify(`Test sent to ${data.to}. Check your inbox.`, 'success');
    } catch (err) {
      handleError(err, 'Could not send the test.');
    } finally {
      setBusy(null);
    }
  }

  async function sendNow() {
    if (mode.kind !== 'newsletter' || mode.id === null) return;
    setBusy('send');
    try {
      const res = await api(
        '/api/newsletter/send',
        jsonBody('POST', { id: mode.id, subject: subject.trim(), html_content: html, content: jsonRef.current ?? undefined }),
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'The newsletter could not be sent.');
      setConfirmOpen(false);
      setSentResult({ sent: data.sent, failed: data.failed });
      markDirty(false);
      onSent();
    } catch (err) {
      setConfirmOpen(false);
      handleError(err, 'The newsletter could not be sent.');
    } finally {
      setBusy(null);
    }
  }

  function startAnother() {
    reset({ kind: 'newsletter', id: null });
  }

  // ---------- Render ----------

  const canSave = editorKind === 'blocks' ? doc !== null : editorReady;

  const previewHtml = html.replace(/\{\{first_name\}\}/gi, 'Alfonso').replace(/\{\{name\}\}/gi, 'Alfonso Rojas');
  const testIsCurrent = testSentFor !== null && testSentFor === html;
  const title = subject.trim() || (mode.kind === 'sequence' ? `Welcome email ${mode.position}` : 'Untitled newsletter');

  return (
    <div className={cx(!active && 'hidden')} id="composer-top">
      {sentResult && (
        <Card className="mx-auto mt-10 max-w-xl p-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-stone-900">It&apos;s on its way</h2>
          <p className="mt-2 text-sm text-stone-600">
            &ldquo;{subject}&rdquo; went to {sentResult.sent} subscriber{sentResult.sent === 1 ? '' : 's'}.
            {sentResult.failed > 0 && ` ${sentResult.failed} could not be delivered; check the Resend dashboard.`}
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Button onClick={() => onExit('reports')}>See results</Button>
            <Button variant="primary" onClick={startAnother}>Start another</Button>
          </div>
        </Card>
      )}

      <div className={cx(sentResult && 'hidden')}>
      {/* Header */}
      <div className="mb-5 flex flex-col gap-4 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <div className="min-w-0 flex-1">
          <button
            onClick={() => onExit(isSequence ? 'welcome' : 'newsletters')}
            className="mb-1 text-sm text-stone-500 hover:text-stone-800"
          >
            ← {isSequence ? 'Welcome series' : 'Newsletters'}
          </button>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="truncate font-[family-name:var(--font-heading)] text-2xl text-stone-900">{title}</h1>
            {isSequence ? <Badge tone="blue">Welcome email</Badge> : <Badge tone="amber">Draft</Badge>}
            <span className="text-xs text-stone-500" aria-live="polite">
              {saving ? 'Saving…' : isDirty ? 'Unsaved changes' : lastSavedAt ? `Saved ${lastSavedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}` : ''}
            </span>
          </div>
        </div>

        {/* Stepper */}
        <ol className="flex shrink-0 flex-wrap items-center gap-1.5">
          {steps.map((label, i) => {
            const n = (i + 1) as Step;
            const done = n < step;
            const current = n === step;
            return (
              <li key={label}>
                <button
                  onClick={() => goTo(n)}
                  disabled={busy !== null}
                  className={cx(
                    'flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors',
                    current && 'bg-stone-900 text-white',
                    done && 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100',
                    !current && !done && 'text-stone-500 hover:bg-stone-100',
                  )}
                  aria-current={current ? 'step' : undefined}
                >
                  <span className={cx('flex h-5 w-5 items-center justify-center rounded-full text-xs', current ? 'bg-white/20' : done ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-600')}>
                    {done ? '✓' : n}
                  </span>
                  {label}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Step 1: Write */}
      <div className={cx(step !== 1 && 'hidden')}>
        <Card className="mb-4 grid gap-4 p-5 md:grid-cols-2">
          <Field label="Subject line" htmlFor="composer-subject" hint={subjectError || 'Short and specific beats clever.'}>
            <input
              id="composer-subject"
              className={cx(inputClass, subjectError && 'ring-red-300')}
              value={subject}
              placeholder="What we learned photographing 40 attorneys in one day"
              onChange={(e) => {
                setSubject(e.target.value);
                setSubjectError('');
                markDirty(true);
              }}
            />
          </Field>
          <Field label="Preview text" htmlFor="composer-preview" hint="The grey line people see next to the subject in their inbox.">
            <input
              id="composer-preview"
              className={inputClass}
              value={previewText}
              maxLength={140}
              placeholder="Plus the one thing every team headshot day gets wrong"
              onChange={(e) => {
                setPreviewText(e.target.value);
                markDirty(true);
              }}
            />
          </Field>
        </Card>

        {editorKind === 'blocks' &&
          (doc ? (
            <BlockEditor doc={doc} onChange={(next) => updateDoc(next)} notify={notify} />
          ) : (
            <TemplatePicker onPick={(picked) => updateDoc(picked)} />
          ))}

        {/* Classic editor for drafts made before the new editor. Always mounted so it loads once. */}
        <Card className={cx('relative overflow-hidden', editorKind !== 'classic' && 'hidden')}>
          <div className="flex items-center justify-between border-b border-stone-100 px-5 py-3 text-sm">
            <span className="text-stone-600">This draft was made in the classic editor.</span>
            <Badge>Classic editor</Badge>
          </div>
          {!editorReady && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white text-sm text-stone-500">
              {editorFailed ? (
                <>
                  The editor could not load.
                  <Button onClick={() => window.location.reload()}>Reload</Button>
                </>
              ) : (
                'Loading the editor…'
              )}
            </div>
          )}
          <div id="beefree-editor" className="h-[calc(100vh-320px)] min-h-[640px] w-full" />
        </Card>

        <StepFooter
          hint={
            editorKind === 'blocks' && !doc
              ? 'Pick a layout to start writing.'
              : isSequence
                ? 'Welcome emails save when you click Save.'
                : 'Drafts save automatically while you write.'
          }
        >
          <Button onClick={() => saveNow()} disabled={saving || busy !== null || !canSave}>
            {isSequence ? 'Save welcome email' : 'Save draft'}
          </Button>
          <Button variant="primary" onClick={() => goTo(2)} disabled={busy !== null || !canSave}>
            {busy === 'next' ? 'Saving…' : 'Next: preview and test →'}
          </Button>
        </StepFooter>
      </div>

      {/* Step 2: Preview and test */}
      {step === 2 && (
        <div>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto]">
            <Card className="p-4">
              <p className="mb-3 text-sm font-medium text-stone-700">Desktop</p>
              <div className="rounded-xl bg-stone-100 p-4">
                <InboxRow subject={subject} previewText={previewText} />
                <EmailFrame html={previewHtml} title="Desktop preview" />
              </div>
            </Card>
            <Card className="p-4">
              <p className="mb-3 text-sm font-medium text-stone-700">Phone</p>
              <div className="mx-auto w-[395px] rounded-[2.25rem] bg-stone-900 p-2.5">
                <div className="overflow-hidden rounded-[1.75rem] bg-white">
                  <EmailFrame html={previewHtml} width={375} height={640} title="Phone preview" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-5 flex flex-col gap-4 p-5 md:flex-row md:items-end">
            <div className="flex-1">
              <Field label="Send a test to" htmlFor="test-to" hint="Tests use the real footer and unsubscribe link, with your name filled in.">
                <input id="test-to" type="email" className={inputClass} value={testTo} onChange={(e) => setTestTo(e.target.value)} />
              </Field>
            </div>
            <Button onClick={sendTest} disabled={busy !== null || !html}>
              {busy === 'test' ? 'Sending…' : testIsCurrent ? 'Send another test' : 'Send test'}
            </Button>
          </Card>

          <StepFooter hint={testIsCurrent ? '✓ Test sent for this version.' : 'Tip: open the test on your phone before sending.'}>
            <Button onClick={() => goTo(1)}>← Back to editing</Button>
            {isSequence ? (
              <Button variant="primary" onClick={() => onExit('welcome')}>Done</Button>
            ) : (
              <Button variant="primary" onClick={() => goTo(3)}>Next: audience →</Button>
            )}
          </StepFooter>
        </div>
      )}

      {/* Step 3: Audience */}
      {step === 3 && !isSequence && (
        <div>
          <Card className="p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-stone-900">Who gets this?</h2>
            <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl p-4 ring-2 ring-[var(--color-primary)]">
              <input type="radio" checked readOnly className="mt-1 accent-[var(--color-primary)]" />
              <span>
                <span className="block font-medium text-stone-900">Everyone on your list</span>
                <span className="block text-sm text-stone-500">{activeSubscribers} active subscriber{activeSubscribers === 1 ? '' : 's'}. People who unsubscribed are left out automatically.</span>
              </span>
            </label>
            <p className="mt-4 text-sm text-stone-500">
              Sending to just one group (headshots, events or video) arrives with contact tags.
            </p>
          </Card>
          <StepFooter>
            <Button onClick={() => goTo(2)}>← Back</Button>
            <Button variant="primary" onClick={() => goTo(4)}>Next: review and send →</Button>
          </StepFooter>
        </div>
      )}

      {/* Step 4: Send */}
      {step === 4 && !isSequence && (
        <div>
          <Card className="divide-y divide-stone-100">
            <SummaryRow label="Subject" value={subject} onEdit={() => goTo(1)} />
            <SummaryRow label="Preview text" value={previewText || <span className="text-stone-400">None</span>} onEdit={() => goTo(1)} />
            <SummaryRow label="From" value="Alfonso Rojas <alfonso@rojasphotography.net>" />
            <SummaryRow label="To" value={`Everyone on your list (${activeSubscribers})`} onEdit={() => goTo(3)} />
            <SummaryRow
              label="Test"
              value={testIsCurrent ? <Badge tone="green">Test sent for this version</Badge> : <Badge tone="amber">No test sent for this version yet</Badge>}
              onEdit={() => goTo(2)}
              editLabel={testIsCurrent ? 'Send another' : 'Send a test'}
            />
          </Card>
          <StepFooter hint="Sending can't be undone.">
            <Button onClick={() => goTo(3)}>← Back</Button>
            <Button variant="primary" onClick={() => setConfirmOpen(true)} disabled={activeSubscribers === 0 || mode.id === null}>
              Send newsletter
            </Button>
          </StepFooter>
        </div>
      )}

      </div>

      <Modal
        open={confirmOpen}
        onClose={() => busy !== 'send' && setConfirmOpen(false)}
        title="Send it now?"
        footer={
          <>
            <Button onClick={() => setConfirmOpen(false)} disabled={busy === 'send'}>Cancel</Button>
            <Button variant="primary" onClick={sendNow} disabled={busy === 'send'}>
              {busy === 'send' ? 'Sending…' : `Send to ${activeSubscribers}`}
            </Button>
          </>
        }
      >
        <p className="text-sm text-stone-700">
          &ldquo;{subject}&rdquo; will go to <strong>{activeSubscribers}</strong> subscriber{activeSubscribers === 1 ? '' : 's'} right away.
        </p>
        {!testIsCurrent && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">You haven&apos;t sent yourself a test of this version.</p>
        )}
        {busy === 'send' && <p className="mt-3 text-sm text-stone-500">Keep this tab open until it finishes.</p>}
      </Modal>
    </div>
  );
});

function StepFooter({ hint, children }: { hint?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="sticky bottom-0 z-10 -mx-4 mt-5 flex flex-col gap-3 border-t border-stone-200 bg-[#fafaf8]/95 px-4 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between lg:-mx-8 lg:px-8">
      <p className="text-sm text-stone-500">{hint}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function SummaryRow({ label, value, onEdit, editLabel = 'Edit' }: { label: string; value: React.ReactNode; onEdit?: () => void; editLabel?: string }) {
  return (
    <div className="flex items-start gap-4 px-6 py-4">
      <p className="w-28 shrink-0 text-sm text-stone-500">{label}</p>
      <div className="min-w-0 flex-1 text-sm text-stone-900 break-words">{value}</div>
      {onEdit && (
        <button onClick={onEdit} className="text-sm font-medium text-[var(--color-primary)] hover:underline">{editLabel}</button>
      )}
    </div>
  );
}

function InboxRow({ subject, previewText }: { subject: string; previewText: string }) {
  return (
    <div className="mb-3 flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm ring-1 ring-stone-200">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-medium text-white">AR</div>
      <div className="min-w-0">
        <p className="font-medium text-stone-900">Alfonso Rojas</p>
        <p className="truncate text-stone-700">
          {subject || <span className="text-stone-400">No subject yet</span>}
          <span className="text-stone-400"> — {previewText || 'Add preview text so this line isn’t pulled from the email body'}</span>
        </p>
      </div>
    </div>
  );
}
