const rutaGestorRutas = `${BASE_URL}assets/js/croquis/gestor_rutas.js`;
const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;

const moduloGestorRutas = await import(rutaGestorRutas);
const moduloCroquisBase = await import(rutaCroquisBase);
const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const DESACTIVAR_EDIFICIOS = true;
const ACTIVAR_EDIFICIOS = false;


/* ====================================================
    ELEMENTOS DEL DOOM
==================================================== */

const btnMostrarRuta = document.getElementById('boton-nav-mostrar-ruta');
const btnOcultarRuta = document.getElementById('boton-nav-ocultar-ruta');
const btnEditarRuta = document.getElementById('boton-nav-editar-ruta');
const btnGuardarRuta = document.getElementById('boton-nav-guardar-ruta');
const salirEditarRuta = document.getElementById('boton-salir-editar-ruta');
const opcionesEditarRuta = document.getElementById('botones-editar-ruta');
const opcionesMenuAdmin = document.getElementById('botones-inicio-admin');
const nombreEdificioEnEdicion = document.getElementById('nombre-edificio-editando');
const contenedorNombreElementoEdicion = document.querySelector('.contenedor-edificio-seleccionado');

salirEditarRuta.addEventListener('click', alternarOpcionesMenu);


const edificioE = moduloCroquisBase.edificioE;

edificioE.on('click', () => {
    gestionarSeleccionEdificio(
        'E',
        'Edificio E'
    );
});

function gestionarSeleccionEdificio(idEdificio, nombreEdificio) {
    if (opcionesEditarRuta.classList.contains('ocultar')) {
        alternarOpcionesMenu();
    }
    mostrarNombreEdificioEnEdicion(nombreEdificio);
    activarBotonMostrarRuta(idEdificio);
    activarBotonOcultarRuta();
    activarBotonEditarRuta(idEdificio);
    activarBotonGuardarRuta(idEdificio);
    moduloCroquisBase.toggleEstadoEdificios(DESACTIVAR_EDIFICIOS);
}

function mostrarNombreEdificioEnEdicion(nombre) {
    nombreEdificioEnEdicion.textContent = nombre;
    contenedorNombreElementoEdicion.classList.remove('ocultar');
}

function activarBotonMostrarRuta(idEdificio) {
    btnMostrarRuta.addEventListener('click', () => {
        moduloGestorRutas.mostrarRutaEdificio(idEdificio, CROQUIS_BASE);
        alternarVisibilidadBotones(btnMostrarRuta, btnOcultarRuta);
    });
}

function activarBotonOcultarRuta() {
    btnOcultarRuta.addEventListener('click', () => {
        moduloGestorRutas.ocultarRutas();
        alternarVisibilidadBotones(btnMostrarRuta, btnOcultarRuta);
    });
}

function activarBotonEditarRuta(idEdificio) {
    btnEditarRuta.addEventListener('click', () => {
        moduloGestorRutas.activarModoAsignacion(idEdificio, CROQUIS_BASE);
        alternarVisibilidadBotones(btnEditarRuta, btnGuardarRuta);
    });
}

function activarBotonGuardarRuta(idEdificio) {
    btnGuardarRuta.addEventListener('click', () => {
        moduloGestorRutas.confirmarSeleccionAdmin(idEdificio);
        alternarVisibilidadBotones(btnEditarRuta, btnGuardarRuta);
    })
}

function alternarVisibilidadBotones(boton1, boton2) {
    boton1.classList.toggle('ocultar');
    boton2.classList.toggle('ocultar');
}

function alternarOpcionesMenu() {
    opcionesEditarRuta.classList.toggle('ocultar');
    opcionesMenuAdmin.classList.toggle('ocultar');
    contenedorNombreElementoEdicion.classList.add('ocultar');
    moduloCroquisBase.toggleEstadoEdificios(ACTIVAR_EDIFICIOS);
};

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
