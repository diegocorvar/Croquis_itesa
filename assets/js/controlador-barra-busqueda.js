/* ========================================================
    CONFIGURACIÓN Y DATOS DE EDIFICIOS
=========================================================== */
// Agregar un nuevo edificio en el futuro es tan fácil como añadir un objeto a esta lista:
const EDIFICIOS_PLANTEL = [
    { id: 'E', nombre: 'Edificio E', icono: 'edificio-3d.png' },
    // { id: 'F', nombre: 'Edificio F', icono: 'edificio-3d.png' }
];

/* ========================================================
    ELEMENTOS DEL DOM
=========================================================== */
const btnFiltroEdificio = document.getElementById('filtro-edificio');
const modalEdificios = document.getElementById('modal-edificios');
const btnCerrarModal = document.getElementById('boton-cerrar-busqueda');
const contenedorEdificios = document.getElementById('lista-edificios-contenedor');

/* ========================================================
    INICIALIZACIÓN Y EVENTOS
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Renderizamos las tarjetas de los edificios dinámicamente
    renderizarEdificios(EDIFICIOS_PLANTEL);

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
        <div class="edificio-busqueda" data-edificio-id="${edificio.id}">
            <img src="${BASE_URL}assets/img/iconos/${edificio.icono}" alt="${edificio.nombre}">
            <p class="nombre-edificio-busqueda">${edificio.nombre}</p>
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

    // Mapeo entre el ID de la lista y la variable del polígono Leaflet
    const mapaEdificios = {
        'E': moduloCroquis.edificioE,
        // En el futuro asocias las demás letras conforme agregues coordenadas:
        // 'A': moduloCroquis.edificioA,
        // 'B': moduloCroquis.edificioB,
    };

    const poligonoObjetivo = mapaEdificios[id];

    if (poligonoObjetivo) {
        // Ejecutamos la función para centrar y resaltar en Leaflet
        moduloCroquis.resaltarEdificioEnMapa(poligonoObjetivo);
    } else {
        console.warn(`El edificio ${id} aún no tiene polígono trazado en el mapa.`);
    }
}