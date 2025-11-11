# React + TypeScript + Vite

## Estructura del proyecto

```powershell
react-app/
├─ src/
│  ├─ App.tsx  # Muestra el componente Mensaje.tsx para prueba
│  ├─ main.tsx
│  └─ AutoDoc/
│     ├─ Components/
│     │  └─ Mensaje.tsx  # Componente de prueba
│     ├─ Models/
│     │  └─ models.tsx
│     └─ Services/
│        └─ services.tsx  # Servicio de prueba que llama a /saludo
├─ index.html
├─ package.json
├─ vite.config.ts
└─ tsconfig.json
```

## Instalación y ejecución (Windows PowerShell)

```powershell
# Crear entorno virtual (opcional si usas Node.js)
# Instalar dependencias
npm install

# Ejecutar la aplicación en modo desarrollo
npm run dev
```
La app correrá por defecto en http://localhost:5173/.

## Conexión con el backend
- El servicio principal se encuentra en services.tsx.
- La ruta /saludo del backend Flask devuelve un JSON con el mensaje.
- Componente Mensaje.tsx consume este servicio y muestra el mensaje en pantalla.
```
