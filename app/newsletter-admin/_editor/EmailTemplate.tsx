import { createContext, useContext } from 'react';
import { Body, Button, Column, Container, Head, Hr, Html, Img, Link, Row, render } from '@react-email/components';
import type { Block, BlockDoc, Theme } from './types';
import { inline, paragraphs, safeUrl } from './markup';

// One renderer for both the editor canvas and the email that gets sent,
// so what you see while writing is what lands in the inbox.

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const INK = '#1c1917';
const BODY = '#44403c';
const MUTED = '#78716c';
const PAD = '0 40px';

// In the editor, empty photos show a placeholder; in the sent email they're left out.
export const EditingContext = createContext(false);

const bodyText = `margin:0 0 16px;font-family:${SANS};font-size:16px;line-height:1.7;color:${BODY};`;

// A full-width table whose cell carries the padding, background and borders.
// Outlook ignores padding on tables but respects it on cells.
function Box({ style, children }: { style?: React.CSSProperties; children?: React.ReactNode }) {
  return (
    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: '100%', borderCollapse: 'separate' }}>
      <tbody>
        <tr>
          <td style={style}>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}

function Html_({ html, style }: { html: string; style?: React.CSSProperties }) {
  return <div style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Photo({ src, alt, width, href, radius = 0 }: { src: string; alt: string; width: number; href?: string; radius?: number }) {
  const editing = useContext(EditingContext);
  if (!src) {
    if (!editing) return null;
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', aspectRatio: width >= 520 ? '16 / 9' : '4 / 3', background: '#EAE6DF', color: '#a8a29e', fontFamily: SANS, fontSize: 14, borderRadius: radius }}>
        Add a photo
      </div>
    );
  }
  const img = (
    <Img
      src={src}
      alt={alt}
      width={width}
      style={{ display: 'block', width: '100%', maxWidth: width, height: 'auto', border: 0, borderRadius: radius }}
    />
  );
  const link = href ? safeUrl(href) : '';
  return link ? <Link href={link}>{img}</Link> : img;
}

