const rutaGestorRutas = `${BASE_URL}assets/js/croquis/gestor_rutas.js`;
const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;

const moduloGestorRutas = await import(rutaGestorRutas);
const moduloCroquisBase = await import(rutaCroquisBase);
const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const edificioE = moduloCroquisBase.edificioE;
const listaEdificios = [edificioE];


function onClickEdificio(e) {
    const {id, nombre} = e.target.options;
    gestionarSeleccionEdificio(id, nombre);
}

export function activarVistaEdificios() {
    listaEdificios.forEach(edificio => {
        edificio.on('click', onClickEdificio);
    });
}

function gestionarSeleccionEdificio(idEdificio, nombreEdificio) {
    edificioSeleccionadoId = idEdificio;
    if (opcionesEditarRuta.classList.contains('ocultar')) alternarOpcionesMenu();
    restablecerNavegacion();
    nombreEdificioEnEdicion.textContent = nombreEdificio;
    contenedorNombreElementoEdicion.classList.remove('ocultar');
    moduloCroquisBase.toggleEstadoEdificios(DESACTIVAR_EDIFICIOS);
}