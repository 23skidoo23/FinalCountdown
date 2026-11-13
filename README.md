# FinalCountdown

Proyecto full-stack con **React (Vite)** + **Express** + **MySQL**.

## Estructura

```
FinalCountdown/
├── client/          # Frontend React (Vite) → http://localhost:5173
├── server/          # Backend Express       → http://localhost:3001
│   └── src/
│       ├── config/db.js     # Conexión a MySQL (mysql2)
│       ├── routes/          # Rutas de la API
│       └── index.js         # Punto de entrada
├── database/
│   └── schema.sql   # Script para crear la BD y tablas
└── package.json     # Scripts para correr todo junto
```

## Requisitos

- Node.js 20.6+ (recomendado 22 o superior)
- MySQL (por ejemplo el de XAMPP)

## Instalación

```bash
git clone <URL-DEL-REPO>
cd FinalCountdown
npm run install:all
```

1. Enciende **MySQL** desde el panel de XAMPP.
2. Crea la base de datos: importa `database/schema.sql` en phpMyAdmin
   (http://localhost/phpmyadmin → Importar) o ejecuta:
   `mysql -u root -p < database/schema.sql`
3. Copia `server/.env.example` como `server/.env` y ajusta tus credenciales.

## Uso

```bash
npm run dev
```

Levanta backend y frontend a la vez. Abre http://localhost:5173 — la página
muestra si la API y la base de datos están conectadas.

Las peticiones a `/api/...` desde React se redirigen automáticamente al backend
(proxy configurado en `client/vite.config.js`).
