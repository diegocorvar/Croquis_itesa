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

/* ====================================================
    COORDENADAS DE CAMINOS
==================================================== */

const coordsCaminoE_AB = [
    [742, 389],
    [754, 403],
    [837, 410],
    [900, 416],
    [1026, 435],
    [1118, 447],
    [1232, 459],
    [1269, 467],
    [1288, 475],
    [1308, 486],
    [1317, 499],
    [1325, 517],
    [1335, 537],
    [1338, 558],
    [1343, 579],
    [1309, 575],
    [1309, 550],
    [1301, 528],
    [1291, 514],
    [1280, 503],
    [1260, 496],
    [1231, 490],
    [1188, 487],
    [1158, 482],
    [1132, 479],
    [1090, 474],
    [1048, 467],
    [1016, 465],
    [988, 460],
    [953, 457],
    [921, 451],
    [893, 451],
    [869, 456],
    [854, 471],
    [841, 486],
    [828, 499],
    [798, 489],
    [767, 475],
    [754, 473],
    [723, 464],
    [704, 459],
    [683, 452],
    [649, 442],
    [631, 434],
    [617, 426],
    [643, 400],
    [664, 380]
];

/* ====================================================
    COORDENADAS DE CAMINOS
==================================================== */

export const caminoE_AB = L.polygon(coordsCaminoE_AB, {className: 'poligono-camino'}).addTo(CROQUIS_BASE);
