const map = L.map('croquisItesa', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 1,

    zoomSnap: 0,
    zoomDelta: 0.25,
    wheelPxPerZoomLevel: 120
});

const rutaImgCroquis = '/assets/img/material_croquis/croquis_itesa.png'

let imagenCroquis = new Image();
imagenCroquis.src = rutaImgCroquis;

imagenCroquis.onload = function () {
    const anchoImagenCroquis = imagenCroquis.width;
    const altoImagenCroquis = imagenCroquis.height;

    const limites = [[0, 0], [altoImagenCroquis, anchoImagenCroquis]];

    L.imageOverlay(rutaImgCroquis, limites).addTo(map);
    map.fitBounds(limites);
    map.setMaxBounds(limites);
};