import PageHeader from "@/components/PageHeader";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const PASSOS_CADASTRO = [
  {
    n: "01",
    title: "Acesse o sistema oficial",
    text: "O cadastro de operador do SIPIA-CT é feito no ambiente oficial do Governo Federal, disponível no portal do Ministério dos Direitos Humanos e da Cidadania.",
  },
  {
    n: "02",
    title: "Entre com sua conta gov.br",
    text: "O acesso exige conta gov.br ativa, com nível de confiabilidade compatível com o exigido pelo sistema. Caso ainda não tenha, crie sua conta em gov.br antes de prosseguir.",
  },
  {
    n: "03",
    title: "Solicite o vínculo como operador",
    text: "Dentro do sistema oficial, solicite o vínculo ao Conselho Tutelar correspondente, seguindo as instruções apresentadas pelo próprio SIPIA-CT.",
  },
  {
    n: "04",
    title: "Aguarde a validação",
    text: "A validação do vínculo segue os critérios e prazos definidos pela administração do sistema oficial, sem participação desta Central.",
  },
  {
    n: "05",
    title: "Avise a Coordenação Municipal",
    text: "Após concluir o cadastro, informe a Coordenação Municipal do SIPIA para que a situação da instituição seja atualizada nesta Central.",
  },
];

const USO_DIARIO = [
  "Registrar o Comunicado de Violação diretamente no SIPIA-CT, com os dados do atendimento.",
  "Consultar encaminhamentos e solicitações recebidas de outras instituições, quando aplicável ao perfil de acesso.",
  "Manter os dados cadastrais do Conselho Tutelar atualizados dentro do sistema oficial.",
];

export default function SipiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Orientação"
        title="Passo a passo: cadastro e uso do SIPIA-CT"
        description="Um guia geral para apoiar o operador durante o cadastro e a utilização do sistema oficial. Esta página apenas orienta — todo o cadastro e uso efetivo ocorrem no SIPIA-CT."
      />

      <section className="container-page py-14 max-w-3xl">
        <DisclaimerBanner />

        <h2 className="font-display text-2xl font-semibold text-navy-950 mt-12 mb-8">
          Cadastro do operador
        </h2>
        <div className="space-y-5">
          {PASSOS_CADASTRO.map((p) => (
            <div
              key={p.n}
              className="flex gap-5 rounded-xl2 border border-paper-line bg-paper-card p-5 shadow-card"
            >
              <span className="font-display text-2xl font-semibold text-teal-700 shrink-0 w-10">
                {p.n}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-navy-950">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-semibold text-navy-950 mt-14 mb-6">
          O que o operador faz no sistema oficial
        </h2>
        <ul className="space-y-3">
          {USO_DIARIO.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-xl2 border border-navy-100 bg-navy-50 p-6">
          <h3 className="font-display text-lg font-semibold text-navy-950">
            Precisa de manuais oficiais?
          </h3>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            Reunimos manuais, tutoriais em vídeo e materiais de apoio na página de
            Materiais, para consulta a qualquer momento.
          </p>
          <a
            href="/materiais"
            className="mt-4 inline-block rounded-md bg-navy-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-navy-700 transition-colors"
          >
            Ver materiais e tutoriais
          </a>
        </div>
      </section>
    </>
  );
}
