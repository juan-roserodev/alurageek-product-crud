import { conexion_API } from "./conexion_API.js";
import { lista } from "./mostrarProductos.js";

// Delegación de eventos: un solo listener en la lista atiende los botones
// de eliminar de todas las tarjetas, incluidas las que se crean después.
lista.addEventListener('click', async (evento) => {
    const boton = evento.target.closest('.delete-button');
    if (!boton) return;

    const idProducto = boton.dataset.id;
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (!confirmacion) return;

    try {
        await conexion_API.eliminarProducto(idProducto);
        alert('Producto eliminado correctamente');
        boton.closest('.card').remove();
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        alert('No se pudo eliminar el producto. Para eliminar productos ejecuta la API local (npm run api).');
    }
});
