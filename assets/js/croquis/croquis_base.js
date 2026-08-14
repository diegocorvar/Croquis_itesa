/*
    NOTA
        Las coordenadas (que están en píxeles) de cada edificio están
        puestas manualmente y solo sirven para la imagen utilizada como
        croquis (en este caso croquis_itesa.webp).

        Si se requiere cambiar el croquis, habría que actualizar las 
        coordenadas para que coincidan con la nueva imagen.

        Para esto puede utilizar la HERRAMIENTA DE DESARROLLO
*/

/* ====================================================
    MAPA BASE
==================================================== */

export const CROQUIS_BASE = L.map('croquisItesa', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 1,

    zoomSnap: 0,
    zoomDelta: 0.25,
    wheelPxPerZoomLevel: 120
});

// HERRAMIENTA DE DESARROLLO: Obtener coordenadas al hacer clic en el mapa
CROQUIS_BASE.on('click', function(e) {
    const y = Math.round(e.latlng.lat);
    const x = Math.round(e.latlng.lng);
    console.log(`[${y}, ${x}]`);
});

CROQUIS_BASE.setZoom(-1);

/* ====================================================
    CARGAR IMAGEN DEL CROQUIS
==================================================== */

const rutaImgCroquis = BASE_URL + 'assets/img/material_croquis/croquis_itesa.webp';
let imagenCroquis = new Image();
imagenCroquis.src = rutaImgCroquis;

imagenCroquis.onload = function () {
    const anchoImagenCroquis = imagenCroquis.width;
    const altoImagenCroquis = imagenCroquis.height;


    const limites = [
        [0, 0], // Esquina inferior izquierda de la imagen.
        [altoImagenCroquis, anchoImagenCroquis] // Esquina superior derecha de la imagen.
    ];
        
    L.imageOverlay(rutaImgCroquis, limites).addTo(CROQUIS_BASE);

    const limitesDesplazamiento = limites.map(coordenadas => {
        const incremento = 800;
        coordenadas[0] += coordenadas[0] === 0 ? -incremento : incremento;
        coordenadas[1] += coordenadas[1] === 0 ? -incremento : incremento;

        return coordenadas;
    });

    setTimeout(() => {
        CROQUIS_BASE.invalidateSize();
        CROQUIS_BASE.fitBounds(limites);
        CROQUIS_BASE.setMaxBounds(limitesDesplazamiento);
    }, 50);
};

/* ====================================================
    COORDENADAS DE EDIFICIOS
==================================================== */

const coordsEdificioE = [
    [1754, 1352],
    [1922, 1377],
    [1889, 1582],
    [1721, 1554]
];

const coordsEdificioA = [
    [1268, 529],
    [1223, 816],
    [1076, 789],
    [1125, 504]
];

const coordsEdificioD = [
    [1340, 1448],
    [1308, 1633],
    [1032, 1584],
    [1060, 1404]
];

const coordsEdificioC = [
    [1635, 1102],
    [1595, 1378],
    [1444, 1352],
    [1491, 1082]
];

const coordsEdificioB = [
    [1709, 517],
    [1666, 788],
    [1490, 760],
    [1532, 489]
];

const coordsEdificioF = [
    [2121, 645],
    [2096, 812],
    [1845, 770],
    [1867, 610]
];

const coordsEdificioG = [
    [2253, 861],
    [2230, 1019],
    [2157, 1010],
    [2176, 849]
];

const coordsCafeteria = [
    [1914, 996],
    [1901, 1081],
    [1799, 1065],
    [1809, 978]
];

const coordsBiblioteca = [
    [1896, 1652],
    [1878, 1768],
    [1607, 1727],
    [1623, 1609]
];
/* ====================================================
    POLIGONOS DE EDIFICIOS
==================================================== */

export const edificioE = L.polygon(coordsEdificioE, {
    className: 'poligono-edificio',
    id: 'E',
    nombre: 'Edificio E',
    descripcion: 'Edificio de la carrera de Ingeniería en Sistemas Computacionales',
    imagen: 'fachada_edificioE.webp',
    imagen360: 'edificio_E.webp',
    areas: ['LC1', 'LC2', 'LC3', 'LC4', 'LC5', 'LC6', 'LC7', 'SITE']
}).addTo(CROQUIS_BASE);

export const edificioA = L.polygon(coordsEdificioA, {
    className: 'poligono-edificio',
    id: 'A',
    nombre: 'Edificio A',
    descripcion: 'Edificio principal de Administración y Servicios Escolares',
    imagen: 'fachada_edificioA.webp',
    imagen360: 'edificio_E.webp',
    areas: ['Dirección General', 'Control Escolar', 'Finanzas', 'Recursos Humanos', 'Sala de Juntas']
}).addTo(CROQUIS_BASE);


export const edificioB = L.polygon(coordsEdificioB, {
    className: 'poligono-edificio',
    id: 'B',
    nombre: 'Edificio B',
    descripcion: 'Descripción pendiente del Edificio B',
    imagen: 'fachada_edificioB.webp', 
    imagen360: 'edificio_E.webp',
    areas: ['Área B1', 'Área B2']
}).addTo(CROQUIS_BASE);

export const edificioC = L.polygon(coordsEdificioC, {
    className: 'poligono-edificio',
    id: 'C',
    nombre: 'Edificio C',
    descripcion: 'Descripción pendiente del Edificio C',
    imagen: 'fachada_edificioC.webp',
    imagen360: 'edificio_E.webp',
    areas: ['Área C1', 'Área C2']
}).addTo(CROQUIS_BASE);

