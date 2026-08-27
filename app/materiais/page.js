import PageHeader from "@/components/PageHeader";

const MATERIAIS = [
  {
    categoria: "Manuais oficiais",
    itens: [
      {
        titulo: "Manual do Operador SIPIA-CT",
        formato: "PDF",
        descricao: "Guia oficial de utilização do sistema, publicado pelo órgão federal responsável.",
      },
      {
        titulo: "Cartilha do Sistema de Garantia de Direitos",
        formato: "PDF",
        descricao: "Panorama dos órgãos que compõem o SGD e suas atribuições.",
      },
    ],
  },
  {
    categoria: "Tutoriais em vídeo",
    itens: [
      {
        titulo: "Como criar sua conta gov.br",
        formato: "Vídeo",
        descricao: "Passo a passo para criação e verificação de conta gov.br.",
      },
      {
        titulo: "Vinculação como operador do SIPIA-CT",
        formato: "Vídeo",
        descricao: "Demonstração do processo de solicitação de vínculo no sistema oficial.",
      },
    ],
  },
  {
    categoria: "Modelos e formulários municipais",
    itens: [
      {
        titulo: "Ficha de indicação de responsáveis",
        formato: "DOCX",
        descricao: "Modelo para a instituição formalizar internamente seus dois responsáveis.",
      },
      {
        titulo: "Roteiro de resposta a encaminhamentos",
        formato: "PDF",
        descricao: "Boas práticas para responder solicitações do Conselho Tutelar dentro do prazo.",
      },
    ],
  },
];

export default function MateriaisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biblioteca"
        title="Manuais, tutoriais e materiais de apoio"
        description="Conteúdos de referência para orientar o cadastro e o uso do SIPIA-CT, além de modelos úteis para a rotina institucional."
      />

      <section className="container-page py-14">
        <div className="rounded-xl2 border border-navy-100 bg-navy-50 p-5 mb-12 max-w-2xl">
          <p className="text-sm text-navy-900 leading-relaxed">
            Os arquivos desta seção são referências de apoio. Nesta versão inicial da
            Central, os links de download serão conectados assim que os materiais
            oficiais forem centralizados pela Coordenação Municipal do SIPIA.
          </p>
        </div>

        <div className="space-y-14">
          {MATERIAIS.map((grupo) => (
            <div key={grupo.categoria}>
              <h2 className="font-display text-xl font-semibold text-navy-950 mb-6">
                {grupo.categoria}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {grupo.itens.map((item) => (
                  <div
                    key={item.titulo}
                    className="rounded-xl2 border border-paper-line bg-paper-card p-5 shadow-card flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base font-semibold text-navy-950">
                        {item.titulo}
                      </h3>
                      <span className="eyebrow shrink-0 rounded-full bg-teal-50 text-teal-700 px-2.5 py-1">
                        {item.formato}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
                      {item.descricao}
                    </p>
                    <button
                      disabled
                      className="mt-4 self-start rounded-md border border-paper-line px-3.5 py-2 text-xs font-medium text-ink-faint cursor-not-allowed"
                      title="Disponível em breve"
                    >
                      Disponível em breve
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
