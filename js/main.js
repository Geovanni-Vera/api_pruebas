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
            <div class="iconos">

                <a href="php/borrar-producto.php?id=${producto.id}" class="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 7h16" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        <path d="M10 12l4 4m0 -4l-4 4" />
                    </svg>
                </a>
                <a href="editar.html?id=${producto.id}&nombre=${producto.nombre}&precio=${producto.precio}&descripcion=${producto.descripcion}" class="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                        <path d="M16 5l3 3" />
                    </svg>
                </a>
            </div>

        `;
            productoDiv.classList.add('shadow');

            // Agregar el producto al div de productos
            productosDiv.appendChild(productoDiv);
        });
    })

    let change = document.querySelector('#change');
    change.addEventListener('click', () => {
        let header = document.querySelector('#header');
        let footer = document.querySelector('#footer');
        header.classList.toggle('header');
        header.classList.toggle('header-n');
        footer.classList.toggle('header');
        footer.classList.toggle('header-n');
    
        let productosprecio = document.querySelectorAll(".precio");
        productosprecio.forEach( producto => {
            producto.classList.remove('precio');
            producto.classList.add('precio-n');
            console.log(producto);
        });
        

        
    
        let changeIcon = document.querySelector("#iconochange");
        changeIcon.classList.toggle('iconochange');
        changeIcon.classList.toggle('iconochange-n');
    });
    