const rutaGestorRutas = `${BASE_URL}assets/js/croquis/gestor_rutas.js`;
const rutaCroquisBase = `${BASE_URL}assets/js/croquis/croquis_base.js`;

const moduloGestorRutas = await import(rutaGestorRutas);
const moduloCroquisBase = await import(rutaCroquisBase);
const CROQUIS_BASE = moduloCroquisBase.CROQUIS_BASE;

const edificioE = moduloCroquisBase.edificioE;
const listaEdificios = [edificioE];


function onClickEdificioE() {
    gestionarSeleccionEdificio('E', 'Edificio E');
}