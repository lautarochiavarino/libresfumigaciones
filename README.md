# Libres Fumigaciones — Sitio web

Sitio de **Libres Fumigaciones**, empresa de fumigación fitosanitaria. Servicios en CO.TE.CAR: fumigación con fosfuro de aluminio y pulverización con piretroides para maquinaria agrícola usada. Hecho con Next.js 15, TypeScript y Tailwind CSS.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura

- **`app/`** — Layout, página principal y estilos globales (App Router de Next.js).
- **`components/`** — Secciones: Hero, Servicios, Sobre, Contacto, Nav, Footer y botón de WhatsApp.

## Qué podés editar

- **Servicios**: texto en `components/Servicios.tsx`
- **Sobre nosotros**: `components/Sobre.tsx`
- **Contacto**: teléfono y mail en `components/Contacto.tsx` y `components/WhatsAppButton.tsx`
- **Imágenes**: carpeta `public/images/`

## Scripts

- `npm run dev` — Desarrollo con recarga en vivo.
- `npm run build` — Build para producción.
- `npm run start` — Servidor de producción (después de `build`).
- `npm run lint` — Ejecutar ESLint.
