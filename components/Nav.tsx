"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre", label: "Sobre nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fumigacion-cyan/20 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="#inicio"
          onClick={cerrarMenu}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-fumigacion-dark"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-fumigacion-cyan text-sm font-bold text-white">
            LF
          </span>
          Libres Fumigaciones
        </Link>

        <ul className="hidden flex-wrap items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="transition-colors hover:text-fumigacion-cyan"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100 md:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuAbierto && (
        <div className="border-t border-fumigacion-cyan/20 bg-white md:hidden">
          <ul className="mx-auto max-w-5xl space-y-1 px-4 py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={cerrarMenu}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-fumigacion-cyan"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
