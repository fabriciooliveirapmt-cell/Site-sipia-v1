"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { listInstituicoes, getStatus } from "@/lib/data";

export default function InstituicoesPage() {
  const [instituicoes, setInstituicoes] = useState(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setInstituicoes(listInstituicoes());
  }, []);

  const filtradas = (instituicoes || []).filter((i) =>
    i.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <PageHeader
        eyebrow="Rede municipal"
        title="Instituições participantes"
        description="Órgãos do Sistema de Garantia de Direitos cadastrados nesta Central, com seus responsáveis pelo Comunicado de Violação e pelos encaminhamentos."
      />

      <section className="container-page py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-10">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar instituição por nome..."
            className="w-full sm:max-w-xs rounded-md border border-paper-line bg-white px-3.5 py-2.5 text-sm placeholder:text-ink-faint"
          />
          <Link
            href="/instituicoes/nova"
            className="whitespace-nowrap rounded-md bg-navy-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-navy-700 transition-colors text-center"
          >
            + Cadastrar instituição
          </Link>
        </div>

        {instituicoes === null && (
          <p className="text-sm text-ink-faint">Carregando instituições...</p>
        )}

        {instituicoes !== null && filtradas.length === 0 && (
          <div className="rounded-xl2 border border-dashed border-paper-line p-10 text-center">
            <p className="text-ink-soft text-sm">
              Nenhuma instituição encontrada para essa busca.
            </p>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          {filtradas.map((inst) => {
            const status = getStatus(inst);
            return (
              <div
                key={inst.id}
                className="rounded-xl2 border border-paper-line bg-paper-card p-6 shadow-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="eyebrow text-navy-500 mb-1">{inst.tipo}</p>
                    <h3 className="font-display text-lg font-semibold text-navy-950">
                      {inst.nome}
                    </h3>
                    <p className="text-xs text-ink-faint mt-1">{inst.endereco}</p>
                  </div>
                  <StatusBadge status={status} />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-paper p-3.5">
                    <p className="text-[11px] font-medium text-ink-faint uppercase tracking-wide mb-1">
                      Comunicado de violação
                    </p>
                    {inst.responsaveis?.comunicado?.nome ? (
                      <>
                        <p className="text-sm font-medium text-navy-950">
                          {inst.responsaveis.comunicado.nome}
                        </p>
                        <p className="text-xs text-ink-soft">
                          {inst.responsaveis.comunicado.email}
                        </p>
                        <p className="text-xs mt-1">
                          {inst.responsaveis.comunicado.cadastroSipiaOk ? (
                            <span className="text-teal-700">Cadastro SIPIA-CT confirmado</span>
                          ) : (
                            <span className="text-brick-500">Cadastro SIPIA-CT pendente</span>
                          )}
                        </p>
                      </>
                    ) : (
                      <p className="text-xs text-brick-500">Não indicado</p>
                    )}
                  </div>

                  <div className="rounded-lg bg-paper p-3.5">
                    <p className="text-[11px] font-medium text-ink-faint uppercase tracking-wide mb-1">
                      Encaminhamentos (e-mail)
                    </p>
                    {inst.responsaveis?.encaminhamento?.nome ? (
                      <>
                        <p className="text-sm font-medium text-navy-950">
                          {inst.responsaveis.encaminhamento.nome}
                        </p>
                        <p className="text-xs text-ink-soft">
                          {inst.responsaveis.encaminhamento.email}
                        </p>
                      </>
                    ) : (
                      <p className="text-xs text-brick-500">Não indicado</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
