const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;
const rutaVistaRutas = `${BASE_URL}assets/js/admin/controlador_vista_rutas.js`;
const rutaVistaEdificios = `${BASE_URL}assets/js/admin/controlador_vista_edificios.js`;

const moduloCroquisBase = await import(rutaCroquisBase);
const moduloVistaRutas = await import(rutaVistaRutas);
const moduloVistaEdificios = await import(rutaVistaEdificios);

const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const botonesMenu = document.querySelectorAll('.boton-barra-lateral-admin');
const botonRutas = document.getElementById('boton-nav-rutas');
const botonEdificios = document.getElementById('boton-nav-edificios');
const contenedorCroquis = document.getElementById('croquisItesa');

activarToolTips(botonesMenu);

// Vista por defecto al cargar la página (Rutas)
moduloVistaRutas.activarVistaRutas();

botonRutas.addEventListener('click', () => {
    // 1. Desactivar vista anterior
    moduloVistaEdificios.desactivarVistaEdificios();

    // 2. Alternar visibilidad en DOM
    ocultarVistasAdmin();
    resaltarBoton(botonRutas);
    document.getElementById('vista-admin-rutas').classList.remove('ocultar');
    contenedorCroquis.classList.remove('ocultar');

    // 3. Activar vista actual
    moduloVistaRutas.activarVistaRutas();

    // 4. Ajustar tamaño de Leaflet
    setTimeout(() => {
        CROQUIS_BASE.invalidateSize();
    }, 300);
});

botonEdificios.addEventListener('click', () => {
    // 1. Desactivar vista anterior
    moduloVistaRutas.desactivarVistaRutas();

    // 2. Alternar visibilidad en DOM
    ocultarVistasAdmin();
    resaltarBoton(botonEdificios);
    contenedorCroquis.classList.remove('ocultar');

    // 3. Activar vista actual
    moduloVistaEdificios.activarVistaEdificios();

    // 4. Ajustar tamaño de Leaflet
    setTimeout(() => {
        CROQUIS_BASE.invalidateSize();
    }, 300);
});

function ocultarVistasAdmin() {
    const vistas = document.querySelectorAll('.vista-admin > div');
    for (let vista of vistas) vista.classList.add('ocultar');
}

function resaltarBoton(boton) {
    document.querySelector('.boton-activo')?.classList.remove('boton-activo');
    boton.classList.add('boton-activo');
}

function activarToolTips(botones) {
    for (let boton of botones) {
        const toolTip = boton.querySelector('.tooltip-boton-barra-lateral-admin');
        if (!toolTip) continue;

        boton.addEventListener('mouseenter', () => toolTip.classList.remove('ocultar'));
        boton.addEventListener('mouseleave', () => toolTip.classList.add('ocultar'));
    }
}

const botonSalirAdmin = document.getElementById('boton-salir-admin');
botonSalirAdmin.addEventListener('click', () => {
    window.location.href = BASE_URL;
});