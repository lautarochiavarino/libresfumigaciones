export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-fumigacion-cyan/20 bg-fumigacion-warm/50">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-neutral-600">
        <p>Libres Fumigaciones — Empresa de Fumigación y Control de plagas</p>
        <p className="mt-1">© {year}</p>
      </div>
    </footer>
  );
}
