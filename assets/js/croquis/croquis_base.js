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

const CROQUIS_BASE = L.map('croquisItesa', {
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
    console.log(`Coordenada capturada: [${y}, ${x}]`);
});

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
    CROQUIS_BASE.fitBounds(limites);
    CROQUIS_BASE.setMaxBounds(limites);
};

/* ====================================================
    COORDENADAS DE EDIFICIOS
==================================================== */

export const coordsEdificioE = [
    [1754, 1352],
    [1922, 1377],
    [1889, 1582],
    [1721, 1554]
];

/* ====================================================
    POLIGONOS DE EDIFICIOS
==================================================== */

export const edificioE = L.polygon(coordsEdificioE, {className: 'poligono-edificio'}).addTo(CROQUIS_BASE);

/* ====================================================
    TOOLTIPS DE EDIFICIOS
==================================================== */

edificioE.bindTooltip(`
    <b>Edificio E</b>
    <br>Edificio de la carrera de Ingeniería en Sistemas Computacionales
    `, {
    sticky: true,
    direction: 'top',
    opacity: 0.95
});
