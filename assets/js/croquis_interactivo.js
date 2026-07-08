const map = L.map('croquisItesa', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 1,

    zoomSnap: 0,
    zoomDelta: 0.25,
    wheelPxPerZoomLevel: 120
});

// COORDENADAS DE EDIFICIOS ===========================================================================

const coordsEdificioE = [
    [1754, 1352],
    [1922, 1377],
    [1889, 1582],
    [1721, 1554]
];
const edificioE = L.polygon(coordsEdificioE, {className: 'poligono-edificio'}).addTo(map);


edificioE.bindTooltip(`
    <b>Edificio E</b>
    <br>Edificio de la carrera de Ingeniería en Sistemas Computacionales
    `, {
    sticky: true,
    direction: 'top',
    opacity: 0.95
});
/*
    NOTA
        Las coordenadas (que están en píxeles) de cada edificio están
        puestas manualmente y solo sirven para la imagen utilizada como
        croquis (en este caso croquis_itesa.png).

        Si se requiere cambiar el croquis, habría que actualizar las 
        coordenadas para que coincidan con la nueva imagen.

        Para esto puede utilizar la HERRAMIENTA DE DESARROLLO ↓
*/

// HERRAMIENTA DE DESARROLLO: Obtener coordenadas al hacer clic en el mapa
map.on('click', function(e) {
    const y = Math.round(e.latlng.lat);
    const x = Math.round(e.latlng.lng);
    console.log(`Coordenada capturada: [${y}, ${x}]`);
});

// CARGA DE IMAGEN COMO MAPA ==================================================================================

const rutaImgCroquis = '/assets/img/material_croquis/croquis_itesa.png';

let imagenCroquis = new Image();
imagenCroquis.src = rutaImgCroquis;

/*
    En Leaflet las coordenadas X, Y empiezan desde abajo a la izquierda de la pantalla
    y los vértices son (Y, X) en lugar de (X, Y).
*/

imagenCroquis.onload = function () {
    const anchoImagenCroquis = imagenCroquis.width;
    const altoImagenCroquis = imagenCroquis.height;


    const limites = [
        [0, 0], // Esquina inferior izquierda de la imagen.
        [altoImagenCroquis, anchoImagenCroquis] // Esquina superior derecha de la imagen.
    ];
        
    L.imageOverlay(rutaImgCroquis, limites).addTo(map);
    map.fitBounds(limites);
    map.setMaxBounds(limites);
};