
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>const BASE_URL = "<?php echo BASE_URL; ?>";</script>
<script type="module" src="<?php echo BASE_URL; ?>assets/js/admin/controlador_vista_rutas.js" defer></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
<script src="https://kit.fontawesome.com/7ff90f9f34.js" crossorigin="anonymous"></script>


<div id="croquisItesa"></div>
<div class="modal-ayuda flex-column-center ocultar">
    <p><i class="fa-solid fa-circle-info" style="color: rgb(255, 212, 59);"></i></p>
    <p>Seleccione algún edificio para editar su ruta</p>
</div>

<div class="contenedor-edificio-seleccionado flex-column-center no-seleccionable ocultar">
    <p>Editando la ruta de</p>
    <p id="nombre-edificio-editando"></p>
</div>

<div id="modal-borrar-ruta" class="modal ocultar">
    <div class="contenedor-confirmar-eliminacion flex-column-center">
        <div>
            <p>¿Segur@ que quieres borrar la ruta de <span id="nombre-edificio-elimiar-ruta">Edificio E</span>?</p> 
        </div>
        <div>
            <button id="confirmar-eliminacion-ruta" class="opcion-eliminar-ruta">Sí</button>
            <button id="cancelar-eliminacion-ruta" class="opcion-eliminar-ruta">No</button>
        </div>
    </div>
</div>

<div class="contenedor-mensaje-eliminacion-ruta flex-column-center ocultar no-seleccionable">
    <i class="fa-solid fa-circle-info" style="color: rgb(0, 0, 0);"></i>
    <p></p>
</div>