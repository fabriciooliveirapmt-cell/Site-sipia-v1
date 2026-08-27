const STAGES = [
  {
    n: "01",
    title: "Órgão do SGD",
    text: "Identifica situação de violação de direitos de criança ou adolescente.",
  },
  {
    n: "02",
    title: "Comunicação ao CT",
    text: "Aciona o Conselho Tutelar da área de residência da criança ou adolescente.",
  },
  {
    n: "03",
    title: "Registro no SIPIA-CT",
    text: "O Conselho Tutelar registra o Comunicado de Violação no sistema oficial, via gov.br.",
  },
  {
    n: "04",
    title: "Encaminhamento e resposta",
    text: "A instituição responde solicitações do CT em até 48 horas pelo e-mail institucional.",
  },
];

export default function FlowDiagram() {
  return (
    <div className="relative">
      {/* connective line — desktop */}
      <div className="hidden md:block absolute left-0 right-0 top-[38px] h-px bg-gradient-to-r from-teal-300 via-navy-300 to-gold-300" />

      <div className="grid gap-6 md:grid-cols-4">
        {STAGES.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="relative z-10 flex md:flex-col items-start md:items-start gap-4 md:gap-0">
              <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-2 border-navy-900 bg-paper text-navy-900 font-display text-xl font-semibold md:mb-5">
                {s.n}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed max-w-[220px]">
                  {s.text}
                </p>
              </div>
            </div>
            {i < STAGES.length - 1 && (
              <svg
                className="hidden md:block absolute top-[30px] -right-3 z-0"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M0 8H20M20 8L14 2M20 8L14 14" stroke="#7C9AB3" strokeWidth="1.6" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
