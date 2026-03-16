export function Servicios() {
  const servicios = [
    {
      titulo: "Fumigación con fosfuro de aluminio",
      descripcion:
        "Tratamiento fitosanitario con compuesto químico que reacciona con la humedad para liberar el fumigante fosfina (55% fosfuro de aluminio y 45% de ingredientes inertes). Indicado para cargas de origen extranjero que ingresan al territorio nacional cuando SENASA solicita medida fitosanitaria.",
      icono: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      titulo: "Pulverización con piretroides",
      descripcion:
        "Servicio de pulverización con piretroides para el ingreso de maquinaria agrícola usada, cuando el Servicio Nacional de Sanidad y Calidad Agroalimentaria (SENASA) lo solicita como requisito fitosanitario.",
      icono: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 0H7m2 0h2m4 0h2m2 0h2M5 15H3m2 0H7m2 0h2m4 0h2m2 0h2M3 5V3m2 0V7m2 0v2m4 0v2m2 0v2M15 5V3m2 0V7m2 0v2m4 0v2m2 0v2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="servicios"
      className="border-t border-fumigacion-cyan/20 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold text-fumigacion-dark md:text-3xl">
          Nuestros servicios
        </h2>
        <p className="mt-2 text-neutral-600">
          Prestamos servicios a empresas operadoras logísticas en el Complejo Terminal de Cargas (CO.TE.CAR) cuando SENASA solicita medidas fitosanitarias.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="rounded-xl border border-fumigacion-cyan/20 bg-fumigacion-cream/50 p-6 transition hover:border-fumigacion-cyan/40"
            >
              <div className="mb-4 text-fumigacion-cyan">{s.icono}</div>
              <h3 className="text-lg font-semibold text-fumigacion-dark">
                {s.titulo}
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
