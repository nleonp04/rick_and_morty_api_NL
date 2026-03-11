# 🛸 Rick and Morty App - Angular

Aplicación en Angular que consume la API pública de Rick and Morty.

---

## 📋 ¿Qué hace esta aplicación?

- Muestra una lista de personajes de Rick and Morty en tarjetas
- Cada tarjeta muestra: imagen, nombre, estado (Alive/Dead/Unknown) y especie
- Tiene un buscador por nombre de personaje
- Muestra mensaje de "Cargando..." mientras espera la respuesta de la API

---

## 🛠️ Tecnologías usadas

- **Angular 17** (framework)
- **TypeScript** (lenguaje)
- **HttpClient** (para consumir la API)
- **Rick and Morty API** (https://rickandmortyapi.com)

---

## 📁 Estructura del proyecto

```
rick-and-morty-app/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── character.model.ts   ← Define la forma de los datos
│   │   ├── services/
│   │   │   └── character.service.ts ← Hace las peticiones a la API
│   │   ├── app.component.ts         ← Lógica del componente principal
│   │   ├── app.component.html       ← Vista (lo que se ve en pantalla)
│   │   ├── app.component.css        ← Estilos del componente
│   │   ├── app.config.ts            ← Configuración de la app
│   │   └── app.routes.ts            ← Rutas de la app
│   ├── index.html                   ← Página HTML principal
│   ├── main.ts                      ← Punto de entrada
│   └── styles.css                   ← Estilos globales
├── angular.json                     ← Configuración de Angular
├── package.json                     ← Lista de dependencias
├── tsconfig.json                    ← Configuración de TypeScript
└── README.md                        ← Este archivo
```

---

## 🚀 ¿Cómo correr el proyecto?

### Paso 1 - Instalar Node.js
Descarga Node.js desde: https://nodejs.org (versión LTS recomendada)

### Paso 2 - Instalar Angular CLI
Abre la terminal y escribe:
```bash
npm install -g @angular/cli
```

### Paso 3 - Clonar o descargar el proyecto
Si lo tienes en GitHub:
```bash
git clone https://github.com/TU_USUARIO/rick-and-morty-app.git
```

### Paso 4 - Entrar a la carpeta del proyecto
```bash
cd rick-and-morty-app
```

### Paso 5 - Instalar las dependencias
```bash
npm install
```
⚠️ Esto puede tardar unos minutos. Descarga todos los paquetes necesarios.

### Paso 6 - Correr la aplicación
```bash
ng serve
```

### Paso 7 - Ver en el navegador
Abre tu navegador y ve a:
```
http://localhost:4200
```

¡Listo! Deberías ver la aplicación funcionando 🎉

---

## 📤 ¿Cómo subir a GitHub?

### Paso 1 - Crear repositorio en GitHub
1. Ve a https://github.com
2. Haz clic en "New repository"
3. Ponle nombre: `rick-and-morty-app`
4. Haz clic en "Create repository"

### Paso 2 - Iniciar Git en el proyecto (desde la terminal)
```bash
git init
git add .
git commit -m "primer commit - app rick and morty"
```

### Paso 3 - Conectar con GitHub y subir
```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/rick-and-morty-app.git
git push -u origin main
```

---

## 🔑 Conceptos importantes usados

| Concepto | ¿Para qué sirve? |
|----------|------------------|
| `HttpClient` | Para hacer peticiones HTTP a la API |
| `*ngFor` | Para repetir elementos en la vista |
| `{{ }}` | Interpolación: mostrar datos en el HTML |
| `*ngIf` | Para mostrar/ocultar elementos |
| `[ngClass]` | Para aplicar clases CSS dinámicamente |
| `[(ngModel)]` | Para el buscador (two-way binding) |
| `Observable` | Para manejar respuestas asíncronas |
| `subscribe()` | Para "escuchar" la respuesta de la API |

---

## 🌐 API utilizada

- **Endpoint principal:** https://rickandmortyapi.com/api/character
- **Búsqueda por nombre:** https://rickandmortyapi.com/api/character?name=rick
- **Documentación:** https://rickandmortyapi.com/documentation

---

Hecho con ❤️ como actividad de aprendizaje de Angular
