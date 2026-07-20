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

const rutaImgCroquis = BASE_URL + 'assets/img/material_croquis/croquis_itesa.webp';

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

// ABRIR VENTANA FOLANTE DE EDIFICIO ==================================================================================

edificioE.on("click", () => {
    abrirVentanaInformacion(
        'Edificio E',
        'Edificio de la carrera de Ingeniería en Sistemas Computacionales',
        'fachada_edificioE.webp',
        ['LC1', 'LC2', 'LC3', 'LC4', 'LC5', 'LC6', 'LC7', 'SITE']
    );
});

function abrirVentanaInformacion(nombreEdificio, infoEdficio, nombreImg, listaAreas) {
    const listaAreasHTML = listaAreas.map(area => `<li class="nombre-area">${area}</li>`).join('');
    
    const ventanaEdificio = `
        <div id="modal-edificio" class="modal">
            <div class="ventana-informacion-edificio">
                <button id="btn-cerrar-modal" class="boton-cerrar-info-edificio">
                    <img src="/assets/img/iconos/cruz.png">
                </button>
                <div id="visor-360" class="contenedor-imagen-edificio">
                </div>
                <div class="contenedor-informacion-edificio">
                    <p class="nombre-edificio">${nombreEdificio}</p>
                    <p class="informacion-edificio">${infoEdficio}</p>
                    <div class="areas-edificio">
                        <p>Áreas y salones/laboratorios</p>
                        <ul>
                            ${listaAreasHTML}
                        </ul>
                    </div>
                    <div class="contenedor-boton-como-llegar">
                        <button class="boton-como-llegar">
                            ¿Cómo llego aquí?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', ventanaEdificio);

    const modal = document.getElementById('modal-edificio');
    const btnCerrar = document.getElementById('btn-cerrar-modal');
    const visor360 = document.getElementById('visor-360');

    btnCerrar.addEventListener('click', () => cerrarModalConAnimacion(modal));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModalConAnimacion(modal);
        }
    });

    inicializarVisor360();
}

function cerrarModalConAnimacion(modal) {
    modal.classList.add('cerrando');

    setTimeout(() => {
        modal.remove();
    }, 250); 
}

function inicializarVisor360() {
    let visor360 = null;

    if (!visor360) {
        visor360 = pannellum.viewer('visor-360', {
            "type": "equirectangular",
            "panorama": BASE_URL + 'assets/img/material_croquis/imagenes_360/edificio_E.webp',
            "autoLoad": true,
            "autoRotate": -2,
            "showZoomCtrl": true
        });
    } else {
        visor360.resize();
    }
}