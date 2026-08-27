// -----------------------------------------------------------------------
// Camada de dados — V1
// -----------------------------------------------------------------------
// Nesta primeira versão, os dados das instituições ficam salvos no
// localStorage do navegador (sem backend). A estrutura dos objetos já foi
// pensada para migrar facilmente para tabelas do Supabase futuramente:
//
//   tabela: instituicoes
//     id, nome, tipo, endereco, telefone, created_at
//
//   tabela: responsaveis
//     id, instituicao_id, papel ('comunicado' | 'encaminhamento'),
//     nome, email, telefone, cadastro_sipia_ok (apenas p/ papel 'comunicado')
//
// Quando o Supabase for integrado, as funções abaixo (list/create/update/
// remove) devem ser substituídas por chamadas ao client do Supabase,
// mantendo a mesma assinatura para não exigir mudanças nas páginas.
// -----------------------------------------------------------------------

const STORAGE_KEY = "central-sgd:instituicoes";

const SEED = [
  {
    id: "seed-1",
    nome: "CRAS Vale Quem Tem",
    tipo: "Assistência Social",
    endereco: "Zona Leste, Teresina/PI",
    telefone: "(86) 3000-0001",
    responsaveis: {
      comunicado: {
        nome: "Marina Alves",
        email: "marina.alves@teresina.pi.gov.br",
        telefone: "(86) 99900-0001",
        cadastroSipiaOk: true,
      },
      encaminhamento: {
        nome: "João Pereira",
        email: "cras.valequemtem@teresina.pi.gov.br",
        telefone: "(86) 99900-0002",
      },
    },
  },
  {
    id: "seed-2",
    nome: "UBS Renascença",
    tipo: "Saúde",
    endereco: "Zona Norte, Teresina/PI",
    telefone: "(86) 3000-0002",
    responsaveis: {
      comunicado: {
        nome: "",
        email: "",
        telefone: "",
        cadastroSipiaOk: false,
      },
      encaminhamento: {
        nome: "Fernanda Costa",
        email: "ubs.renascenca@teresina.pi.gov.br",
        telefone: "(86) 99900-0004",
      },
    },
  },
  {
    id: "seed-3",
    nome: "Escola Municipal Dom Barreto",
    tipo: "Educação",
    endereco: "Zona Sul, Teresina/PI",
    telefone: "(86) 3000-0003",
    responsaveis: {
      comunicado: {
        nome: "Roberto Lima",
        email: "roberto.lima@semec.teresina.pi.gov.br",
        telefone: "(86) 99900-0005",
        cadastroSipiaOk: true,
      },
      encaminhamento: {
        nome: "",
        email: "",
        telefone: "",
      },
    },
  },
];

function readAll() {
  if (typeof window === "undefined") return SEED;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED));
      return SEED;
    }
    return JSON.parse(raw);
  } catch {
    return SEED;
  }
}

function writeAll(list) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function listInstituicoes() {
  return readAll();
}

export function getInstituicao(id) {
  return readAll().find((i) => i.id === id) || null;
}

export function createInstituicao(data) {
  const list = readAll();
  const novo = { id: `inst-${Date.now()}`, ...data };
  const updated = [...list, novo];
  writeAll(updated);
  return novo;
}

export function updateInstituicao(id, data) {
  const list = readAll();
  const updated = list.map((i) => (i.id === id ? { ...i, ...data } : i));
  writeAll(updated);
  return updated.find((i) => i.id === id);
}

export function removeInstituicao(id) {
  const list = readAll().filter((i) => i.id !== id);
  writeAll(list);
}

// Deriva o status de uma instituição a partir do preenchimento dos
// responsáveis obrigatórios (mínimo exigido pela Coordenação Municipal).
export function getStatus(inst) {
  const comunicado = inst.responsaveis?.comunicado;
  const encaminhamento = inst.responsaveis?.encaminhamento;

  const comunicadoOk = Boolean(comunicado?.nome && comunicado?.email);
  const encaminhamentoOk = Boolean(encaminhamento?.nome && encaminhamento?.email);
  const sipiaOk = Boolean(comunicado?.cadastroSipiaOk);

  if (comunicadoOk && encaminhamentoOk && sipiaOk) return "completo";
  if (!comunicadoOk && !encaminhamentoOk) return "atencao";
  return "pendente";
}
