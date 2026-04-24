const lightbox = document.getElementById('lightbox');

const proyectos = [
    /* TRABAJOS DE TORNERIA */
    {
        id: 1,
        categoria: "torneria",
        titulo: "Cortantes para moldes plasticos",
        descripcion: "Cortantes para bidones plasticos de 5L.",
        img: "images/servicio-torneria1.jpeg"
    },
    {
        id: 2,
        categoria: "torneria",
        titulo: "Tornillos TwinTape",
        descripcion: "Tornillos M6 TwinTape fabricados en acero Inoxidable",
        img: "images/servicio-torneria2.jpeg"
    },
    {
        id: 3,
        categoria: "torneria",
        titulo: "Eje de transmisión industrial",
        descripcion: "Mecanizado de precisión para maquinaria agrícola.",
        img: "images/servicio-torneria3.jpeg"
    },

    /* TRABAJOS DE FABRICACION */
    {
        id: 4,
        categoria: "fabricacion",
        titulo: "Mecheros para Horno de recocido",
        descripcion: ".",
        img: "images/servicio-fabricacion1.jpeg"
    },
    {
        id: 5,
        categoria: "fabricacion",
        titulo: "Cuchillas para molienda",
        descripcion: "Mecanizado de cuchillas en EK para molienda de plastico.",
        img: "images/servicio-fabricacion2.jpeg"
    },
    {
        id: 6,
        categoria: "fabricacion",
        titulo: "Adaptadores para piston hidraulico",
        descripcion: "Fabricacion de adaptadores para reformar maquina cortadora de bolsas plasticas.",
        img: "images/servicio-fabricacion3.jpeg"
    },

    /* TRABAJOS DE REPARACION */

    {
        id: 7,
        categoria: "reparacion",
        titulo: "Punta de eje camion Scania",
        descripcion: "Extraccion de punta partida y mecanizado de una nueva para su colocacion.",
        img: "images/servicio-reparacion1.jpeg"
    },
    {
        id: 8,
        categoria: "reparacion",
        titulo: "Regulador de Laminadora",
        descripcion: ".",
        img: "images/servicio-reparacion2.jpeg"
    },
    {
        id: 9,
        categoria: "reparacion",
        titulo: "Caja de camion Mercedes Benz",
        descripcion: ".",
        img: "images/servicio-reparacion3.jpeg"
    },
];


function renderizarProyectos() {
    proyectos.forEach(p => {
        const contenedor = document.getElementById(`grid-${p.categoria}`);
        if (!contenedor) return;

        const card = document.createElement('div');
        card.className = 'card-proyecto';
        // Inyectamos la llamada a abrirLightbox directamente
        card.innerHTML = `
            <img src="${p.img}" alt="${p.titulo}" onclick="abrirLightbox(${p.id})" style="cursor:pointer;">
            <h3>${p.titulo}</h3>
        `;
        contenedor.appendChild(card);
    });
}

function abrirLightbox(id) {
    const proyecto = proyectos.find(p => p.id === id);
    if (!proyecto) return;

    // Asignar datos
    document.getElementById('lightbox-img').src = proyecto.img;
    document.getElementById('lightbox-titulo').innerText = proyecto.titulo;
    document.getElementById('lightbox-desc').innerText = proyecto.descripcion;
    
    lightbox.style.display = 'flex';
}

function cerrarLightbox() {
    lightbox.style.display = 'none';
}

lightbox.addEventListener('click', (e) => {
    // Si el clic es exactamente en el div lightbox (fondo) y no en la imagen/info
    if (e.target.id === 'lightbox') {
        cerrarLightbox();
    }
});

document.addEventListener('DOMContentLoaded', renderizarProyectos);

// HERO QUE PASA IMAGENES 
const hero = document.querySelector('.hero');

const backgrounds = ['hero-1', 'hero-2', 'hero-3'];
let currentIndex = 0;

function changeHeroBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;

    hero.className = 'hero ' + backgrounds[currentIndex];
}

setInterval(changeHeroBackground, 5000);