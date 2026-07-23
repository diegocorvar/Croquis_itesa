<?php 
$pagina_actual = basename($_SERVER['PHP_SELF']); 
?>
<script>
    // Variable global en JavaScript con la URL Base de PHP
    const BASE_URL = "<?php echo BASE_URL; ?>";
</script>


<div>
    <div class="contenedor-boton-menu" id="boton-abrir-menu">
        <img
            class="icono-menu"
            src="<?php echo BASE_URL; ?>assets/img/iconos/menu.png"
            alt="Icono de menú"
        />
    </div>
    
    <div id="modal-menu-izquierdo" class="modal-fondo oculto">
        <header class="menu-lateral">
            <div class="menu-logo-contenedor">
                <img class="logo-institucional" src="<?php echo BASE_URL; ?>assets/img/logos/logo-itesa2.png" alt="Logo de ITESA">
                <img id="boton-cerrar-menu" src="<?php echo BASE_URL; ?>assets/img/iconos/cruz.png" alt="Icono cerrar menú">
            </div>
            
            <nav class="menu-navegacion">
                <ul class="lista-navegacion">
                    <a href="<?php echo BASE_URL; ?>index.php">
                        <li class="item-navegacion <?php echo ($pagina_actual == 'index.php') ? 'activo' : ''; ?>">
                            <img class="icono-item" src="<?php echo BASE_URL; ?>assets/img/iconos/pagina-de-inicio.png" alt="Inicio"/>
                            Inicio
                        </li>
                    </a>
                    <a href="<?php echo BASE_URL; ?>assets/php/vistas/vista_croquis_itesa.php">
                        <li class="item-navegacion <?php echo ($pagina_actual == 'vista_croquis_itesa.php') ? 'activo' : ''; ?>">
                            <img class="icono-item" src="<?php echo BASE_URL; ?>assets/img/iconos/mapa-icono.png" alt="Inicio"/>
                            Mapa
                        </li>
                    </a>
                    <a>
                        <li class="item-navegacion">
                            <img class="icono-item" src="<?php echo BASE_URL; ?>assets/img/iconos/boton-web-de-ayuda.png" alt="Ayuda"/>
                            Ayuda
                        </li>
                    </a>
                </ul>
            </nav>
            <div class="contenedor-boton-admin">
                <button id="boton-admin">
                    <img class="icono-item" src="<?php echo BASE_URL; ?>assets/img/iconos/administrador.png" alt="Admin"/>
                    Admin
                </button>
            </div>
        </header>
    </div>
    <div id="modal-login-admin" class="modal-fondo oculto">
        <div class="contenedor-ingreso-admin">
            <div class="contenedor-clave-admin">
                <p>INGRESAR COMO ADMINISTRADOR</p>
                <label for="clave-acceso-admin">Contraseña:</label>
                <input id="clave-acceso-admin" type="password" required>
                <button id="boton-ingresar-admin">Ingresar</button>
                <p>
                    <i class="fa-solid fa-circle-exclamation" style="color: rgb(255, 212, 59);"></i>    
                    Solo personal autorizado
                </p>
                <img id="boton-cerrar-login" src="<?php echo BASE_URL; ?>assets/img/iconos/cruz.png" alt="Icono cerrar menú">
            </div>
        </div>
    </div>
</div>

<script src="https://kit.fontawesome.com/7ff90f9f34.js" crossorigin="anonymous"></script>
<script src="<?php echo BASE_URL; ?>assets/js/controlador-menus-despl.js" defer></script>