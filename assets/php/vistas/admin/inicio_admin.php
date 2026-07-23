<?php 
    include_once __DIR__ . '/../../../../config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador</title>
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/main.css">
    <link rel="shortcut icon" href="<?php echo BASE_URL; ?>assets/img/logos/logo-itesa2.ico" type="image/x-icon">

    <script src="<?php echo BASE_URL; ?>assets/js/controlador-barra-lateral-admin.js" defer></script>
</head>
<body>
    <div id="contenedor-admin">
        <aside class="barra-lateral-izq-admin">
            <button id="boton-salir-admin" class="boton-barra-lateral-admin">
                <img src="<?php echo BASE_URL; ?>assets/img/iconos/salir.png"/>
                <div class="tooltip-boton-barra-lateral-admin ocultar">
                    <p>Salir</p>
                </div>
            </button>
            <nav class="admin-nav">
                <!-- RUTAS =========================================================== -->
                <button id="boton-rutas" class="boton-barra-lateral-admin boton-activo">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/ruta.png"/>
                    <div class="tooltip-boton-barra-lateral-admin ocultar">
                        <p>Rutas</p>
                    </div>
                </button>


                <!-- EDIFICIOS ======================================================= -->
                <button id="boton-rutas" class="boton-barra-lateral-admin">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/edificio_info.png"/>
                    <div class="tooltip-boton-barra-lateral-admin ocultar">
                        <p>Edificios</p>
                    </div>
                </button>


                <!-- ÁREAS =========================================================== -->
                <button id="boton-rutas" class="boton-barra-lateral-admin">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/areas.png"/>
                    <div class="tooltip-boton-barra-lateral-admin ocultar">
                        <p>Áreas</p>
                    </div>
                </button>


                <!-- PERSONAL ======================================================== -->
                <button id="boton-rutas" class="boton-barra-lateral-admin">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/trabajador.png"/>
                    <div class="tooltip-boton-barra-lateral-admin ocultar">
                        <p>Personal</p>
                    </div>
                </button>
                
            </nav>
        </aside>
        <main class="vista-admin">
            <div id="vista-admin-rutas">
                <?php include __DIR__ . '/vistas_admin/rutas.php'; ?>
            </div>
            
        </main>
    </div>
</body>
</html>