import Link from "next/link";
import FlowDiagram from "@/components/FlowDiagram";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const OBJETIVOS = [
  {
    title: "Orientar o fluxo",
    text: "Explica, em linguagem simples, como funciona o encaminhamento entre os órgãos do SGD e os Conselhos Tutelares.",
  },
  {
    title: "Organizar instituições",
    text: "Reúne as instituições participantes, seus responsáveis e canais de contato em um só lugar.",
  },
  {
    title: "Apoiar o uso do SIPIA-CT",
    text: "Reúne manuais, tutoriais e o passo a passo oficial de cadastro e utilização do sistema.",
  },
  {
    title: "Acompanhar o município",
    text: "Dá à Coordenação Municipal do SIPIA uma visão consolidada da situação de cada instituição.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-paper-line bg-white">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow text-teal-700 mb-4">
            Sistema de Garantia de Direitos · Teresina/PI
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy-950 max-w-3xl leading-[1.1]">
            Central SGD — SIPIA-CT
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Um ponto único de integração, orientação e capacitação para os órgãos do
            Sistema de Garantia de Direitos de Teresina, apoiando o fluxo com os
            Conselhos Tutelares e o uso correto do SIPIA-CT.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/fluxo"
              className="rounded-md bg-navy-900 px-5 py-3 text-sm font-medium text-white hover:bg-navy-700 transition-colors"
            >
              Entender o fluxo SGD → CT
            </Link>
            <Link
              href="/instituicoes/nova"
              className="rounded-md border border-navy-900 px-5 py-3 text-sm font-medium text-navy-900 hover:bg-navy-50 transition-colors"
            >
              Cadastrar minha instituição
            </Link>
          </div>

          <div className="mt-10 max-w-xl">
            <DisclaimerBanner />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-page py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="eyebrow text-teal-700 mb-3">Como funciona</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-950">
                Do atendimento ao registro oficial
              </h2>
            </div>
            <Link href="/fluxo" className="text-sm font-medium text-teal-700 hover:text-teal-900">
              Ver fluxo completo →
            </Link>
          </div>
          <FlowDiagram />
        </div>
      </section>

      <section className="bg-white border-t border-paper-line">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow text-teal-700 mb-3">O que esta Central faz</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-950 mb-10 max-w-xl">
            Quatro frentes de apoio ao SGD municipal
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OBJETIVOS.map((o) => (
              <div
                key={o.title}
                className="rounded-xl2 border border-paper-line bg-paper-card p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="container-page py-16 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-gold-300 mb-3">Responsabilidades por instituição</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">
              Cada instituição indica dois papéis
            </h2>
            <p className="mt-4 text-navy-200 leading-relaxed max-w-md">
              A Central organiza quem responde por cada instituição participante do
              fluxo, para que a comunicação com os Conselhos Tutelares nunca fique
              sem resposta.
            </p>
            <Link
              href="/instituicoes"
              className="mt-6 inline-block rounded-md bg-gold-500 px-5 py-3 text-sm font-medium text-navy-950 hover:bg-gold-300 transition-colors"
            >
              Ver instituições cadastradas
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl2 border border-white/10 bg-white/5 p-6">
              <p className="eyebrow text-teal-300 mb-2">Responsável 1</p>
              <h3 className="font-display text-lg font-semibold text-white">
                Comunicado de Violação
              </h3>
              <p className="mt-2 text-sm text-navy-200 leading-relaxed">
                Possui conta gov.br ativa e realiza o cadastro como operador no
                SIPIA-CT oficial. A Central apenas orienta esse processo.
              </p>
            </div>
            <div className="rounded-xl2 border border-white/10 bg-white/5 p-6">
              <p className="eyebrow text-teal-300 mb-2">Responsável 2</p>
              <h3 className="font-display text-lg font-semibold text-white">
                Encaminhamentos por e-mail
              </h3>
              <p className="mt-2 text-sm text-navy-200 leading-relaxed">
                Verifica o e-mail institucional diariamente e responde as
                solicitações dos Conselhos Tutelares em até 48 horas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
