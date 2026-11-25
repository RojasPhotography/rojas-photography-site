// Tiny, safe formatting for text blocks:
//   **bold**   *italic*   [link text](https://...)   blank line = new paragraph
// Everything else is escaped, so pasted text can never break the email.

function escape(text: string) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function safeUrl(url: string): string {
  const trimmed = url.trim();
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed.replace(/"/g, '%22');
  if (/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(trimmed)) return `https://${trimmed}`.replace(/"/g, '%22');
  return '';
}

export function inline(text: string, linkColor: string): string {
  let out = escape(text);
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, url: string) => {
    const href = safeUrl(url.replace(/&amp;/g, '&'));
    return href ? `<a href="${escape(href)}" style="color:${linkColor};text-decoration:underline;">${label}</a>` : label;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  return out.replace(/\n/g, '<br/>');
}

export function paragraphs(text: string, linkColor: string, style: string): string {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p style="${style}">${inline(p, linkColor)}</p>`)
    .join('');
}
