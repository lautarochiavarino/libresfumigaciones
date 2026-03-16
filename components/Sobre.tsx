import Image from "next/image";

export function Sobre() {
  return (
    <section
      id="sobre"
      className="border-t border-fumigacion-cyan/20 bg-fumigacion-warm/30"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/logo-tarjeta.jpeg"
              alt="Libres Fumigaciones — Tarjeta de presentación"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-fumigacion-dark md:text-3xl">
              Sobre nosotros
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              <strong className="text-fumigacion-dark">Libres Fumigaciones</strong> es una empresa especializada en fumigación fitosanitaria, autorizada para prestar servicios en el Complejo Terminal de Cargas (CO.TE.CAR).
            </p>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Trabajamos con empresas operadoras logísticas cuando el Servicio Nacional de Sanidad y Calidad Agroalimentaria (SENASA) solicita medidas fitosanitarias para cargas de origen extranjero o para el ingreso de maquinaria agrícola usada.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Utilizamos productos autorizados y técnicas profesionales para garantizar un tratamiento efectivo y seguro, cumpliendo con todas las normativas vigentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
