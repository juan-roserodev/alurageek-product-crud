import { conexion_API } from "./conexion_API.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(id, titulo, imagem, precio) {
    // Se construye la tarjeta con nodos del DOM y textContent (no innerHTML)
    // para que el texto ingresado por el usuario no pueda inyectar HTML o scripts.
    const card = document.createElement("div");
    card.className = "card";

    const imagen = document.createElement("img");
    imagen.src = imagem;
    imagen.alt = titulo;
    imagen.className = "imagen-producto";

    const info = document.createElement("div");
    info.className = "card__info";

    const tituloProducto = document.createElement("h2");
    tituloProducto.className = "title-producto";
    tituloProducto.textContent = titulo;

    const informacion = document.createElement("div");
    informacion.className = "card__informacion";

    const precioProducto = document.createElement("span");
    precioProducto.className = "precio";
    precioProducto.textContent = precio;

    const botonEliminar = document.createElement("button");
    botonEliminar.className = "delete-button";
    botonEliminar.dataset.id = id;
    botonEliminar.setAttribute("aria-label", `Eliminar ${titulo}`);
    botonEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>';

    informacion.append(precioProducto, botonEliminar);
    info.append(tituloProducto, informacion);
    card.append(imagen, info);
    return card;
}

async function listarProductos() {
    try {
        const listaAPI = await conexion_API.listarProductos();
        lista.innerHTML = ''; // Limpiar el contenido del contenedor

        // Crear tarjetas dinámicamente
        listaAPI.forEach(producto =>
            lista.appendChild(crearCard(producto.id, producto.titulo, producto.imagem, producto.precio))
        );
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
    }
}

listarProductos();

export { lista, listarProductos };