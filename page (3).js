"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { listInstituicoes, getStatus } from "@/lib/data";

function StatCard({ label, value, tone }) {
  const toneClass = {
    navy: "text-navy-950",
    teal: "text-teal-700",
    gold: "text-gold-700",
    brick: "text-brick-500",
  }[tone];

  return (
    <div className="rounded-xl2 border border-paper-line bg-paper-card p-6 shadow-card">
      <p className="eyebrow text-ink-faint mb-2">{label}</p>
      <p className={`font-display text-3xl font-semibold ${toneClass}`}>{value}</p>
    </div>
  );
}

export default function PainelPage() {
  const [instituicoes, setInstituicoes] = useState(null);

  useEffect(() => {
    setInstituicoes(listInstituicoes());
  }, []);

  const lista = instituicoes || [];
  const total = lista.length;
  const completas = lista.filter((i) => getStatus(i) === "completo").length;
  const pendentes = lista.filter((i) => getStatus(i) === "pendente").length;
  const atencao = lista.filter((i) => getStatus(i) === "atencao").length;

  return (
    <>
      <PageHeader
        eyebrow="Coordenação Municipal do SIPIA"
        title="Painel administrativo"
        description="Visão consolidada da situação cadastral das instituições do Sistema de Garantia de Direitos em Teresina."
      />

      <section className="container-page py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          <StatCard label="Instituições cadastradas" value={total} tone="navy" />
          <StatCard label="Cadastro completo" value={completas} tone="teal" />
          <StatCard label="Com pendências" value={pendentes} tone="gold" />
          <StatCard label="Requer atenção" value={atencao} tone="brick" />
        </div>

        <div className="rounded-xl2 border border-paper-line bg-paper-card shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-paper-line bg-paper text-left">
                  <th className="px-5 py-3.5 font-medium text-ink-soft">Instituição</th>
                  <th className="px-5 py-3.5 font-medium text-ink-soft">Tipo</th>
                  <th className="px-5 py-3.5 font-medium text-ink-soft">
                    Resp. Comunicado
                  </th>
                  <th className="px-5 py-3.5 font-medium text-ink-soft">
                    Cadastro SIPIA-CT
                  </th>
                  <th className="px-5 py-3.5 font-medium text-ink-soft">
                    Resp. Encaminhamento
                  </th>
                  <th className="px-5 py-3.5 font-medium text-ink-soft">Status</th>
                </tr>
              </thead>
              <tbody>
                {lista.map((inst) => {
                  const comunicado = inst.responsaveis?.comunicado;
                  const encaminhamento = inst.responsaveis?.encaminhamento;
                  return (
                    <tr key={inst.id} className="border-b border-paper-line last:border-none">
                      <td className="px-5 py-4 font-medium text-navy-950 whitespace-nowrap">
                        {inst.nome}
                      </td>
                      <td className="px-5 py-4 text-ink-soft whitespace-nowrap">{inst.tipo}</td>
                      <td className="px-5 py-4 text-ink-soft whitespace-nowrap">
                        {comunicado?.nome || (
                          <span className="text-brick-500">Não indicado</span>
                        )}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        {comunicado?.cadastroSipiaOk ? (
                          <span className="text-teal-700">Confirmado</span>
                        ) : (
                          <span className="text-brick-500">Pendente</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-ink-soft whitespace-nowrap">
                        {encaminhamento?.nome || (
                          <span className="text-brick-500">Não indicado</span>
                        )}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <StatusBadge status={getStatus(inst)} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {lista.length === 0 && (
            <p className="p-8 text-center text-sm text-ink-faint">
              Nenhuma instituição cadastrada até o momento.
            </p>
          )}
        </div>

        <p className="mt-6 text-xs text-ink-faint max-w-xl">
          Este painel reflete apenas as informações organizadas nesta Central. Ele
          não acessa nem substitui os dados oficiais registrados no SIPIA-CT.
        </p>
      </section>
    </>
  );
}
