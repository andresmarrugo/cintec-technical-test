Objetivos de la prueba:

- [x] Crear una aplicación en Angular/React.
- [x] Permitir el ingreso del tipo y número de documento de un cliente.
- [x] Realizar una consulta de la información básica del cliente.
- [x] Crear una primera pantalla de ingreso de información.
  - [x] Tener tres campos: tipo, número de documento y país.
  - [x] Incluir un botón "Buscar" inicialmente inactivo.
- [x] Validar el campo de número de documento:
  - [x] Debe tener un mínimo de 8 caracteres y un máximo de 11.
  - [x] Debe aceptar solamente números.
  - [ ] Mostrar el número con separadores de miles.
- [x] Usar una lista desplegable para el campo "tipo de documento".
  - [x] Por defecto, no debe aparecer ninguno seleccionado.
- [x] Hacer que los campos "tipo de documento" y "número de documento" sean obligatorios para habilitar el botón "Buscar".
- [x] Consumir el servicio https://restcountries.com/v3.1/all para obtener la lista de países y cargarla en el campo de país.
- [x] Crear una segunda pantalla de resumen.
  - [x] Persistir los datos de la primera pantalla en esta nueva.
  - [x] Permitir al cliente visualizar información.
  - [x] Incluir un botón "Volver" para regresar a la pantalla anterior.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Cypres test

run the next commmand:

```bash
npm run cypress:run
# or
yarn cypress:run
# or
pnpm cypress:run
# or
bun cypress:run
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
