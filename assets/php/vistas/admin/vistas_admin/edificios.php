<div class="crud-edificio">
    <div class="crud-edificio__main">
        <!-- NOMBRE DEL EDIFICIO -->
        <header class="crud-edificio__header">
            <div class="crud-edificio__grupo-nombre">
                <h1 class="crud-edificio__titulo">Edificio E</h1>
                <input type="text" class="crud-edificio__titulo ocultar" value="Edificio E">
                <button id="btn-editar-nombre-edificio" class="crud-edificio__btn crud-edificio__btn--edit" title="Editar nombre de edificio">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
            <div class="crud-edificio__grupo-acciones">
                <button class="crud-edificio__btn crud-edificio__btn--save" title="Guardar cambios">
                    <i class="fa-solid fa-floppy-disk"></i>
                    <span>Guardar cambios</span>
                </button>
                <button class="crud-edificio__btn crud-edificio__btn--cancel" title="Salir">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
        </header>

        <!-- IMÁGENES DEL EDIFICIO -->
        <section class="crud-edificio__imagenes">
            <div class="crud-edificio__img-wrapper crud-edificio__img-wrapper--normal">
                <button class="crud-edificio__btn crud-edificio__btn--edit crud-edificio__btn--flotante" title="Subir nueva imagen">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </button>
            </div>
            <div id="contenedor-img-360" class="crud-edificio__img-wrapper crud-edificio__img-wrapper--360">
                <button class="crud-edificio__btn crud-edificio__btn--edit crud-edificio__btn--flotante" title="Subir nueva imagen 360">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </button>
            </div>
        </section>

        <!-- DESCRIPCIÓN DEL EDIFICIO -->
        <section class="crud-edificio__seccion-tarjeta">
            <header class="crud-edificio__leyenda">
                <h2>Descripción</h2>
                <button class="crud-edificio__btn crud-edificio__btn--edit" title="Editar descripción">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </header>
            <!-- Usé readonly en lugar de disabled para mejorar la accesibilidad manteniendo el bloqueo de edición -->
            <textarea class="crud-edificio__textarea" readonly>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi impedit dignissimos eum! Exercitationem consequuntur voluptatum</textarea>
        </section>

        <!-- PISOS DEL EDIFICIO -->
        <section class="crud-edificio__seccion-tarjeta">
            <header class="crud-edificio__leyenda">
                <h2>Configuración de pisos</h2>
            </header>
            <div class="crud-edificio__grid-pisos">
                <div class="crud-edificio__piso">
                    <button class="crud-edificio__btn-piso" title="Editar configuración del piso 1">
                        <img class="crud-edificio__img-piso" src="<?php echo BASE_URL; ?>assets/img/iconos/piso_1.png" alt="icono de piso 1">
                        <span class="crud-edificio__nombre-piso">Piso 1</span>
                    </button>
                </div>
                <div class="crud-edificio__piso">
                    <button class="crud-edificio__btn-piso" title="Editar configuración del piso 2">
                        <img class="crud-edificio__img-piso" src="<?php echo BASE_URL; ?>assets/img/iconos/piso_2.png" alt="icono de piso 2">
                        <span class="crud-edificio__nombre-piso">Piso 2</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- ÁREAS DEL EDIFICIO -->
        <section class="crud-edificio__seccion-tarjeta">
            <header class="crud-edificio__leyenda">
                <h2>Áreas</h2>
            </header>
            <table class="crud-edificio__tabla-areas">
                <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Nombre</th>
                        <th>Piso</th>
                        <th>Descripción</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tabla-areas__tupla-area">
                        <td>34</td>
                        <td>LC1</td>
                        <td>Piso 1</td>
                        <td>Laboratorio de computación 1</td>
                        <td class="tabla-areas__botones">
                            <button title="Remover área de edificio" class="crud-edificio__btn crud-edificio__btn--edit tabla-araes__btn-quitar-area">
                                <i class="fa-solid fa-square-minus crud-edificio__btn--remover-area"></i>
                            </button>
                            <button title="Editar área" class="crud-edificio__btn crud-edificio__btn--edit">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="tabla-areas__fila-agregar-area">
                        <td colspan="5" title="Agregar área">
                            <button id="crud-edificio__btn-agregar-area" class="crud-edificio__btn crud-edificio__btn--edit">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- ACTIVACIÓN DE EDIFICIO -->
        <section class="crud-edificio__seccion-tarjeta">
            <header class="crud-edificio__leyenda">
                <h2>Activación de edificio</h2>
            </header>
            <div class="crud-edificio__estado">
                <div class="crud-edificio__estado-titulo">
                    <h3>Estado de edificio</h3>
                    <span class="help-tooltip-icon"><i class="fa-regular fa-circle-question"> </i></span>
                    <p class="help-tooltip-mensaje help-tooltip-mensaje-left">
                        Hace visible el edificio en todos los croquis, y permite ver y editar su ruta.
                    </p>
                </div>
                <div class="crud-edificio__estado-deslizador">
                    <span class="crud-edificio__estado-etiqueta">INACTIVO</span>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="deslizador"></span>
                    </label>
                </div>
            </div>
        </section>

    </div>
</div>