export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="border-b border-paper-line bg-white">
      <div className="container-page py-12 md:py-16">
        {eyebrow && <p className="eyebrow text-teal-700 mb-3">{eyebrow}</p>}
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy-950 max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-ink-soft max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
