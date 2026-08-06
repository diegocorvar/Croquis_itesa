import { MAPA_CAMINOS_COORDENADAS } from './caminos_coordenadas.js';
import { CONFIG_RUTAS_LOCAL, guardarRutaLocal } from './configuracion_rutas.js';

let grupoRutaActiva = null;

/**
 * Muestra la ruta del edificio en el mapa recibido
 * @param {string} idEdificio Ej: 'E'
 * @param {L.Map} mapaInstancia Tu objeto del mapa Leaflet (CROQUIS_BASE)
 */

/* ====================================================
    1. MODO CONSULTA (VISTA PÚBLICA)
==================================================== */

export function mostrarRutaEdificio(idEdificio, mapaInstancia) {
    if (!mapaInstancia) {
        console.error("No se proporcionó la instancia del mapa Leaflet.");
        return;
    }

    // Si aún no hemos creado el grupo de capas para este mapa, lo inicializamos
    if (!grupoRutaActiva) {
        grupoRutaActiva = L.featureGroup().addTo(mapaInstancia);
    } else {
        grupoRutaActiva.clearLayers();
    }

    const caminosAsignados = CONFIG_RUTAS_LOCAL[idEdificio] || [];

    if (caminosAsignados.length === 0) {
        console.warn(`El edificio ${idEdificio} no tiene caminos asignados.`);
        return;
    }

    caminosAsignados.forEach(idCamino => {
        const coords = MAPA_CAMINOS_COORDENADAS[idCamino];
        if (coords) {
            const poligono = L.polygon(coords, {
                className: 'poligono-camino-activo'
            });
            grupoRutaActiva.addLayer(poligono);
        }
    });

    if (grupoRutaActiva.getLayers().length > 0) {
        mapaInstancia.flyToBounds(grupoRutaActiva.getBounds(), {
            padding: [40, 40],
            duration: 1
        });
    }
}

export function ocultarRutas() {
    if(grupoRutaActiva === null) return;
    grupoRutaActiva.clearLayers();
};


/* ====================================================
    2. MODO ASIGNACIÓN (INTERFAZ ADMINISTRADOR)
==================================================== */

let caminosSeleccionadosTemp = new Set();
let capaAdministradorGroup = L.featureGroup();

/**
 * Inicia el modo de selección gráfica de caminos para un edificio
 * @param {string} idEdificio El edificio al que le asignaremos caminos
 */
export function activarModoAsignacion(idEdificio, mapaInstancia) {
    ocultarRutas();
    capaAdministradorGroup.clearLayers();
    capaAdministradorGroup.addTo(mapaInstancia);

    // Cargar selección previa si ya existía
    const seleccionPrevia = CONFIG_RUTAS_LOCAL[idEdificio] || [];
    caminosSeleccionadosTemp = new Set(seleccionPrevia);

    // Renderizar TODOS los caminos del mapa para poder hacerles clic
    Object.keys(MAPA_CAMINOS_COORDENADAS).forEach(idCamino => {
        const coords = MAPA_CAMINOS_COORDENADAS[idCamino];
        const estaSeleccionado = caminosSeleccionadosTemp.has(idCamino);

        const poligono = L.polygon(coords, {
            className: estaSeleccionado ? 'camino-admin-seleccionado' : 'camino-admin-disponible'
        });

        // Evento interactivo al hacer clic en un tramo
        poligono.on('click', (e) => {
            L.DomEvent.stopPropagation(e); // Evita clics no deseados en el mapa base

            if (caminosSeleccionadosTemp.has(idCamino)) {
                caminosSeleccionadosTemp.delete(idCamino);
                poligono.setStyle({ className: 'camino-admin-disponible' });
                // En versiones recientes de Leaflet, actualizar clase requiere:
                L.DomUtil.removeClass(poligono._path, 'camino-admin-seleccionado');
                L.DomUtil.addClass(poligono._path, 'camino-admin-disponible');
            } else {
                caminosSeleccionadosTemp.add(idCamino);
                L.DomUtil.removeClass(poligono._path, 'camino-admin-disponible');
                L.DomUtil.addClass(poligono._path, 'camino-admin-seleccionado');
            }
        });

        capaAdministradorGroup.addLayer(poligono);
    });
};

/**
 * Confirma y guarda la selección actual en el mapa local
 */
export function confirmarSeleccionAdmin(idEdificio) {
    const arregloFinal = Array.from(caminosSeleccionadosTemp);
    guardarRutaLocal(idEdificio, arregloFinal);

    // Limpiamos el modo admin y mostramos el resultado
    capaAdministradorGroup.clearLayers();
    mostrarRutaEdificio(idEdificio);
};

export function borrarRuta(idEdificio) {
    guardarRutaLocal(idEdificio, []);
    capaAdministradorGroup.clearLayers();
}