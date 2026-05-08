# The Colors Gastroteka

Aplicación web para el bar restaurante The Colors Gastroteka. Compuesta por un frontend con React + Vite y un backend con Node.js + Express + SQLite.

---

## Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado en tu ordenador:

- **Node.js** v20 o superior → https://nodejs.org
- **Git** → https://git-scm.com

Puedes verificar que están instalados correctamente con:
```bash
node -v
git -v
```

---

## Instalación

Clona el repositorio:
```bash
git clone https://github.com/HelloWord03/The-Colors-Gastroteka.git
cd The-Colors-Gastroteka
```

### Backend
```bash
cd Backend-Bar
npm install
node index.js
```
El servidor arrancará en http://localhost:3000

### Frontend
Abre una nueva terminal:
```bash
cd Frontend-Bar
npm install
npm run dev
```
El frontend arrancará en http://localhost:5173

---

## Estructura del proyecto

```
The-Colors-Gastroteka/
├── Backend-Bar/        # API REST con Node.js + Express + SQLite
│   └── index.js        # Servidor principal
├── Frontend-Bar/       # Frontend con React + Vite + Tailwind
    ├── pages/          # Páginas HTML (menu.html, contacto.html)
    ├── public/         # Assets estáticos
    ├── src/
    │   ├── components/ # Componentes React
    │   ├── services/   # Llamadas a la API
    │   └── main.jsx    # Punto de entrada React
    ├── index.html      # Página principal
    ├── fonts/          # Fuentes compartidas
    ├── img/            # Imágenes del index
    ├── js/             # Scripts vanilla del index
    └── styles/         # Estilos del index
```

---

## Tecnologías utilizadas

| Área | Tecnología |
|------|-----------|
| Frontend | React, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Base de datos | SQLite |
| Despliegue frontend | Netlify |
| Despliegue backend | Render |

---

## URLs de producción

- **Web:** https://thecolorsgastroteka.netlify.app
- **API:** https://the-colors-gastroteka.onrender.com
