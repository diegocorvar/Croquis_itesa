<!-- ============================================================ 
    MODAL DE AYUDA
============================================================ -->
<div class="modal-ayuda flex-column-center ocultar">
    <p><i class="fa-solid fa-circle-info" style="color: rgb(255, 212, 59);"></i></p>
    <p>Seleccione algún edificio para editar su ruta</p>
</div>

<!-- ============================================================ 
    MENSAJE PARA INDICAR LA RUTA DE QUÉ EDIFICIO SE ESTÁ EDITANDO
============================================================ -->
<div class="contenedor-edificio-seleccionado flex-column-center no-seleccionable ocultar">
    <p>Editando la ruta de</p>
    <p id="nombre-edificio-editando"></p>
</div>

<!-- ============================================================ 
    VENTANA EMERGENTE PARA CONFIRMAR ELIMINACIÓN DE RUTA
============================================================ -->
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

<!-- ============================================================
    MENSAJE PARA INDICAR UNA ACCIÓN
============================================================ -->
<div class="contenedor-mensaje-eliminacion-ruta flex-column-center ocultar no-seleccionable">
    <i class="fa-solid fa-circle-info" style="color: rgb(0, 0, 0);"></i>
    <p></p>
</div>