export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: [string, string][];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl font-black text-brand-brown">{title}</h1>
      <div className="mt-8 space-y-6">
        {sections.map(([heading, body]) => (
          <section key={heading}>
            <h2 className="font-display text-lg font-bold text-brand-brown">{heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}