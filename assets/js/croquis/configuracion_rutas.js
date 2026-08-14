// Objeto mutable que simula los registros de la tabla 'edificio_caminos'
export const CONFIG_RUTAS_LOCAL = {
    'E': ['camino_1', 'camino_2', 'camino_3', 'camino_4', 'camino_5', 'camino_6', 'camino_7', 'camino_8', 'camino_9'],
    
    'A': ['camino_10', 'camino_11']
};

/**
 * Guarda o actualiza temporalmente en memoria la ruta de un edificio.
 * (En el futuro, esto hará el POST a guardar_ruta.php)
 */
export function guardarRutaLocal(idEdificio, listaCaminosIds) {
    CONFIG_RUTAS_LOCAL[idEdificio] = listaCaminosIds;
    console.log(`Ruta guardada localmente para Edificio ${idEdificio}:`, CONFIG_RUTAS_LOCAL[idEdificio]);
}