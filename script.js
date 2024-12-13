document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];
    const totalElement = document.getElementById('total');
    const listaCarrito = document.getElementById('lista-carrito');
    const botonComprar = document.getElementById('comprar');
    const botonAnular = document.getElementById('anular-carrito');

    // Función para agregar productos al carrito
    const productos = document.querySelectorAll('.producto');
    productos.forEach((producto) => {
        const botonAgregar = producto.querySelector('.agregar');
        botonAgregar.addEventListener('click', () => {
            const id = producto.dataset.id;
            const nombre = producto.dataset.nombre;
            const precio = parseFloat(producto.dataset.precio);

            carrito.push({ id, nombre, precio });
            actualizarCarrito();
        });
    });

    // Función para actualizar el carrito
    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;
        carrito.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            listaCarrito.appendChild(li);
            total += item.precio;
        });

        totalElement.textContent = total.toFixed(2);
    }

    // Función para anular el carrito
    botonAnular.addEventListener('click', () => {
        carrito.length = 0;  // Vaciar el carrito
        actualizarCarrito();
        alert("El carrito ha sido anulado.");
    });

    // Función para realizar la compra
    botonComprar.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert("No tienes productos en el carrito.");
        } else {
            const totalCompra = carrito.reduce((total, item) => total + item.precio, 0);
            alert(`Gracias por tu compra. Total: $${totalCompra.toFixed(2)}. Tu pedido está en proceso.`);
            carrito.length = 0; // Vaciar carrito después de compra
            actualizarCarrito();
        }
    });

    // Formulario de contacto
    const formContacto = document.getElementById('form-contacto');
    formContacto.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Gracias por contactarnos. Nos pondremos en contacto pronto.");
        formContacto.reset();
    });
});
