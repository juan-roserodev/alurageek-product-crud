import { conexion_API } from "./conexion_API.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const precio = (Math.random() * 100).toFixed(2);

    try {
        await conexion_API.enviarProducto(titulo, imagem, precio);
        window.location.href = "../pages/envio-concluido.html";
    } catch (error) {
        console.error(error);
        alert('No se pudo guardar el producto. Para agregar productos ejecuta la API local (npm run api).');
    }
}

formulario.addEventListener("submit", evento => crearProducto(evento));
