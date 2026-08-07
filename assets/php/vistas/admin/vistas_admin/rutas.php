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