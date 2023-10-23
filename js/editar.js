// Función para obtener parámetros de la URL
function obtenerParametroGET(nombreParametro) {
    const parametrosURL = new URLSearchParams(window.location.search);
    return parametrosURL.get(nombreParametro);
  }

// Obtener el valor del parámetro "id" de la URL
let id = obtenerParametroGET("id");
let nombre = obtenerParametroGET("nombre");
let descripcion = obtenerParametroGET("descripcion");
let precio = obtenerParametroGET("precio");

//obtener el contenedor donde cargaremos el input para elid
let hidden = document.querySelector('#hidden');
let input = document.createElement('input');
input.type = 'hidden';
input.name = 'id';
input.value = id;
hidden.appendChild(input);

//obtenemos el input de nombre
let inputNombre = document.querySelector("#producto");
let inputDescripcion = document.querySelector("#descripcion");
let inputPrecio = document.querySelector("#precio");

inputNombre.value=nombre;
inputDescripcion.value = descripcion;
inputPrecio.value = precio;



