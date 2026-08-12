const rutaGestorRutas = `${BASE_URL}assets/js/croquis/gestor_rutas.js`;
const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;

const moduloGestorRutas = await import(rutaGestorRutas);
const moduloCroquisBase = await import(rutaCroquisBase);
const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const listaEdificios = moduloCroquisBase.EDIFICIOS_MAPA;

let edificioSeleccionadoId = null;


/* ====================================================
    ELEMENTOS DEL DOOM
==================================================== */

const menuAdmin = document.querySelector('.barra-lateral-izq-admin');
const crudEdificio = document.getElementById('vista-admin-edificios');


/* ELEMENTOS DEL CRUD */
const h1Titulo = document.querySelector('h1.crud-edificio__titulo');
const inputTitulo = document.querySelector('input.crud-edificio__titulo');
const contenedorImagen = document.querySelector('.crud-edificio__img-wrapper--normal');
const contenedorImagen360 = document.querySelector('.crud-edificio__img-wrapper--360');
const textAreaDescripcion = document.querySelector('.crud-edificio__textarea');

// BOTONES
const btnEditarNombreEdificio = document.getElementById('btn-editar-nombre-edificio');

function onClickEdificio(e) {
    gestionarSeleccionEdificio(e.target);
}

export function activarVistaEdificios() {
    listaEdificios.forEach(edificio => {
        edificio.on('click', onClickEdificio);
    });
}

function gestionarSeleccionEdificio(edificio) {
    edificioSeleccionadoId = edificio.options.id;
    alternarVisibilidadElemento(menuAdmin);
    alternarVisibilidadElemento(crudEdificio);

    h1Titulo.textContent = edificio.options.nombre;
    inputTitulo.value = edificio.options.nombre;
    if (edificio.options.imagen){
        contenedorImagen.style.backgroundImage = `url('${BASE_URL}assets/img/material_croquis/fotos_de_edificios/${edificio.options.imagen}')`;
    }
    if (edificio.options.imagen360) {
        inicializarVisor360(edificio.options.imagen360);
    }
    textAreaDescripcion.textContent = edificio.options.descripcion;
}

function alternarVisibilidadElemento(elemento) {
    elemento.classList.toggle('ocultar');
}

function inicializarVisor360(imagenPanoramica) {
    pannellum.viewer('contenedor-img-360', {
        "type": "equirectangular",
        "vaov": 180,
        "panorama": `${BASE_URL}assets/img/material_croquis/imagenes_360/${imagenPanoramica}`,
        "autoLoad": true,
        "autoRotate": -2,
        "showZoomCtrl": true
    });
}