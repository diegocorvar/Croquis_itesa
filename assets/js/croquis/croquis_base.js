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
    minZoom: -1,
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

const coordsCamino1 = [
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

const coordsCamino2 = [
    [591, 447],
    [612, 476],
    [630, 499],
    [649, 518],
    [670, 541],
    [684, 558],
    [707, 586],
    [729, 612],
    [754, 644],
    [764, 653],
    [785, 686],
    [808, 719],
    [824, 741],
    [837, 760],
    [855, 785],
    [873, 807],
    [884, 822],
    [892, 838],
    [936, 896],
    [963, 936],
    [987, 971],
    [1002, 993],
    [1013, 1005],
    [1052, 1011],
    [1094, 1018],
    [1136, 1027],
    [1174, 1030],
    [1207, 1036],
    [1241, 1041],
    [1278, 1047],
    [1312, 1051],
    [1330, 1056],
    [1334, 1033],
    [1339, 1007],
    [1309, 998],
    [1277, 993],
    [1240, 987],
    [1198, 978],
    [1149, 970],
    [1099, 961],
    [1067, 957],
    [1051, 943],
    [1038, 921],
    [1021, 899],
    [1007, 878],
    [978, 838],
    [962, 818],
    [947, 797],
    [923, 759],
    [907, 740],
    [892, 718],
    [878, 698],
    [846, 658],
    [815, 615],
    [805, 597],
    [793, 578],
    [778, 559],
    [758, 542],
    [745, 525],
    [734, 512],
    [723, 503],
    [694, 474],
    [672, 462],
    [651, 444],
    [616, 426]
];

const coordsCamino3 = [
    [1281, 1050],
    [1276, 1075],
    [1272, 1106],
    [1271, 1127],
    [1275, 1153],
    [1280, 1177],
    [1293, 1194],
    [1282, 1232],
    [1279, 1252],
    [1277, 1272],
    [1271, 1300],
    [1271, 1323],
    [1266, 1345],
    [1260, 1374],
    [1252, 1421],
    [1283, 1428],
    [1292, 1376],
    [1297, 1350],
    [1300, 1325],
    [1305, 1298],
    [1309, 1267],
    [1313, 1245],
    [1315, 1220],
    [1321, 1201],
    [1324, 1173],
    [1328, 1158],
    [1329, 1144],
    [1337, 1126],
    [1331, 1108],
    [1326, 1087],
    [1328, 1060]
];

const coordsCamino4 = [
    [1292, 1378],
    [1352, 1389],
    [1413, 1397],
    [1464, 1407],
    [1504, 1413],
    [1541, 1419],
    [1586, 1427],
    [1627, 1432],
    [1643, 1433],
    [1682, 1441],
    [1722, 1446],
    [1714, 1490],
    [1677, 1485],
    [1640, 1480],
    [1598, 1473],
    [1563, 1469],
    [1536, 1460],
    [1501, 1457],
    [1464, 1449],
    [1425, 1442],
    [1384, 1437],
    [1345, 1431],
    [1339, 1441],
    [1315, 1437],
    [1283, 1433],
    [1280, 1430]
];



/* ====================================================
    COORDENADAS DE CAMINOS
==================================================== */

// export const camino1 = L.polygon(coordsCamino1, {className: 'poligono-camino'}).addTo(CROQUIS_BASE);
export const camino2 = L.polygon(coordsCamino2, {className: 'poligono-camino'}).addTo(CROQUIS_BASE);
export const camino3 = L.polygon(coordsCamino3, {className: 'poligono-camino'}).addTo(CROQUIS_BASE);
export const camino4 = L.polygon(coordsCamino4, {className: 'poligono-camino'}).addTo(CROQUIS_BASE);
