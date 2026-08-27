"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/fluxo", label: "Fluxo SGD → CT" },
  { href: "/sipia", label: "Passo a passo SIPIA" },
  { href: "/instituicoes", label: "Instituições" },
  { href: "/materiais", label: "Materiais" },
  { href: "/painel", label: "Painel da Coordenação" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-navy-950/97 backdrop-blur text-white">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-500 text-navy-950 font-display font-bold text-sm">
            CT
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight">
              Central SGD
            </span>
            <span className="eyebrow text-gold-300">SIPIA-CT · Teresina</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "bg-white/10 text-gold-300 font-medium"
                    : "text-navy-100 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M5 5L15 15M15 5L5 15" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 5H17M3 10H17M3 15H17" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-navy-950">
          <div className="container-page flex flex-col py-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm border-b border-white/5 last:border-none ${
                  pathname === link.href ? "text-gold-300 font-medium" : "text-navy-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