export function EmailBlock({ block, theme }: { block: Block; theme: Theme }) {
  switch (block.type) {
    case 'header':
      return (
        <Box style={{ backgroundColor: block.background, padding: '28px 40px', textAlign: block.align }}>
          {block.logo && (
            <Img src={block.logo} alt="Rojas Photography" height={48} style={{ display: 'inline-block', height: 48, width: 'auto', border: 0 }} />
          )}
        </Box>
      );
    case 'hero':
      return (
        <Box>
          <Photo src={block.src} alt={block.alt} width={600} href={block.href} />
        </Box>
      );
    case 'heading': {
      const size = block.size === 'lg' ? 30 : 22;
      return (
        <Box style={{ padding: PAD }}>
          <Html_
            html={inline(block.text, theme.brand)}
            style={{ margin: `${block.size === 'lg' ? 36 : 28}px 0 12px`, fontFamily: SERIF, fontSize: size, lineHeight: 1.25, color: INK, fontWeight: 400, textAlign: block.align }}
          />
        </Box>
      );
    }
    case 'text':
      return (
        <Box style={{ padding: PAD }}>
          <Html_ html={paragraphs(block.text, theme.brand, `${bodyText}text-align:${block.align};`)} style={{ paddingTop: 8 }} />
        </Box>
      );
    case 'image':
      return (
        <Box style={{ padding: '12px 40px' }}>
          <Photo src={block.src} alt={block.alt} width={520} href={block.href} radius={6} />
          {block.caption && (
            <Html_ html={inline(block.caption, theme.brand)} style={{ margin: '8px 0 0', fontFamily: SANS, fontSize: 13, color: MUTED, textAlign: 'center' }} />
          )}
        </Box>
      );
    case 'imageText': {
      const image = (
        <Column className="rp-stack" style={{ width: '50%', verticalAlign: 'top', padding: block.side === 'left' ? '0 12px 16px 0' : '0 0 16px 12px' }}>
          <Photo src={block.src} alt={block.alt} width={248} radius={6} />
        </Column>
      );
      const words = (
        <Column className="rp-stack" style={{ width: '50%', verticalAlign: 'top', padding: block.side === 'left' ? '0 0 16px 12px' : '0 12px 16px 0' }}>
          <Html_ html={inline(block.title, theme.brand)} style={{ margin: '0 0 8px', fontFamily: SERIF, fontSize: 20, lineHeight: 1.3, color: INK }} />
          <Html_ html={paragraphs(block.text, theme.brand, bodyText.replace('16px;line', '15px;line'))} />
        </Column>
      );
      return (
        <Box style={{ padding: '20px 40px 4px' }}>
          <Row>{block.side === 'left' ? <>{image}{words}</> : <>{words}{image}</>}</Row>
        </Box>
      );
    }
    case 'quote':
      return (
        <Box style={{ padding: '12px 40px' }}>
          <Box style={{ backgroundColor: theme.background, borderLeft: `3px solid ${theme.brand}`, padding: '24px 28px' }}>
            <Html_ html={`&ldquo;${inline(block.text, theme.brand)}&rdquo;`} style={{ margin: '0 0 14px', fontFamily: SERIF, fontSize: 19, lineHeight: 1.5, color: INK, fontStyle: 'italic' }} />
            <Html_
              html={`<strong style="color:${INK};">${inline(block.name, theme.brand)}</strong>${block.role ? `<br/>${inline(block.role, theme.brand)}` : ''}`}
              style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: MUTED }}
            />
          </Box>
        </Box>
      );
    case 'qa':
      return (
        <Box style={{ padding: PAD }}>
          {block.items.map((item, i) => (
            <div key={i} style={{ padding: '14px 0', borderBottom: i < block.items.length - 1 ? '1px solid #e7e5e4' : 'none' }}>
              <Html_ html={inline(item.q, theme.brand)} style={{ margin: '0 0 6px', fontFamily: SERIF, fontSize: 18, lineHeight: 1.4, color: INK }} />
              <Html_ html={paragraphs(item.a, theme.brand, bodyText.replace('margin:0 0 16px', 'margin:0 0 8px'))} />
            </div>
          ))}
        </Box>
      );
    case 'button': {
      const href = safeUrl(block.href) || '#';
      const solid = block.style === 'solid';
      return (
        <Box style={{ padding: '20px 40px', textAlign: block.align }}>
          <Button
            href={href}
            style={{
              display: 'inline-block',
              backgroundColor: solid ? theme.brand : '#ffffff',
              color: solid ? '#ffffff' : theme.brand,
              border: `2px solid ${theme.brand}`,
              borderRadius: 999,
              padding: '14px 30px',
              fontFamily: SANS,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            {block.label}
          </Button>
        </Box>
      );
    }
    case 'gallery': {
      const n = Math.max(1, Math.min(3, block.images.length));
      const width = Math.floor((520 - (n - 1) * 12) / n);
      return (
        <Box style={{ padding: '12px 40px' }}>
          <Row>
            {block.images.slice(0, 3).map((img, i) => (
              <Column key={i} className="rp-stack" style={{ width: `${100 / n}%`, verticalAlign: 'top', padding: i < n - 1 ? '0 12px 12px 0' : '0 0 12px 0' }}>
                <Photo src={img.src} alt={img.alt} width={width} radius={6} />
              </Column>
            ))}
          </Row>
        </Box>
      );
    }
    case 'divider':
      return (
        <Box style={{ padding: '12px 40px' }}>
          <Hr style={{ borderColor: '#e7e5e4', borderTopWidth: 1, margin: 0 }} />
        </Box>
      );
    case 'spacer':
      return <Box style={{ height: block.size, lineHeight: `${block.size}px`, fontSize: 1 }}>&nbsp;</Box>;
    case 'signoff':
      return (
        <Box style={{ padding: '16px 40px 8px' }}>
          <Row>
            {block.photo && (
              <Column style={{ width: 76, verticalAlign: 'middle' }}>
                <Img src={block.photo} alt={block.names} width={64} height={64} style={{ borderRadius: 999, objectFit: 'cover', display: 'block' }} />
              </Column>
            )}
            <Column style={{ verticalAlign: 'middle' }}>
              <Html_ html={inline(block.closing, theme.brand)} style={{ margin: '0 0 2px', fontFamily: SANS, fontSize: 16, color: BODY }} />
              <Html_ html={inline(block.names, theme.brand)} style={{ fontFamily: SERIF, fontSize: 22, color: INK }} />
            </Column>
          </Row>
        </Box>
      );
  }
}

export function EmailDocument({ doc }: { doc: BlockDoc }) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{`
          @media only screen and (max-width: 620px) {
            .rp-stack { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
            .rp-container { width: 100% !important; }
          }
          a { color: ${doc.theme.brand}; }
        `}</style>
      </Head>
      <Body style={{ margin: 0, padding: '24px 0', backgroundColor: doc.theme.background }}>
        <Container className="rp-container" style={{ width: 600, maxWidth: '100%', backgroundColor: '#ffffff', borderRadius: 4, overflow: 'hidden' }}>
          {doc.blocks.map((block) => (
            <EmailBlock key={block.id} block={block} theme={doc.theme} />
          ))}
          <Box style={{ height: 24, fontSize: 1, lineHeight: '24px' }}>&nbsp;</Box>
        </Container>
      </Body>
    </Html>
  );
}

export async function renderDoc(doc: BlockDoc): Promise<string> {
  return render(<EmailDocument doc={doc} />);
}
