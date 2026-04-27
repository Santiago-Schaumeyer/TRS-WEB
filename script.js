const lightbox = document.getElementById('lightbox');

const proyectos = [
    /* TRABAJOS DE TORNERIA */
    {
        id: 11,
        categoria: "torneria",
        titulo: "Cortantes para moldes plasticos",
        descripcion: "Cortantes para bidones plasticos de 5L.",
        img: "images/servicios/servicio-torneria1.jpeg"
    },
    {
        id: 12,
        categoria: "torneria",
        titulo: "Tornillos TwinTape",
        descripcion: "Tornillos M6 TwinTape fabricados en acero Inoxidable",
        img: "images/servicios/servicio-torneria2.jpeg"
    },
    {
        id: 13,
        categoria: "torneria",
        titulo: "Eje de transmisión industrial",
        descripcion: "Mecanizado de precisión para maquinaria agrícola.",
        img: "images/servicios/servicio-torneria3.jpeg"
    },
    {
        id: 14,
        categoria: "torneria",
        titulo: "Punzones para prensa de Extrusion",
        descripcion: "Mecanizado de Punzones en H13",
        img: "images/servicios/servicio-torneria4.jpeg"
    },
    {
        id: 15,
        categoria: "torneria",
        titulo: "Componentes Valvula direccional",
        descripcion: "",
        img: "images/servicios/servicio-torneria5.jpeg"
    },
    {
        id: 16,
        categoria: "torneria",
        titulo: "Engranaje",
        descripcion: "",
        img: "images/servicios/servicio-torneria6.jpeg"
    },
    {
        id: 17,
        categoria: "torneria",
        titulo: "Juego de engranaje de caja reductora",
        descripcion: "",
        img: "images/servicios/servicio-torneria7.jpeg"
    },
    {
        id: 18,
        categoria: "torneria",
        titulo: "Juego de engranaje de caja reductora",
        descripcion: ".",
        img: "images/servicios/servicio-torneria8.jpeg"
    },
    {
        id: 19,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria9.jpeg"
    },
    {
        id: 110,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria10.jpeg"
    },
    {
        id: 111,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria11.jpeg"
    },
    {
        id: 112,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria12.jpeg"
    },
    {
        id: 113,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria13.jpeg"
    },
    {
        id: 114,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria14.jpeg"
    },
    {
        id: 115,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria15.jpeg"
    },
    {
        id: 116,
        categoria: "torneria",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-torneria16.jpeg"
    },

    /* TRABAJOS DE FABRICACION */
    {
        id: 21,
        categoria: "fabricacion",
        titulo: "Mecheros para Horno de recocido",
        descripcion: ".",
        img: "images/servicios/servicio-fabricacion1.jpeg"
    },
    {
        id: 22,
        categoria: "fabricacion",
        titulo: "Cuchillas para molienda",
        descripcion: "Mecanizado de cuchillas en EK para molienda de plastico.",
        img: "images/servicios/servicio-fabricacion2.jpeg"
    },
    {
        id: 23,
        categoria: "fabricacion",
        titulo: "Adaptadores para piston hidraulico",
        descripcion: "Fabricacion de adaptadores para reformar maquina cortadora de bolsas plasticas.",
        img: "images/servicios/servicio-fabricacion3.jpeg"
    },
    {
        id: 24,
        categoria: "fabricacion",
        titulo: "Comando completo para prensa de extrusion",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion4.jpeg"
    },
    {
        id: 25,
        categoria: "fabricacion",
        titulo: "Sistema para regular bobinadora de tela plastica",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion5.jpeg"
    },
    {
        id: 26,
        categoria: "fabricacion",
        titulo: "",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion6.jpeg"
    },
    {
        id: 27,
        categoria: "fabricacion",
        titulo: "",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion7.jpeg"
    },
    {
        id: 28,
        categoria: "fabricacion",
        titulo: "",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion8.jpeg"
    },
    {
        id: 29,
        categoria: "fabricacion",
        titulo: "",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion9.jpeg"
    },
    {
        id: 210,
        categoria: "fabricacion",
        titulo: "",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion10.jpeg"
    },
    {
        id: 211,
        categoria: "fabricacion",
        titulo: "",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion11.jpeg"
    },
    {
        id: 212,
        categoria: "fabricacion",
        titulo: "",
        descripcion: "",
        img: "images/servicios/servicio-fabricacion12.jpeg"
    },

    /* TRABAJOS DE REPARACION */

    {
        id: 31,
        categoria: "reparacion",
        titulo: "Punta de eje camion Scania",
        descripcion: "Extraccion de punta partida y mecanizado de una nueva para su colocacion.",
        img: "images/servicios/servicio-reparacion1.jpeg"
    },
    {
        id: 32,
        categoria: "reparacion",
        titulo: "Regulador de Laminadora",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion2.jpeg"
    },
    {
        id: 33,
        categoria: "reparacion",
        titulo: "Caja de camion Mercedes Benz",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion3.jpeg"
    },
    {
        id: 34,
        categoria: "reparacion",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion4.jpeg"
    },
    {
        id: 35,
        categoria: "reparacion",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion5.jpeg"
    },
    {
        id: 36,
        categoria: "reparacion",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion6.jpeg"
    },
    {
        id: 37,
        categoria: "reparacion",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion7.jpeg"
    },
    {
        id: 38,
        categoria: "reparacion",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion8.jpeg"
    },
    {
        id: 39,
        categoria: "reparacion",
        titulo: "",
        descripcion: ".",
        img: "images/servicios/servicio-reparacion9.jpeg"
    },
];


