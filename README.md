# AluraGeek · Catálogo de productos con CRUD

Aplicación web para **listar, agregar y eliminar productos** de una tienda geek, que consume una API REST simulada con **JSON Server**. Es mi solución al challenge **AluraGeek** del programa **Oracle Next Education (ONE) + Alura**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![JSON Server](https://img.shields.io/badge/JSON_Server-323330?style=flat&logo=json&logoColor=white)
[![GitHub Pages](https://img.shields.io/github/deployments/juan-roserodev/alurageek-product-crud/github-pages?label=GitHub%20Pages&logo=githubpages)](https://juan-roserodev.github.io/alurageek-product-crud/)
[![Licencia MIT](https://img.shields.io/badge/licencia-MIT-green?style=flat)](LICENSE)

### 🔗 [Ver demo en vivo](https://juan-roserodev.github.io/alurageek-product-crud/)

> La demo en GitHub Pages funciona en **modo solo lectura**: como no hay API disponible, el catálogo se carga desde `db.json`. Para agregar y eliminar productos, ejecuta la API en local (ver instalación).

---

## 🎯 Descripción

El objetivo del reto era practicar el consumo de una API REST con `fetch` y `async/await`: leer los productos, crear nuevos con un formulario y eliminarlos, actualizando la interfaz sin recargar la página.

## ✨ Características

- 📦 **Listar productos** desde la API y mostrarlos en tarjetas.
- ➕ **Agregar productos** con nombre e imagen desde un formulario (`POST`).
- ❌ **Eliminar productos** con confirmación (`DELETE`).
- 🧪 **Modo demo:** si la API no está disponible, se muestran los productos de ejemplo de `db.json`.
- Diseño responsive con Flexbox.

## 🛠️ Stack tecnológico

- **HTML5** y **CSS3** (Flexbox, reset, diseño responsive)
- **JavaScript (ES6+)** con módulos, `fetch` y `async/await`
- **JSON Server** como API REST simulada
- **Node.js / npm** para ejecutar la API

## 🗂️ Estructura

```
alurageek-product-crud/
├── index.html                 # Catálogo de productos
├── pages/
│   ├── enviar-producto.html   # Formulario para agregar productos
│   └── envio-concluido.html   # Confirmación de envío
├── Js/
│   ├── conexion_API.js        # Capa de acceso a la API (GET, POST, DELETE) y modo demo
│   ├── mostrarProductos.js    # Renderizado de las tarjetas
│   ├── crearProducto.js       # Envío del formulario
│   └── eliminarProducto.js    # Eliminación con delegación de eventos
├── css/  img/
└── db.json                    # Datos de la API simulada
```

## 🚀 Instalación y uso local

Requisitos: [Node.js](https://nodejs.org/) 16 o superior.

```bash
git clone https://github.com/juan-roserodev/alurageek-product-crud.git
cd alurageek-product-crud
npm install
npm run api        # Inicia JSON Server en http://localhost:3001/productos
```

Luego abre `index.html` con un servidor local (por ejemplo, *Live Server* en VS Code).

## ✅ Buenas prácticas aplicadas

- **Capa de API separada** (`conexion_API.js`): la interfaz no conoce los detalles de las peticiones HTTP.
- **Prevención de XSS:** las tarjetas se construyen con `createElement` y `textContent`, no con `innerHTML`, así el texto ingresado por el usuario no puede inyectar HTML ni scripts.
- **Delegación de eventos:** un solo listener atiende los botones de eliminar, incluidos los de tarjetas creadas después.
- **Manejo de errores** con `try/catch` y mensajes claros para el usuario.

## 👤 Autor

**Juan David Rosero Reyes** · Desarrollador web junior

[![Portafolio](https://img.shields.io/badge/Portafolio-juan--roserodev.github.io-0A66C2?style=flat&logo=githubpages&logoColor=white)](https://juan-roserodev.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-david--reyes--dev-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/david-reyes-dev)
[![Email](https://img.shields.io/badge/Email-juan.rosero21%40hotmail.com-0078D4?style=flat&logo=microsoftoutlook&logoColor=white)](mailto:juan.rosero21@hotmail.com)
