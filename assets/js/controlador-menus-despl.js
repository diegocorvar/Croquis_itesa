// MENÚ DESPLEGABLE IZQUIERDO =================================================

const botonAbrirMenu = document.getElementById('boton-abrir-menu');
const modalMenuIzquierdo = document.getElementById('modal-menu-izquierdo');
const botonCerrarMenu = document.getElementById('boton-cerrar-menu');
const opcionesMenu = document.querySelectorAll('.item-navegacion');

const mostrarMenu = () => {
    modalMenuIzquierdo.classList.remove('oculto');
    botonAbrirMenu.classList.add('oculto');
};

const ocultarMenu = () => {
    modalMenuIzquierdo.classList.add('oculto');
    botonAbrirMenu.classList.remove('oculto');
};

botonAbrirMenu.addEventListener('click', mostrarMenu);
botonCerrarMenu.addEventListener('click', ocultarMenu);

modalMenuIzquierdo.addEventListener('click', (e) => {
    if (e.target === modalMenuIzquierdo) {
        ocultarMenu();
    }
});

for (let opcionMenu of opcionesMenu) {
    opcionMenu.addEventListener('click', () => {
        atenuarOpcionesDelMenu();
        resaltarOpcionDeMenu(opcionMenu);
        console.log("hola")
    })
}

function resaltarOpcionDeMenu(opcionMenu) {
    opcionMenu.classList.add("activo");
}

function atenuarOpcionesDelMenu() {
    for (let opcionMenu of opcionesMenu) {
        opcionMenu.classList.remove("activo");
    }
}

// BARRA DE BÚSQUEDA ===========================================================

const activadorBusqueda = document.getElementById('busqueda-activador-boton');
const bloqueDesplegable = document.getElementById('busqueda-bloque-desplegable');
const campoInput = document.getElementById('busqueda-campo-input');


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