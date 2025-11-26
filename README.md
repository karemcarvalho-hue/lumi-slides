# Lumi Slides Viewer

Visor de presentaciones interactivas para Lumi, construido con React + Vite + Tailwind CSS.

## Demo

**URL:** https://imartin-tiendanube.github.io/lumi-slides/

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Deploy a GitHub Pages

### Opción 1: Deploy Automático (GitHub Actions)

El repositorio está configurado con GitHub Actions. Cada push a `main` dispara un deploy automático.

**Pasos iniciales:**

1. Crear repositorio en GitHub: `lumi-slides`
2. En Settings → Pages → Build and deployment:
   - Source: **GitHub Actions**
3. Push del código a `main`
4. El workflow se ejecuta automáticamente

### Opción 2: Deploy Manual

```bash
npm run deploy
```

Esto ejecuta `gh-pages` y publica el contenido de `dist/` en la rama `gh-pages`.

## Configuración

Si cambias el nombre del repositorio, actualiza:

1. `vite.config.js` → `base: '/nombre-repo/'`
2. `package.json` → `homepage`

## Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