function renderizarProyectos() {
    proyectos.forEach(p => {
        const contenedor = document.getElementById(`grid-${p.categoria}`);
        if (!contenedor) return;

        const card = document.createElement('div');
        card.className = 'card-proyecto';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.titulo}" onclick="abrirLightbox(${p.id})" style="cursor:pointer;">
            <h3>${p.titulo}</h3>`;
        contenedor.appendChild(card);
    });
}

// LIGHTBOX
let proyectosFiltrados = []
let indiceActual = 0;

function abrirLightbox(id) {
    const proyectoSeleccionado = proyectos.find(p => p.id === id);
    if (!proyectoSeleccionado) return; // Si no lo encuentra, cortamos
    
    proyectosFiltrados = proyectos.filter(p => p.categoria === proyectoSeleccionado.categoria);
    indiceActual = proyectosFiltrados.findIndex(p => p.id === id);

    actualizarContenidoLightbox();
    document.getElementById('lightbox').style.display = 'flex';
}

function actualizarContenidoLightbox() {
    const proyecto = proyectosFiltrados[indiceActual];
    
    document.getElementById('lightbox-img').src = proyecto.img;
    document.getElementById('lightbox-titulo').innerText = proyecto.titulo;
    document.getElementById('lightbox-desc').innerText = proyecto.descripcion;
}

function cambiarImagen(direccion) {
    // direccion será 1 para siguiente, -1 para anterior
    indiceActual += direccion;

    // Lógica de "carrusel": si llega al final, vuelve al principio
    if (indiceActual >= proyectosFiltrados.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = proyectosFiltrados.length - 1;
    }

    actualizarContenidoLightbox();
}

function cerrarLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', renderizarProyectos);


// HERO QUE PASA IMAGENES 
const hero = document.querySelector('.hero');

const backgrounds = ['hero-1', 'hero-2', 'hero-3', 'hero-4'];
let currentIndex = 0;

function changeHeroBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;

    hero.className = 'hero ' + backgrounds[currentIndex];
}

setInterval(changeHeroBackground, 5000);

// EFECTO CARRUSEL PARA LAS IMG DE SERVICIOS

document.addEventListener('DOMContentLoaded', () => {

    // 1. Función para llenar los Swipers automáticamente
    function renderizarSwipers() {
        proyectos.forEach(p => {            
            const wrapper = document.getElementById(`wrapper-${p.categoria}`);
            if (!wrapper) return;

            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <img src="${p.img}" alt="${p.titulo}" 
                     onclick="abrirLightbox(${p.id})" 
                     style="cursor:pointer; width: 100%;">
            `;
            wrapper.appendChild(slide);
        });
    }

    renderizarSwipers();

    // 2. Configuración de Swiper
    const swiperConfig = {
        loop: true,
        spaceBetween: 20,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 3 }
        }
    };

    // Inicializamos todos
    new Swiper('.torneria-swiper', swiperConfig);
    new Swiper('.fabricacion-swiper', swiperConfig);
    new Swiper('.reparacion-swiper', swiperConfig); 
});

// Detectar cuando se presiona una tecla
document.addEventListener('keydown', (event) => {
    // Primero: verificar si el lightbox está abierto (si no, no hacemos nada)
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') {
        
        // Flecha Derecha -> Siguiente
        if (event.key === 'ArrowRight') {
            cambiarImagen(1);
        } 
        // Flecha Izquierda -> Anterior
        else if (event.key === 'ArrowLeft') {
            cambiarImagen(-1);
        }
        // Tecla ESC -> Cerrar Lightbox 
        else if (event.key === 'Escape') {
            cerrarLightbox();
        }
    }
});