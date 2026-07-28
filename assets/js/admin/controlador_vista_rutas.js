const rutaGestorRutas = `${BASE_URL}assets/js/croquis/gestor_rutas.js`;
const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;

const moduloGestorRutas = await import(rutaGestorRutas);
const moduloCroquisBase = await import(rutaCroquisBase);
const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const DESACTIVAR_EDIFICIOS = true;
const ACTIVAR_EDIFICIOS = false;

// Variable de control para saber qué edificio se está editando actualmente
let edificioSeleccionadoId = null;


/* ====================================================
    ELEMENTOS DEL DOM
==================================================== */

const btnMostrarRuta = document.getElementById('boton-nav-mostrar-ruta');
const btnOcultarRuta = document.getElementById('boton-nav-ocultar-ruta');
const btnEditarRuta  = document.getElementById('boton-nav-editar-ruta');
const btnGuardarRuta = document.getElementById('boton-nav-guardar-ruta');
const btnBorrarRuta  = document.getElementById('boton-nav-borrar-ruta');
const btnAgregarRuta = document.getElementById('boton-nav-agregar-ruta');

const salirEditarRuta = document.getElementById('boton-salir-editar-ruta');
const opcionesEditarRuta = document.getElementById('botones-editar-ruta');
const opcionesMenuAdmin = document.querySelector('.barra-lateral-izq-admin');
const nombreEdificioEnEdicion = document.getElementById('nombre-edificio-editando');
const contenedorNombreElementoEdicion = document.querySelector('.contenedor-edificio-seleccionado');

// Lista con TODOS los botones principales del nav para iterar fácilmente
const TODOS_LOS_BOTONES_NAV = [
    btnMostrarRuta,
    btnOcultarRuta,
    btnEditarRuta,
    btnGuardarRuta,
    btnBorrarRuta,
    btnAgregarRuta,
    salirEditarRuta
];


/* ====================================================
    CONFIGURACIÓN DE LISTENERS (SE EJECUTAN UNA SOLA VEZ)
==================================================== */

salirEditarRuta.addEventListener('click', alternarOpcionesMenu);

btnMostrarRuta.addEventListener('click', () => {
    if (!edificioSeleccionadoId) return;
    moduloGestorRutas.mostrarRutaEdificio(edificioSeleccionadoId, CROQUIS_BASE);
    resaltarAccion(btnOcultarRuta);
});

btnOcultarRuta.addEventListener('click', () => {
    moduloGestorRutas.ocultarRutas();
    restablecerNavegacion();
});

btnEditarRuta.addEventListener('click', () => {
    if (!edificioSeleccionadoId) return;
    moduloGestorRutas.activarModoAsignacion(edificioSeleccionadoId, CROQUIS_BASE);
    resaltarAccion(btnGuardarRuta);
});

btnGuardarRuta.addEventListener('click', () => {
    if (!edificioSeleccionadoId) return;
    moduloGestorRutas.confirmarSeleccionAdmin(edificioSeleccionadoId);
    restablecerNavegacion();
});

btnBorrarRuta.addEventListener('click', () => {
    if (!edificioSeleccionadoId) return;
    
});

btnAgregarRuta.addEventListener('click', () => {
    if (!edificioSeleccionadoId) return;
    
});


/* ====================================================
    LÓGICA DE SELECCIÓN DE EDIFICIO
==================================================== */

const edificioE = moduloCroquisBase.edificioE;

edificioE.on('click', () => {
    gestionarSeleccionEdificio('E', 'Edificio E');
});

function gestionarSeleccionEdificio(idEdificio, nombreEdificio) {
    edificioSeleccionadoId = idEdificio;

    if (opcionesEditarRuta.classList.contains('ocultar')) {
        alternarOpcionesMenu();
    }

    restablecerNavegacion();

    mostrarNombreEdificioEnEdicion(nombreEdificio);
    moduloCroquisBase.toggleEstadoEdificios(DESACTIVAR_EDIFICIOS);
}

function mostrarNombreEdificioEnEdicion(nombre) {
    nombreEdificioEnEdicion.textContent = nombre;
    contenedorNombreElementoEdicion.classList.remove('ocultar');
}

function alternarOpcionesMenu() {
    opcionesEditarRuta.classList.toggle('ocultar');
    opcionesMenuAdmin.classList.toggle('ocultar');
    contenedorNombreElementoEdicion.classList.add('ocultar');
    
    if (opcionesEditarRuta.classList.contains('ocultar')) {
        edificioSeleccionadoId = null;
        moduloGestorRutas.ocultarRutas();
        moduloCroquisBase.toggleEstadoEdificios(ACTIVAR_EDIFICIOS);
        restablecerNavegacion();
    }
}

/* ====================================================
    GESTIÓN DE ESTADO DE NAVEGACIÓN
==================================================== */

/**
 * Oculta todos los botones de la navegación excepto el que se pasa como parámetro.
 * @param {HTMLElement} botonVisible - El único botón que debe quedarse visible.
 */
function resaltarAccion(botonVisible) {
    TODOS_LOS_BOTONES_NAV.forEach(btn => {
        if (btn === botonVisible) {
            btn.classList.remove('ocultar');
        } else {
            btn.classList.add('ocultar');
        }
    });
}

/**
 * Vuelve la barra a su estado inicial de edición (Mostrar, Editar, Borrar, Agregar visibles).
 */
function restablecerNavegacion() {
    btnMostrarRuta.classList.remove('ocultar');
    btnOcultarRuta.classList.add('ocultar');
    btnEditarRuta.classList.remove('ocultar');
    btnGuardarRuta.classList.add('ocultar');
    btnBorrarRuta.classList.remove('ocultar');
    btnAgregarRuta.classList.remove('ocultar');
    salirEditarRuta.classList.remove('ocultar');
}

/* ====================================================
    MODAL DE AYUDA
==================================================== */

let tiempoInactivo;
reiniciarTemporizador();

function reiniciarTemporizador() {
    clearTimeout(tiempoInactivo);
    document.querySelector('.modal-ayuda').classList.add('ocultar');

    tiempoInactivo = setTimeout(() => {
        if (!opcionesEditarRuta.classList.contains('ocultar')) return;
        document.querySelector('.modal-ayuda').classList.remove('ocultar');
    }, 3000);
}

window.addEventListener('mousemove', reiniciarTemporizador);