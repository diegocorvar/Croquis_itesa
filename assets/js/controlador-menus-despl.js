// MENÚ DESPLEGABLE IZQUIERDO =================================================

const botonAbrirMenu = document.getElementById('boton-abrir-menu');
const modalMenuIzquierdo = document.getElementById('modal-menu-izquierdo');
const botonCerrarMenu = document.getElementById('boton-cerrar-menu');
const botonAbrirLoginAdmin = document.getElementById('boton-admin');
const botonCerrarLoginAdmin = document.getElementById('boton-cerrar-login');
const modalLoginAdmin = document.getElementById('modal-login-admin');

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

const mostrarLoginAdmin = () => {
    ocultarMenu();
    modalLoginAdmin.classList.remove('oculto');
}

const ocultarLoginAdmin = () => {
    modalLoginAdmin.classList.add('oculto');
}

botonAbrirLoginAdmin.addEventListener('click', mostrarLoginAdmin);
botonCerrarLoginAdmin.addEventListener('click', ocultarLoginAdmin);

modalLoginAdmin.addEventListener('click', (e) => {
    if (e.target === modalLoginAdmin) {
        ocultarLoginAdmin();
    }
});

// IR A ADMIN ===========================================================

const botonIngresarAdmin = document.getElementById('boton-ingresar-admin');

botonIngresarAdmin.addEventListener('click', () => {
    const clave = document.getElementById('clave-acceso-admin').value;

    if (clave === 'admin123') {
        window.location.href = BASE_URL + "/assets/php/vistas/admin/inicio_admin.php";
    }
    else {
        console.log('contraseña incorrecta');
        console.log(clave);
    }
})

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