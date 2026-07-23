const rutaModulo = `${BASE_URL}assets/js/croquis/croquis_base.js`;
const modulo = await import(rutaModulo);



const salirEditarRuta = document.getElementById('boton-salir-editar-ruta');
const opcionesEditarRuta = document.getElementById('botones-editar-ruta');
const opcionesMenuAdmin = document.getElementById('botones-inicio-admin');

salirEditarRuta.addEventListener('click', alternarOpcionesMenu);


const edificioE = modulo.edificioE;

edificioE.on('click', () => {
    if (opcionesEditarRuta.classList.contains('ocultar')) {
        alternarOpcionesMenu();
    } 
});

function alternarOpcionesMenu() {
    opcionesEditarRuta.classList.toggle('ocultar');
    opcionesMenuAdmin.classList.toggle('ocultar');
}
