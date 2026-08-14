import { mostrarRutaEdificio } from './gestor_rutas.js';

const rutaModulo = `${BASE_URL}assets/js/croquis/croquis_base.js`;
const modulo = await import(rutaModulo);

const CROQUIS_BASE = modulo.CROQUIS_BASE;

const listaEdificios = modulo.EDIFICIOS_MAPA;


/* ========================================================
    INFORMACIÓN DE EDIFICIOS
=========================================================== */

for (let edificio of listaEdificios) {
    edificio.on("click", () => {
        abrirVentanaInformacion(
            edificio.options.id,
            edificio.options.nombre,
            edificio.options.descripcion,
            edificio.options.imagen360,
            edificio.options.areas
        );
    });
}


function abrirVentanaInformacion(idEdificio, nombreEdificio, infoEdficio, nombreImg, listaAreas) {
    const listaAreasHTML = listaAreas.map(area => `<li class="nombre-area">${area}</li>`).join('');
    
    const ventanaEdificio = `
        <div id="modal-edificio" class="modal">
            <div class="ventana-informacion-edificio">
                <button id="btn-cerrar-modal" class="boton-cerrar-info-edificio">
                    <img src="${BASE_URL}assets/img/iconos/cruz.png">
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
                        <button id="btn-como-llegar" class="boton-como-llegar">
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
    const btnComoLlegar = document.getElementById('btn-como-llegar');

    btnCerrar.addEventListener('click', () => cerrarModalConAnimacion(modal));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModalConAnimacion(modal);
        }
    });

    btnComoLlegar.addEventListener('click', () => {
        cerrarModalConAnimacion(modal);
        mostrarRutaEdificio(idEdificio, CROQUIS_BASE);
    });

    inicializarVisor360(nombreImg);
}

function cerrarModalConAnimacion(modal) {
    modal.classList.add('cerrando');

    setTimeout(() => {
        modal.remove();
    }, 250); 
}

/* ========================================================
    CARGAR IMAGEN 360
=========================================================== */

function inicializarVisor360(imagenPanoramica) {
    pannellum.viewer('visor-360', {
        "type": "equirectangular",
        "vaov": 180,
        "panorama": `${BASE_URL}assets/img/material_croquis/imagenes_360/${imagenPanoramica}`,
        "autoLoad": true,
        "autoRotate": -2,
        "showZoomCtrl": true
    });
}