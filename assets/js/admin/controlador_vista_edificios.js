const rutaGestorRutas = `${BASE_URL}assets/js/croquis/gestor_rutas.js`;
const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;

const moduloGestorRutas = await import(rutaGestorRutas);
const moduloCroquisBase = await import(rutaCroquisBase);
const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const listaEdificios = moduloCroquisBase.EDIFICIOS_MAPA;

let edificioSeleccionadoId = null;
let tiempoInactivo = null;
let visor360Actual = null; // Variable para controlar la instancia de Pannellum

/* ====================================================
    ELEMENTOS DEL DOM
==================================================== */

const menuAdmin = document.querySelector('.barra-lateral-izq-admin');
const crudEdificio = document.getElementById('vista-admin-edificios');
const modalAyuda = document.querySelector('.modal-ayuda');
const textoModalAyuda = document.querySelector('.modal-ayuda--texto');

/* ELEMENTOS DEL CRUD */
const h1Titulo = document.querySelector('h1.crud-edificio__titulo');
const inputTitulo = document.querySelector('input.crud-edificio__titulo');
const contenedorImagen = document.querySelector('.crud-edificio__img-wrapper--normal');
const textAreaDescripcion = document.querySelector('.crud-edificio__textarea');

// BOTONES
const btnEditarNombreEdificio = document.getElementById('btn-editar-nombre-edificio');
const btnSalirCrud = document.querySelector('.crud-edificio__btn--salir');
const btnConfirmarEdicionNombre = document.getElementById('btn-confirmar-edicion-nombre');
const btnCancelarEdicionNombre = document.getElementById('btn-cancelar-edicion-nombre');

function habilitarEdicionNombreEdificio() {
    inputTitulo.value = h1Titulo.textContent;
    
    ocultarElementos(h1Titulo, btnEditarNombreEdificio);
    mostrarElementos(inputTitulo, btnConfirmarEdicionNombre, btnCancelarEdicionNombre);
    
    enfocarTextoInput(inputTitulo);
}

function confirmarEdicionNombre() {
    h1Titulo.textContent = inputTitulo.value;
    deshabilitarEdicionNombre();
}

function cancelarEdicionNombre() {
    inputTitulo.value = '';
    deshabilitarEdicionNombre();
}

function deshabilitarEdicionNombre() {
    mostrarElementos(h1Titulo, btnEditarNombreEdificio);
    ocultarElementos(inputTitulo, btnConfirmarEdicionNombre, btnCancelarEdicionNombre);
}

function enfocarTextoInput(elementoInput) {
    elementoInput.focus();
    const largo = elementoInput.value.length;
    elementoInput.setSelectionRange(largo, largo);
}

/* ==================================
    LÓGICA PARA ACTIVAR/DESACTIVAR VISTA
================================== */

export function activarVistaEdificios() {
    listaEdificios.forEach(edificio => {
        edificio.on('click', onClickEdificio);
    });
    
    btnSalirCrud.addEventListener('click', salirCrudEdificio);
    btnEditarNombreEdificio.addEventListener('click', habilitarEdicionNombreEdificio);
    btnConfirmarEdicionNombre.addEventListener('click', confirmarEdicionNombre);
    btnCancelarEdicionNombre.addEventListener('click', cancelarEdicionNombre);
    
    textoModalAyuda.textContent = 'Seleccione algún edificio para editar su información';
    
    window.addEventListener('mousemove', resetearInactividadUsuario);
    resetearInactividadUsuario();
}

export function desactivarVistaEdificios() {
    listaEdificios.forEach(edificio => {
        edificio.off('click', onClickEdificio);
    });
    
    btnSalirCrud.removeEventListener('click', salirCrudEdificio);
    btnEditarNombreEdificio.removeEventListener('click', habilitarEdicionNombreEdificio);
    btnConfirmarEdicionNombre.removeEventListener('click', confirmarEdicionNombre);
    btnCancelarEdicionNombre.removeEventListener('click', cancelarEdicionNombre);
    
    window.removeEventListener('mousemove', resetearInactividadUsuario);

    clearTimeout(tiempoInactivo);
    ocultarElementos(modalAyuda);
    moduloCroquisBase.reiniciarPoligonoRemarcado();
}

function onClickEdificio(e) {
    gestionarSeleccionEdificio(e.target);
}

function salirCrudEdificio() {
    mostrarElementos(menuAdmin);
    ocultarElementos(crudEdificio);
}

function gestionarSeleccionEdificio(edificio) {
    edificioSeleccionadoId = edificio.options.id;
    ocultarElementos(menuAdmin);
    mostrarElementos(crudEdificio);
    cargarDatosEdificio(edificio.options);
}

// Funciones explícitas de visibilidad (más seguras que classList.toggle)
function mostrarElementos(...elementos) {
    elementos.forEach(elemento => {
        if (elemento) elemento.classList.remove('ocultar');
    });
}

function ocultarElementos(...elementos) {
    elementos.forEach(elemento => {
        if (elemento) elemento.classList.add('ocultar');
    });
}

function cargarDatosEdificio(edificio) {
    h1Titulo.textContent = edificio.nombre;
    cargarImagenEdificio(edificio.imagen);
    cargarImagen360Edificio(edificio.imagen360);
    textAreaDescripcion.textContent = edificio.descripcion;
}

function cargarImagenEdificio(nombreImagen) {
    if (!nombreImagen) return;
    contenedorImagen.style.backgroundImage = `url('${BASE_URL}assets/img/material_croquis/fotos_de_edificios/${nombreImagen}')`;
}

function cargarImagen360Edificio(nombreImagen360) {
    if (!nombreImagen360) return;
    inicializarVisor360(nombreImagen360);
}

function inicializarVisor360(imagenPanoramica) {
    if (visor360Actual !== null) {
        visor360Actual.destroy();
    }

    visor360Actual = pannellum.viewer('contenedor-img-360', {
        "type": "equirectangular",
        "vaov": 180,
        "panorama": `${BASE_URL}assets/img/material_croquis/imagenes_360/${imagenPanoramica}`,
        "autoLoad": true,
        "autoRotate": -2,
        "showZoomCtrl": true
    });
}

/* =======================================
    LÓGICA PARA EL MODAL DE AYUDA (MEJORADA)
======================================= */

function resetearInactividadUsuario() {
    clearTimeout(tiempoInactivo);
    
    if (!modalAyuda.classList.contains('ocultar')) {
        ocultarElementos(modalAyuda);
        moduloCroquisBase.reiniciarPoligonoRemarcado();
    }

    tiempoInactivo = setTimeout(() => {
        if (!crudEdificio.classList.contains('ocultar')) return;
        
        mostrarElementos(modalAyuda);
        resaltarEdificiosHabilitados(listaEdificios);
    }, 5000);
}

function resaltarEdificiosHabilitados(edificios) {
    for (let edificio of edificios) {
        moduloCroquisBase.activarParpadeoPoligono(edificio.getElement());
    }
}