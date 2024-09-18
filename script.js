// Inicializar carrito vacío
let carrito = [];

// Función para actualizar el carrito y mostrar los productos añadidos
function actualizarCarrito() {
    const carritoContainer = document.getElementById('carrito-items');
    const totalContainer = document.getElementById('total');

    carritoContainer.innerHTML = ''; // Limpiar carrito
    let total = 0;

    carrito.forEach((producto, index) => {
        // Crear elementos para mostrar los productos en el carrito
        const item = document.createElement('div');
        item.classList.add('carrito-item');

        const nombre = document.createElement('span');
        nombre.textContent = producto.nombre;

        const precio = document.createElement('span');
        precio.textContent = `$${producto.precio.toFixed(2)}`;

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => {
            eliminarProducto(index); // Eliminar producto del carrito
        });

        item.appendChild(nombre);
        item.appendChild(precio);
        item.appendChild(eliminarBtn);

        carritoContainer.appendChild(item);

        total += producto.precio; // Calcular el total
    });

    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    actualizarCarrito(); // Actualizar la vista del carrito
    alert(`${nombre} añadido al carrito`);
}

// Función para eliminar producto del carrito
function eliminarProducto(index,nombre) {
    const producto = {nombre}
    carrito.splice(index, 1);
    actualizarCarrito(); // Actualizar la vista del carrito
    alert(`Articulo eliminado con exito!!`);
}

// Seleccionar los botones de cada producto y añadir evento de clic
const botonesCarrito = document.querySelectorAll('.producto-card button');

botonesCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombreProducto = boton.parentElement.querySelector('h3').textContent;
        const precioProducto = parseFloat(boton.parentElement.querySelector('p').textContent.replace('$', ''));
        agregarAlCarrito(nombreProducto, precioProducto);
    });
});

// Actualización inicial del carrito (vacío al inicio)
actualizarCarrito();
