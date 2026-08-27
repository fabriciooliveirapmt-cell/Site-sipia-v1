const STYLES = {
  completo: "bg-teal-50 text-teal-700 border-teal-300",
  pendente: "bg-gold-50 text-gold-700 border-gold-300",
  atencao: "bg-brick-100 text-brick-700 border-brick-300",
};

const LABELS = {
  completo: "Cadastro completo",
  pendente: "Pendências",
  atencao: "Atenção",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${STYLES[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {LABELS[status]}
    </span>
  );
}
