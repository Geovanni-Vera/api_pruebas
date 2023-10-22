// Consumir la API productos
fetch('php/api-productos.php')
.then(response => response.json())
.then(data => {
    let productosDiv = document.getElementById('productos');
    // Para cada producto hacer:
    data.forEach(producto => {
        // Crear un div para el producto
        let productoDiv = document.createElement('div');
        productoDiv.className = 'producto';
        
        // Generar el HTML para el producto
        productoDiv.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p class="precio">\$${producto.precio}</p>
        `;
        productoDiv.classList.add('shadow');
        
        // Agregar el producto al div de productos
        productosDiv.appendChild(productoDiv);
    });
})
