/**
 * Component to render JSON-LD schema markup
 */

interface SchemaScriptProps {
  schema: unknown;
}

export default function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