export const edificioD = L.polygon(coordsEdificioD, {
    className: 'poligono-edificio',
    id: 'D',
    nombre: 'Edificio D',
    descripcion: 'Descripción pendiente del Edificio D',
    imagen: 'fachada_edificioD.webp',
    imagen360: 'edificio_E.webp',
    areas: ['Área D1', 'Área D2']
}).addTo(CROQUIS_BASE);

export const edificioF = L.polygon(coordsEdificioF, {
    className: 'poligono-edificio',
    id: 'F',
    nombre: 'Edificio F',
    descripcion: 'Descripción pendiente del Edificio F',
    imagen: 'fachada_edificioF.webp',
    imagen360: 'edificio_E.webp',
    areas: ['Área F1', 'Área F2']
}).addTo(CROQUIS_BASE);

export const edificioG = L.polygon(coordsEdificioG, {
    className: 'poligono-edificio',
    id: 'G',
    nombre: 'Edificio G',
    descripcion: 'Descripción pendiente del Edificio G',
    imagen: 'fachada_edificioG.webp',
    imagen360: 'edificio_E.webp',
    areas: ['Área G1', 'Área G2']
}).addTo(CROQUIS_BASE);

export const cafeteria = L.polygon(coordsCafeteria, {
    className: 'poligono-edificio',
    id: 'Cafeteria',
    nombre: 'Cafetería',
    descripcion: 'Área de alimentos y descanso para estudiantes',
    imagen: 'fachada_cafeteria.webp', // Usamos foto prestada temporalmente
    imagen360: 'edificio_E.webp',
    areas: ['Área de mesas', 'Barra de servicio', 'Cocina']
}).addTo(CROQUIS_BASE);

export const biblioteca = L.polygon(coordsBiblioteca, {
    className: 'poligono-edificio',
    id: 'Biblioteca',
    nombre: 'Biblioteca',
    descripcion: 'Centro de información y área de estudio silencioso',
    imagen: 'fachada_biblioteca.webp',
    imagen360: 'edificio_E.webp',
    areas: ['Acervo General', 'Área de lectura', 'Centro de cómputo', 'Módulo de préstamos']
}).addTo(CROQUIS_BASE);

export const EDIFICIOS_MAPA = [
    edificioE,
    edificioA,
    edificioB,
    edificioC,
    edificioD,
    edificioF,
    edificioG,
    cafeteria,
    biblioteca
];

/**
 * Activa o desactiva la interacción visual de todos los edificios vía CSS
 * @param {boolean} desactivar 
 */
export function toggleEstadoEdificios(desactivar) {
    EDIFICIOS_MAPA.forEach(edificio => {
        const elementoSVG = edificio.getElement();
        if (elementoSVG) {
            if (desactivar) {
                elementoSVG.classList.add('edificio-desactivado');
            } else {
                elementoSVG.classList.remove('edificio-desactivado');
            }
        }
    });
}

/* ====================================================
    TOOLTIPS DE EDIFICIOS
==================================================== */

for (let edificio of EDIFICIOS_MAPA) {
    edificio.bindTooltip(`
        <div class="tooltip-edificio-contenido">
            <img src="${BASE_URL}assets/img/material_croquis/fotos_de_edificios/${edificio.options.imagen}"/>
            <span class="tooltip-titulo">${edificio.options.nombre}</span>
        </div>
        `, {
        sticky: false,
        direction: 'top',
        permanent: false,
        opacity: 0.95,
        className: 'custom-tooltip-croquis',
        offset: [0, -30]
    });
}

// ... (Aquí arriba está el bindTooltip del edificioE)

edificioA.bindTooltip(`
    <div class="tooltip-edificio-contenido">
        <img src="${BASE_URL}assets/img/material_croquis/fotos_de_edificios/fachada_edificioA.webp"/>
        <span class="tooltip-titulo">Edificio A</span>
        <p class="tooltip-descripcion">Administración y Servicios Escolares</p>
    </div>
    `, {
    sticky: false,
    direction: 'top',
    permanent: false,
    opacity: 0.95,
    className: 'custom-tooltip-croquis',
    offset: [0, -30]
});

/* ====================================================
    VARIABLE Y TIMEOUT PARA EL POLÍGONO ACTIVO
==================================================== */
let poligonoActivo = null;
let temporizadorParpadeo = null;

/**
 * Enfoca el mapa en el polígono del edificio y lo hace parpadear por 5 segundos.
 * @param {L.Polygon} poligonoLeaflet Instancia del polígono en Leaflet
 */
export function resaltarEdificioEnMapa(poligonoLeaflet) {
    if (!poligonoLeaflet) return;


    reiniciarPoligonoRemarcado();
    acercarCamaraAlPoligono(poligonoLeaflet);
    activarParpadeoPoligono(poligonoLeaflet.getElement());    

    poligonoActivo = poligonoLeaflet;
}

export function activarParpadeoPoligono(elementoSVG) {
    if (elementoSVG) {
        elementoSVG.classList.add('poligono-remarcado');

        temporizadorParpadeo = setTimeout(() => {
            elementoSVG.classList.remove('poligono-remarcado');
        }, 5000);
    }
}

// Limpia cualquier parpadeo previo y temporizador activo
export function reiniciarPoligonoRemarcado() {
    if (poligonoActivo) {
        poligonoActivo.getElement()?.classList.remove('poligono-remarcado');
    }
    if (temporizadorParpadeo) {
        clearTimeout(temporizadorParpadeo);
    }
}

function acercarCamaraAlPoligono(poligono) {
    CROQUIS_BASE.flyToBounds(poligono.getBounds(), {
        padding: [50, 50],
        duration: 1.2
    });
}
