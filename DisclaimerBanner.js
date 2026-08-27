export default function DisclaimerBanner({ compact = false }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg border border-gold-300 bg-gold-50 text-navy-900 ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="mt-0.5 shrink-0"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="8.5" stroke="#A87A16" strokeWidth="1.4" />
        <path d="M10 6.5V11" stroke="#A87A16" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="10" cy="13.6" r="0.9" fill="#A87A16" />
      </svg>
      <p className="text-sm leading-relaxed">
        <strong className="font-semibold">Esta Central não é o SIPIA-CT oficial.</strong>{" "}
        Ela orienta e organiza o fluxo municipal. O cadastro do operador e o registro
        de Comunicados de Violação são feitos exclusivamente no sistema oficial do
        Governo Federal, com conta gov.br.
      </p>
    </div>
  );
}
