/**
 * Renders a JSON-LD structured-data block. It is a <script> tag, so it adds
 * nothing to the visible layout. "<" is escaped so the payload can never close
 * the script element early.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
