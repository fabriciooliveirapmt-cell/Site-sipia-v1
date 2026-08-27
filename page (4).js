import PageHeader from "@/components/PageHeader";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import FlowDiagram from "@/components/FlowDiagram";

const DETALHES = [
  {
    title: "1. Identificação pelo órgão do SGD",
    text: "Escolas, unidades de saúde, CRAS, CREAS e demais órgãos do Sistema de Garantia de Direitos identificam, no exercício de sua função, uma situação que configure violação de direitos de criança ou adolescente.",
  },
  {
    title: "2. Comunicação ao Conselho Tutelar",
    text: "A instituição aciona o Conselho Tutelar responsável pela área de residência da criança ou adolescente, informando os dados necessários para o atendimento.",
  },
  {
    title: "3. Registro no SIPIA-CT oficial",
    text: "O Conselheiro Tutelar, já cadastrado como operador no sistema oficial (via conta gov.br), registra o Comunicado de Violação diretamente no SIPIA-CT. Este passo ocorre inteiramente fora desta Central.",
  },
  {
    title: "4. Encaminhamentos às instituições",
    text: "Quando necessário, o Conselho Tutelar encaminha solicitações às instituições do SGD, por e-mail institucional, pedindo informações, providências ou acompanhamento do caso.",
  },
  {
    title: "5. Resposta em até 48 horas",
    text: "O responsável institucional pelos encaminhamentos verifica o e-mail diariamente e responde à solicitação do Conselho Tutelar no prazo de até 48 horas (2 dias).",
  },
];

export default function FluxoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Orientação"
        title="Fluxo SGD → Conselho Tutelar"
        description="Como uma situação identificada por um órgão do Sistema de Garantia de Direitos chega ao SIPIA-CT e retorna em forma de encaminhamento."
      />

      <section className="container-page py-14">
        <FlowDiagram />
      </section>

      <section className="bg-white border-t border-paper-line">
        <div className="container-page py-14 max-w-3xl">
          <p className="eyebrow text-teal-700 mb-3">Passo a passo</p>
          <h2 className="font-display text-2xl font-semibold text-navy-950 mb-8">
            Detalhamento de cada etapa
          </h2>
          <div className="space-y-6">
            {DETALHES.map((d) => (
              <div key={d.title} className="border-l-2 border-teal-300 pl-5 py-1">
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {d.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <DisclaimerBanner />
          </div>
        </div>
      </section>
    </>
  );
}
