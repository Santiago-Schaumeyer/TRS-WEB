const lightbox = document.getElementById('lightbox');

const proyectos = [
    /* TRABAJOS DE TORNERIA */
    {
        id: 11,
        categoria: "torneria",
        titulo: "Cortantes para moldes plasticos",
        descripcion: "Cortantes para bidones plasticos de 5L.",
        img: "images/servicio-torneria1.jpeg"
    },
    {
        id: 12,
        categoria: "torneria",
        titulo: "Tornillos TwinTape",
        descripcion: "Tornillos M6 TwinTape fabricados en acero Inoxidable",
        img: "images/servicio-torneria2.jpeg"
    },
    {
        id: 13,
        categoria: "torneria",
        titulo: "Eje de transmisión industrial",
        descripcion: "Mecanizado de precisión para maquinaria agrícola.",
        img: "images/servicio-torneria3.jpeg"
    },
    {
        id: 14,
        categoria: "torneria",
        titulo: "Punzones para prensa de Extrusion",
        descripcion: "Mecanizado de Punzones en H13",
        img: "images/servicio-torneria4.jpeg"
    },
    {
        id: 15,
        categoria: "torneria",
        titulo: "Componentes Valvula direccional",
        descripcion: "",
        img: "images/servicio-torneria5.jpeg"
    },
    {
        id: 16,
        categoria: "torneria",
        titulo: "Engranaje",
        descripcion: "",
        img: "images/servicio-torneria6.jpeg"
    },
    {
        id: 17,
        categoria: "torneria",
        titulo: "Juego de engranaje de caja reductora",
        descripcion: "",
        img: "images/servicio-torneria7.jpeg"
    },
    {
        id: 18,
        categoria: "torneria",
        titulo: "Juego de engranaje de caja reductora",
        descripcion: ".",
        img: "images/servicio-torneria8.jpeg"
    },


    /* TRABAJOS DE FABRICACION */
    {
        id: 21,
        categoria: "fabricacion",
        titulo: "Mecheros para Horno de recocido",
        descripcion: ".",
        img: "images/servicio-fabricacion1.jpeg"
    },
    {
        id: 22,
        categoria: "fabricacion",
        titulo: "Cuchillas para molienda",
        descripcion: "Mecanizado de cuchillas en EK para molienda de plastico.",
        img: "images/servicio-fabricacion2.jpeg"
    },
    {
        id: 23,
        categoria: "fabricacion",
        titulo: "Adaptadores para piston hidraulico",
        descripcion: "Fabricacion de adaptadores para reformar maquina cortadora de bolsas plasticas.",
        img: "images/servicio-fabricacion3.jpeg"
    },
    {
        id: 24,
        categoria: "fabricacion",
        titulo: "Comando completo para prensa de extrusion",
        descripcion: "",
        img: "images/servicio-fabricacion4.jpeg"
    },
    {
        id: 25,
        categoria: "fabricacion",
        titulo: "Sistema para regular bobinadora de tela plastica",
        descripcion: "",
        img: "images/servicio-fabricacion5.jpeg"
    },

    /* TRABAJOS DE REPARACION */

    {
        id: 31,
        categoria: "reparacion",
        titulo: "Punta de eje camion Scania",
        descripcion: "Extraccion de punta partida y mecanizado de una nueva para su colocacion.",
        img: "images/servicio-reparacion1.jpeg"
    },
    {
        id: 32,
        categoria: "reparacion",
        titulo: "Regulador de Laminadora",
        descripcion: ".",
        img: "images/servicio-reparacion2.jpeg"
    },
    {
        id: 33,
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

// EFECTO CARRUSEL PARA LAS IMG DE SERVICIOS

document.addEventListener('DOMContentLoaded', () => {

    // 1. Función para llenar los Swipers automáticamente
    function renderizarSwipers() {
        proyectos.forEach(p => {
            // Buscamos el contenedor según la categoría (torneria, fabricacion, reparacion)
            const wrapper = document.getElementById(`wrapper-${p.categoria}`);
            if (!wrapper) return;

            // Creamos el div de la slide
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

    // Ejecutamos la carga de imágenes
    renderizarSwipers();

    // 2. Configuración de Swiper (Muy importante: observer: true)
    const swiperConfig = {
        loop: true,
        spaceBetween: 20,
        // ESTO ES LA CLAVE: hace que Swiper detecte cuando añadimos contenido
        observer: true, 
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

    // ... aquí mantienes tu lógica del lightbox y el hero ...
});