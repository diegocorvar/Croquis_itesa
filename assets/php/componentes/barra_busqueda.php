<div class="busqueda-zona">
    <div class="busqueda-interfaz">
        
        <button class="busqueda-lupa-boton" id="busqueda-activador-boton" aria-label="Buscar">
            <img
                class="busqueda-lupa-icono"
                src="<?php echo BASE_URL; ?>assets/img/iconos/lupa.png"
                alt="Icono de lupa"
            />
        </button>

        <div class="busqueda-desplegable oculto" id="busqueda-bloque-desplegable">
            <input
                class="busqueda-input"
                id="busqueda-campo-input"
                type="text"
                name="busqueda"
                placeholder="¿Qué o a quién está buscando?"
            />
            
            <div class="busqueda-filtros-contenedor">
                <button id="filtro-edificio" class="busqueda-filtro-boton">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/edificio.png" alt="">
                    Edificio
                </button>
                <button id="filtro-personal" class="busqueda-filtro-boton">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/jefe.png" alt="">
                    Personal
                </button>
                <button id="filtro-area" class="busqueda-filtro-boton">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/mapa.png" alt="">
                    Área
                </button>
            </div>
        </div>

    </div>
</div>

<script src="<?php echo BASE_URL; ?>assets/js/controlador-menus-despl.js" defer></script>