const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const cerrar = document.querySelector('.cerrar');

// Seleccionamos todas las imágenes de la galería
const imagenes = document.querySelectorAll('.grid-galeria img');

// Cuando hacemos click en cualquier imagen de la galería
imagenes.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Mostramos el lightbox
        lightboxImg.src = img.src;      // Le pasamos la fuente de la imagen clickeada
    });
});

// Cuando hacemos click en el botón de cerrar
cerrar.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Cerrar también si hacen click en el fondo oscuro
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});