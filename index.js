
// JavaScript
document.getElementById('menu').addEventListener('click', function() {
var menu = document.getElementById('menu');
if (menu.style.display === 'none') {
menu.style.display = 'block';
} else {
menu.style.display = 'none';
}
});

// Asegúrate de que cada categoría tenga un id que coincida con el href del enlace correspondiente
var categorias = document.querySelectorAll('nav a');
categorias.forEach(function(categoria) {
categoria.addEventListener('click', function(e) {
e.preventDefault();
var id = this.getAttribute('href').substring(1);
var elemento = document.getElementById(id);
elemento.scrollIntoView({behavior: 'smooth'});
});
});

// Código para el carrusel
var carrusel = document.getElementById('carrusel');
var imagenes = carrusel.querySelectorAll('.imagen');
var indiceActual = 0;

function mostrarImagen(indice) {
imagenes.forEach(function(imagen, indice) {
imagen.style.display = indice === indiceActual ? 'block' : 'none';
});
}

mostrarImagen(indiceActual);

setInterval(function() {
indiceActual = (indiceActual + 1) % imagenes.length;
mostrarImagen(indiceActual);
}, 3000);

