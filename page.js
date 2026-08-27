"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { createInstituicao } from "@/lib/data";

const TIPOS = [
  "Assistência Social",
  "Saúde",
  "Educação",
  "Segurança Pública",
  "Justiça",
  "Sociedade Civil",
  "Outro",
];

const initialState = {
  nome: "",
  tipo: TIPOS[0],
  endereco: "",
  telefone: "",
  comunicadoNome: "",
  comunicadoEmail: "",
  comunicadoTelefone: "",
  comunicadoSipiaOk: false,
  encaminhamentoNome: "",
  encaminhamentoEmail: "",
  encaminhamentoTelefone: "",
};

function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-950">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-ink-faint">{hint}</span>}
    </label>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-md border border-paper-line bg-white px-3.5 py-2.5 text-sm placeholder:text-ink-faint";

export default function NovaInstituicaoPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [enviado, setEnviado] = useState(false);

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createInstituicao({
      nome: form.nome,
      tipo: form.tipo,
      endereco: form.endereco,
      telefone: form.telefone,
      responsaveis: {
        comunicado: {
          nome: form.comunicadoNome,
          email: form.comunicadoEmail,
          telefone: form.comunicadoTelefone,
          cadastroSipiaOk: form.comunicadoSipiaOk,
        },
        encaminhamento: {
          nome: form.encaminhamentoNome,
          email: form.encaminhamentoEmail,
          telefone: form.encaminhamentoTelefone,
        },
      },
    });
    setEnviado(true);
    setTimeout(() => router.push("/instituicoes"), 1400);
  }

  return (
    <>
      <PageHeader
        eyebrow="Cadastro"
        title="Cadastrar instituição"
        description="Registre sua instituição e indique os dois responsáveis exigidos pela Coordenação Municipal do SIPIA."
      />

      <section className="container-page py-12 max-w-2xl">
        <DisclaimerBanner />

        {enviado ? (
          <div className="mt-10 rounded-xl2 border border-teal-300 bg-teal-50 p-8 text-center">
            <p className="font-display text-lg font-semibold text-teal-900">
              Instituição cadastrada com sucesso
            </p>
            <p className="mt-2 text-sm text-teal-700">
              Redirecionando para a lista de instituições...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-10">
            <fieldset className="space-y-5">
              <legend className="font-display text-lg font-semibold text-navy-950 mb-1">
                Dados da instituição
              </legend>

              <Field label="Nome da instituição">
                <input
                  required
                  className={inputClass}
                  value={form.nome}
                  onChange={(e) => set("nome", e.target.value)}
                  placeholder="Ex.: CRAS Vale Quem Tem"
                />
              </Field>

              <Field label="Tipo / área">
                <select
                  className={inputClass}
                  value={form.tipo}
                  onChange={(e) => set("tipo", e.target.value)}
                >
                  {TIPOS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Endereço">
                <input
                  className={inputClass}
                  value={form.endereco}
                  onChange={(e) => set("endereco", e.target.value)}
                  placeholder="Bairro, zona, Teresina/PI"
                />
              </Field>

              <Field label="Telefone institucional">
                <input
                  className={inputClass}
                  value={form.telefone}
                  onChange={(e) => set("telefone", e.target.value)}
                  placeholder="(86) 0000-0000"
                />
              </Field>
            </fieldset>

            <fieldset className="space-y-5 border-t border-paper-line pt-8">
              <legend className="font-display text-lg font-semibold text-navy-950 mb-1">
                Responsável pelo Comunicado de Violação
              </legend>
              <p className="text-sm text-ink-soft -mt-2">
                Deve possuir conta gov.br ativa e realizar o cadastro no SIPIA-CT
                oficial.
              </p>

              <Field label="Nome completo">
                <input
                  className={inputClass}
                  value={form.comunicadoNome}
                  onChange={(e) => set("comunicadoNome", e.target.value)}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="E-mail institucional">
                  <input
                    type="email"
                    className={inputClass}
                    value={form.comunicadoEmail}
                    onChange={(e) => set("comunicadoEmail", e.target.value)}
                  />
                </Field>
                <Field label="Telefone">
                  <input
                    className={inputClass}
                    value={form.comunicadoTelefone}
                    onChange={(e) => set("comunicadoTelefone", e.target.value)}
                  />
                </Field>
              </div>
              <label className="flex items-center gap-2.5 text-sm text-navy-950">
                <input
                  type="checkbox"
                  checked={form.comunicadoSipiaOk}
                  onChange={(e) => set("comunicadoSipiaOk", e.target.checked)}
                  className="h-4 w-4 rounded border-paper-line"
                />
                Já concluiu o cadastro como operador no SIPIA-CT oficial
              </label>
            </fieldset>

            <fieldset className="space-y-5 border-t border-paper-line pt-8">
              <legend className="font-display text-lg font-semibold text-navy-950 mb-1">
                Responsável pelos encaminhamentos (e-mail)
              </legend>
              <p className="text-sm text-ink-soft -mt-2">
                Verifica o e-mail institucional diariamente e responde solicitações
                do Conselho Tutelar em até 48 horas.
              </p>

              <Field label="Nome completo">
                <input
                  className={inputClass}
                  value={form.encaminhamentoNome}
                  onChange={(e) => set("encaminhamentoNome", e.target.value)}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="E-mail institucional monitorado">
                  <input
                    type="email"
                    className={inputClass}
                    value={form.encaminhamentoEmail}
                    onChange={(e) => set("encaminhamentoEmail", e.target.value)}
                  />
                </Field>
                <Field label="Telefone">
                  <input
                    className={inputClass}
                    value={form.encaminhamentoTelefone}
                    onChange={(e) => set("encaminhamentoTelefone", e.target.value)}
                  />
                </Field>
              </div>
            </fieldset>

            <button
              type="submit"
              className="rounded-md bg-navy-900 px-6 py-3 text-sm font-medium text-white hover:bg-navy-700 transition-colors"
            >
              Salvar instituição
            </button>
          </form>
        )}
      </section>
    </>
  );
}
