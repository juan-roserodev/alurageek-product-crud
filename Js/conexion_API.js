const API_URL = 'http://localhost:3001/productos';

async function listarProductos() {
    try {
        const conexion = await fetch(API_URL);
        if (!conexion.ok) throw new Error('API no disponible');
        return await conexion.json();
    } catch {
        // Modo demo (por ejemplo en GitHub Pages): sin la API local se muestran
        // los productos de ejemplo guardados en db.json, en solo lectura.
        const respaldo = await fetch(new URL('../db.json', import.meta.url));
        const datos = await respaldo.json();
        return datos.productos;
    }
}

async function enviarProducto(titulo, imagem, precio) {
    const conexion = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            imagem: imagem,
            precio: precio
        })
    });
    const conexionConvertida = await conexion.json();

    if (!conexion.ok) {
        throw new Error('Ha ocurrido un error al enviar el producto');
    }

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!conexion.ok) {
        throw new Error('Ha ocurrido un error al eliminar el producto');
    }

    return 'Producto eliminado correctamente';
}

export const conexion_API = {
    listarProductos,
    enviarProducto,
    eliminarProducto
}
