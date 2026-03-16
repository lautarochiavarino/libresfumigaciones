import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Libres Fumigaciones — Servicios fitosanitarios"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-fumigacion-dark/70 via-fumigacion-dark/60 to-fumigacion-dark/80"
          aria-hidden
        />
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-fumigacion-cyan text-2xl font-bold text-white shadow-lg">
            LF
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Libres Fumigaciones
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/95 drop-shadow-md">
          Empresa de Fumigación y Control de plagas
        </p>
        <p className="mt-2 text-sm text-white/80">
          Servicios fitosanitarios en CO.TE.CAR — Autorizado por SENASA
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-block rounded-lg bg-fumigacion-cyan px-6 py-3 text-sm font-medium text-white transition hover:bg-fumigacion-cyan/90"
        >
          Consultar servicio
        </a>
      </div>
    </section>
  );
}
