// Preview text ("preheader"): the grey line inboxes show next to the subject.
// Stored inside the email HTML between two markers, so it needs no database column
// and travels with the draft automatically.

const START = '<!--rp-preheader-->';
const END = '<!--/rp-preheader-->';
const BLOCK = /<!--rp-preheader-->[\s\S]*?<!--\/rp-preheader-->/g;

function escape(text: string) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function unescape(text: string) {
  return text.replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
}

export function extractPreheader(html: string | null | undefined): string {
  if (!html) return '';
  const match = html.match(/<!--rp-preheader--><div[^>]*>([\s\S]*?)<\/div>/);
  return match ? unescape(match[1]).trim() : '';
}

export function applyPreheader(html: string, text: string): string {
  const clean = html.replace(BLOCK, '');
  const value = text.trim();
  if (!value) return clean;
  const hidden = 'display:none;max-height:0;max-width:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#ffffff;opacity:0;';
  // The filler stops inboxes from pulling body text in after the preview text
  const block = `${START}<div style="${hidden}">${escape(value)}</div><div style="${hidden}">${'&#847;&zwnj;&nbsp;'.repeat(60)}</div>${END}`;
  return /<body[^>]*>/i.test(clean) ? clean.replace(/<body[^>]*>/i, (tag) => tag + block) : block + clean;
}
