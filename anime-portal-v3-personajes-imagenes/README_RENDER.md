# Anime Portal V3 - Render Ready 🚀

Este proyecto incluye **backend (Express + MongoDB)** y **frontend (React + Vite + Tailwind)** listo para desplegar en [Render](https://render.com).

---

## 📂 Estructura del proyecto
```
anime-portal-v3-personajes-imagenes/
 ├── backend/      # Servidor Express (API REST)
 │   ├── server.js
 │   ├── package.json
 │   ├── .env.example
 │   └── models/
 └── frontend/     # Aplicación React (Vite + Tailwind)
     ├── src/
     ├── public/
     ├── package.json
     └── vite.config.js
```

---

## ⚙️ Backend en Render (Web Service)
1. Crear un nuevo **Web Service** en Render.  
2. Root directory: `backend`  
3. Configuración:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Variables de entorno (Settings → Environment):
   ```env
   MONGO_URI=tu_conexion_mongodb
   PORT=10000
   ```

📌 Render te dará una URL como:  
```
https://anime-backend.onrender.com
```

---

## 🎨 Frontend en Render (Static Site)
1. Crear un nuevo **Static Site** en Render.  
2. Root directory: `frontend`  
3. Configuración:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Variables de entorno:
   ```env
   VITE_API_URL=https://anime-backend.onrender.com
   ```

📌 Render te dará una URL como:  
```
https://anime-frontend.onrender.com
```

---

## 🔗 Conexión Frontend → Backend
En tu frontend, el código usa la variable `VITE_API_URL` para conectarse al backend:
```js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000";

fetch(`${API_URL}/api/anime`)
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## ✅ Checklist antes de subir a GitHub
- [ ] Eliminar `node_modules/` (ya se hizo en este paquete).  
- [ ] Confirmar `scripts` en `package.json` (ajustado).  
- [ ] Llenar valores reales en `.env` basado en `.env.example`.  
- [ ] Subir a un repositorio GitHub y conectar con Render.  

---

¡Listo! Tu proyecto está preparado para desplegarse 🚀
