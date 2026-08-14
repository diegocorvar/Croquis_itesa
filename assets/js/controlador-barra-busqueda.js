const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;
const moduloCroquisBase = await import(rutaCroquisBase);

/* ========================================================
    CONFIGURACIÓN Y DATOS DE EDIFICIOS
=========================================================== */
const listaEdificios = moduloCroquisBase.EDIFICIOS_MAPA;

/* ========================================================
    ELEMENTOS DEL DOM
=========================================================== */
const btnFiltroEdificio = document.getElementById('filtro-edificio');
const modalEdificios = document.getElementById('modal-edificios');
const btnCerrarModal = document.getElementById('boton-cerrar-busqueda');
const contenedorEdificios = document.getElementById('lista-edificios-contenedor');
const activadorBusqueda = document.getElementById('busqueda-activador-boton');
const bloqueDesplegable = document.getElementById('busqueda-bloque-desplegable');
const campoInput = document.getElementById('busqueda-campo-input');

/* ========================================================
    INICIALIZACIÓN Y EVENTOS
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Renderizamos las tarjetas de los edificios dinámicamente
    renderizarEdificios(listaEdificios);

    // Abrir modal
    btnFiltroEdificio?.addEventListener('click', abrirModalEdificios);

    // Cerrar con botón X
    btnCerrarModal?.addEventListener('click', cerrarModalEdificios);

    // Cerrar al dar click fuera del contenedor (overlay)
    modalEdificios?.addEventListener('click', (e) => {
        if (e.target === modalEdificios) {
            cerrarModalEdificios();
        }
    });
});

/* ========================================================
    FUNCIONES DE MODAL Y RENDER
=========================================================== */

function renderizarEdificios(listaEdificios) {
    if (!contenedorEdificios) return;

    const htmlEdificios = listaEdificios.map(edificio => `
        <div class="edificio-busqueda" data-edificio-id="${edificio.options.id}">
            <img src="${BASE_URL}assets/img/iconos/edificio-3d.png" alt="${edificio.options.nombre}">
            <p class="nombre-edificio-busqueda">${edificio.options.nombre}</p>
        </div>
    `).join('');

    contenedorEdificios.innerHTML = htmlEdificios;

    // Delegación de eventos al hacer clic en un edificio individual
    contenedorEdificios.querySelectorAll('.edificio-busqueda').forEach(card => {
        card.addEventListener('click', (e) => {
            const edificioId = card.dataset.edificioId;
            seleccionarEdificio(edificioId);
        });
    });
}

function abrirModalEdificios() {
    modalEdificios.classList.remove('oculto');
}

function cerrarModalEdificios() {
    modalEdificios.classList.add('oculto');
}

const rutaModuloCroquis = `${BASE_URL}assets/js/croquis/croquis_base.js`;
const moduloCroquis = await import(rutaModuloCroquis);

function seleccionarEdificio(id) {
    cerrarModalEdificios();

    const poligonoObjetivo = listaEdificios.find(edificio => edificio.options.id === id);

    if (poligonoObjetivo) {

        moduloCroquis.resaltarEdificioEnMapa(poligonoObjetivo);
    } else {
        console.warn(`El edificio ${id} aún no tiene polígono trazado en el mapa.`);
    }
}

activadorBusqueda.addEventListener('click', (e) => {
    e.stopPropagation();
    const estaOculto = bloqueDesplegable.classList.toggle('oculto');
    
    if (!estaOculto) {
        campoInput.focus();
    }
});

bloqueDesplegable.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', () => {
    if (!bloqueDesplegable.classList.contains('oculto')) {
        bloqueDesplegable.classList.add('oculto');
    }
});