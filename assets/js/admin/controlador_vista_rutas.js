const rutaGestorRutas = `${BASE_URL}assets/js/croquis/gestor_rutas.js`;
const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;

const moduloGestorRutas = await import(rutaGestorRutas);
const moduloCroquisBase = await import(rutaCroquisBase);
const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const DESACTIVAR_EDIFICIOS = true;
const ACTIVAR_EDIFICIOS = false;

let edificioSeleccionadoId = null;
let tiempoInactivo = null;

// Elementos del DOM
const btnMostrarRuta = document.getElementById('boton-nav-mostrar-ruta');
const btnOcultarRuta = document.getElementById('boton-nav-ocultar-ruta');
const btnEditarRuta  = document.getElementById('boton-nav-editar-ruta');
const btnGuardarRuta = document.getElementById('boton-nav-guardar-ruta');
const btnBorrarRuta  = document.getElementById('boton-nav-borrar-ruta');
const btnConfirmarBorrarRuta = document.getElementById('confirmar-eliminacion-ruta');
const btnCancelarBorrarRuta = document.getElementById('cancelar-eliminacion-ruta');
const modalBorrarRuta = document.getElementById('modal-borrar-ruta');
const contenedorMensajeDeAccion = document.querySelector('.contenedor-mensaje-accion');
const salirEditarRuta = document.getElementById('boton-salir-editar-ruta');
const opcionesEditarRuta = document.getElementById('botones-editar-ruta');
const opcionesMenuAdmin = document.querySelector('.barra-lateral-izq-admin');
const nombreEdificioEnEdicion = document.getElementById('nombre-edificio-editando');
const contenedorNombreElementoEdicion = document.querySelector('.contenedor-edificio-seleccionado');
const modalAyuda = document.querySelector('.modal-ayuda');
const textoModalAyuda = document.querySelector('.modal-ayuda--texto');

const edificioE = moduloCroquisBase.edificioE;
const listaEdificios = [edificioE];

const TODOS_LOS_BOTONES_NAV = [
    btnMostrarRuta,
    btnOcultarRuta,
    btnEditarRuta,
    btnGuardarRuta,
    btnBorrarRuta,
    salirEditarRuta
];

/* ====================================================
    MANEJADORES DE EVENTOS (HANDLERS)
==================================================== */
function onClickEdificio(e) {
    const {id, nombre} = e.target.options;
    gestionarSeleccionEdificio(id, nombre);
}

function onMouseMove() {
    if (!modalAyuda.classList.contains('ocultar')) {
        resaltarEdificiosHabilitados(listaEdificios);
    }
    reiniciarTemporizador();
}

function onClickMostrarRuta() {
    if (!edificioSeleccionadoId) return;
    moduloGestorRutas.mostrarRutaEdificio(edificioSeleccionadoId, CROQUIS_BASE);
    resaltarAccion(btnOcultarRuta);
}

function onClickOcultarRuta() {
    moduloGestorRutas.ocultarRutas();
    restablecerNavegacion();
}

function onClickEditarRuta() {
    if (!edificioSeleccionadoId) return;
    moduloGestorRutas.activarModoAsignacion(edificioSeleccionadoId, CROQUIS_BASE);
    resaltarAccion(btnGuardarRuta);
}

function onClickGuardarRuta() {
    if (!edificioSeleccionadoId) return;
    moduloGestorRutas.confirmarSeleccionAdmin(edificioSeleccionadoId);
    restablecerNavegacion();
    mostrarMensaje('Ruta guardada correctamente');
}

function onClickBorrarRuta() {
    if (!edificioSeleccionadoId) return;
    alternarVisibilidad(modalBorrarRuta);
    console.log(modalBorrarRuta);
}

function onClickConfirmarBorrar() {
    moduloGestorRutas.borrarRuta(edificioSeleccionadoId);
    alternarVisibilidad(modalBorrarRuta);
    mostrarMensaje('Ruta eliminada correctamente');
}

function onClickCancelarBorrar() {
    alternarVisibilidad(modalBorrarRuta);
}

/* ====================================================
    MÉTODOS DE CICLO DE VIDA
==================================================== */
export function activarVistaRutas() {
    salirEditarRuta.addEventListener('click', alternarOpcionesMenu);
    btnMostrarRuta.addEventListener('click', onClickMostrarRuta);
    btnOcultarRuta.addEventListener('click', onClickOcultarRuta);
    btnEditarRuta.addEventListener('click', onClickEditarRuta);
    btnGuardarRuta.addEventListener('click', onClickGuardarRuta);
    btnBorrarRuta.addEventListener('click', onClickBorrarRuta);
    btnConfirmarBorrarRuta.addEventListener('click', onClickConfirmarBorrar);
    btnCancelarBorrarRuta.addEventListener('click', onClickCancelarBorrar);
    textoModalAyuda.textContent = 'Seleccione algún edificio para editar su ruta';
    window.addEventListener('mousemove', onMouseMove);

    listaEdificios.forEach(edificio => {
        edificio.on('click', onClickEdificio);
    });



    clearTimeout(tiempoInactivo);
    modalAyuda.classList.add('ocultar');
    
    if (edificioSeleccionadoId) {
        alternarOpcionesMenu();
    }
    moduloGestorRutas.ocultarRutas();
}

/* Auxiliares */
function alternarVisibilidad(elemento) { elemento.classList.toggle('ocultar'); }

function mostrarMensaje(mensaje) {
    contenedorMensajeDeAccion.querySelector('p').textContent = mensaje;
    alternarVisibilidad(contenedorMensajeDeAccion);
    setTimeout(() => alternarVisibilidad(contenedorMensajeDeAccion), 1000);
}

function gestionarSeleccionEdificio(idEdificio, nombreEdificio) {
    edificioSeleccionadoId = idEdificio;
    if (opcionesEditarRuta.classList.contains('ocultar')) alternarOpcionesMenu();
    restablecerNavegacion();
    nombreEdificioEnEdicion.textContent = nombreEdificio;
    contenedorNombreElementoEdicion.classList.remove('ocultar');
    moduloCroquisBase.toggleEstadoEdificios(DESACTIVAR_EDIFICIOS);
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

function resaltarAccion(botonVisible) {
    TODOS_LOS_BOTONES_NAV.forEach(btn => {
        if (btn === botonVisible) btn.classList.remove('ocultar');
        else btn.classList.add('ocultar');
    });
}

function restablecerNavegacion() {
    btnMostrarRuta.classList.remove('ocultar');
    btnOcultarRuta.classList.add('ocultar');
    btnEditarRuta.classList.remove('ocultar');
    btnGuardarRuta.classList.add('ocultar');
    btnBorrarRuta.classList.remove('ocultar');
    salirEditarRuta.classList.remove('ocultar');
}

/* =======================================
    LÓGICA PARA EL MODAL DE AYUDA
======================================= */

function reiniciarTemporizador() {
    clearTimeout(tiempoInactivo);
    modalAyuda.classList.add('ocultar');
    tiempoInactivo = setTimeout(() => {
        if (!opcionesEditarRuta.classList.contains('ocultar')) return;
        modalAyuda.classList.remove('ocultar');
        moduloCroquisBase.reiniciarPoligonoRemarcado();
    }, 5000);
}

function resaltarEdificiosHabilitados(edificios) {
    for (let edificio of edificios) 
        moduloCroquisBase.activarParpadeoPoligono(edificio.getElement());
}