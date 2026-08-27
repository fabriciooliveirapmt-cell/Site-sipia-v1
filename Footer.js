export default function Footer() {
  return (
    <footer className="mt-24 border-t border-paper-line bg-navy-950 text-navy-100">
      <div className="container-page py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-white">Central SGD — SIPIA-CT</p>
          <p className="mt-2 text-sm text-navy-300 leading-relaxed">
            Ferramenta municipal de apoio, orientação e organização do fluxo entre o
            Sistema de Garantia de Direitos e os Conselhos Tutelares de Teresina/PI.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold-300 mb-3">Importante</p>
          <p className="text-sm text-navy-300 leading-relaxed">
            Esta Central não substitui o SIPIA-CT oficial e não realiza cadastro de
            operadores. Todo cadastro e uso oficial do sistema ocorrem no ambiente
            do Governo Federal, mediante conta gov.br.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold-300 mb-3">Coordenação Municipal</p>
          <p className="text-sm text-navy-300 leading-relaxed">
            Dúvidas sobre o fluxo municipal, cadastro de instituições ou uso desta
            Central devem ser encaminhadas à Coordenação Municipal do SIPIA.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-navy-400">
        Central SGD · SIPIA-CT Teresina/PI — Versão 1.0
      </div>
    </footer>
  );
}
