// script.js

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    alert("Producto " + productoId + " agregado al carrito!");
}

// Agregando un evento al botón de "Agregar al Carrito"
document.querySelectorAll('.btn-primary').forEach(function(button) {
    button.addEventListener('click', function() {
        const productoId = this.parentElement.parentElement.querySelector('.card-title').textContent;
        agregarAlCarrito(productoId);
    });
});
