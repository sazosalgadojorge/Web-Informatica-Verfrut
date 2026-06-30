# Despliegue en IIS — `api.verfrut.cl/qa_inicio/`

Guía de la configuración que funciona para subir esta SPA a una **subcarpeta** de un sitio IIS existente (sin tener acceso a configurar IIS).

## Configuración clave

### 1. `vite.config.js`

```js
export default defineConfig({
  base: './',   // ← rutas relativas, funciona en cualquier subcarpeta
  // ...resto igual
})
```

**Por qué `./` y no `/qa_inicio/`:** las rutas relativas hacen que los assets se resuelvan contra el `index.html`, sin importar cómo IIS mapee la carpeta. Inmune a cambios de subcarpeta.

### 2. `src/main.jsx`

```jsx
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
```

**Por qué HashRouter y no BrowserRouter:** las URLs quedan tipo `…/qa_inicio/#/turnos`. El `#` evita que el servidor tenga que reescribir rutas SPA (no requiere módulo URL Rewrite ni `web.config`).

### 3. `public/web.config` — **NO incluir**

Cualquier `web.config` propio chocaba con la herencia del parent ASP.NET (`api.verfrut.cl`) y tiraba el sitio completo (500 / app pool reciclado). Sin `web.config`, se heredan MIME types, handlers y default document del parent.

**Síntoma si vuelves a añadirlo mal:** `api.verfrut.cl` (parent) cae mientras `qa_inicio/` aparenta funcionar.

## Pasos para publicar

```bash
rm -rf dist
npm run build
```

Sube **todo el contenido de `dist/`** a la carpeta `qa_inicio/` del servidor (FTP/FileZilla). Borra primero los archivos antiguos.

## Verificación local (simula IIS)

`npm run preview` no funciona bien con `base: './'`. Usa cualquier servidor estático apuntado a `dist/`:

- Live Preview de VS Code → abre `dist/index.html`.
- O: `npx serve dist -l 3000` → `http://localhost:3000/`.

Si carga ahí, en IIS también.

## Rutas de la web

| Ruta | URL completa |
|---|---|
| Home | `https://api.verfrut.cl/qa_inicio/` |
| Turnos | `https://api.verfrut.cl/qa_inicio/#/turnos` |
| Anexos | `https://api.verfrut.cl/qa_inicio/#/anexos` |
| Videos | `https://api.verfrut.cl/qa_inicio/#/videos` |
| Blog | `https://api.verfrut.cl/qa_inicio/#/blog` |
| Post blog | `https://api.verfrut.cl/qa_inicio/#/blog/incidencias` |

## Lecciones aprendidas

- **NO usar `base: '/qa_inicio/'`** → rompe si IIS mapea la URL de otra forma.
- **NO usar `BrowserRouter`** → requiere URL Rewrite que el servidor no tiene.
- **NO añadir `web.config` con `<remove fileExtension>` o `<httpProtocol>`** → choca con el parent y lo tira.
- **NO añadir `<rewrite>`** → falta el módulo URL Rewrite en el servidor.
- La web estática anterior (`/Users/desarrolloverfrut/Documents/web-homeverfrut/homesistemas/`) usaba rutas relativas en su `index.html` y un `web.config` ultra-mínimo (solo un `mimeMap` para `.md`). Ese es el patrón a imitar si alguna vez se necesita `web.config`.

## Si en el futuro IT convierte `qa_inicio` en IIS Application

Entonces sí se puede usar:
- `BrowserRouter basename="/qa_inicio"` con URLs limpias.
- `web.config` con `<rewrite>` para SPA fallback.
- Cache headers, compresión, etc.

Mientras tanto, esta configuración (`base: './'` + HashRouter + sin `web.config`) es la **a prueba de balas**.
