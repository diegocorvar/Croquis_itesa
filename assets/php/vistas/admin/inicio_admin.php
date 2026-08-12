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

    <!-- VARIABLE DE RUTA Y CONTROLADOR JS 
    ========================================== -->
    <script>
        const BASE_URL = "<?php echo BASE_URL; ?>";
    </script>
    <script type="module" src="<?php echo BASE_URL; ?>assets/js/controlador-barra-lateral-admin.js" defer></script>

    <!-- ESTILOS Y SCRIPT DE LEAFLET.JS 
    ========================================== -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />

    <!-- ESTILOS Y SCRIPT DE PANELLIUM 
    ========================================== -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.css"/>
    <script   script src="https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.js"></script>

    <!-- CONTROLADOR DE ICONOS FONTAWESOME 
    ========================================== -->
    <script src="https://kit.fontawesome.com/7ff90f9f34.js" crossorigin="anonymous"></script>
</head>

<body>
    <div id="contenedor-admin">
        <aside class="barra-lateral-izq-admin">
            <div id="botones-inicio-admin" class="">
                <?php include __DIR__ . '/botones_menu/botones_inicio_admin.php'; ?>
            </div>
        </aside>

        <div id="botones-editar-ruta" class="sub-menu ocultar">
            <?php include __DIR__ . '/botones_menu/botones_editar_ruta.php'; ?>
        </div>

        <main class="vista-admin">
            <!-- ============================================================ 
                MODAL DE AYUDA
            ============================================================ -->
            <div class="modal-ayuda flex-column-center ocultar">
                <p><i class="fa-solid fa-circle-info" style="color: rgb(255, 212, 59);"></i></p>
                <p>Seleccione algún edificio para editar su ruta</p>
            </div>

            <!-- ============================================================
                MENSAJE PARA INDICAR UNA ACCIÓN
            ============================================================ -->
            <div class="contenedor-mensaje-accion flex-column-center ocultar no-seleccionable">
                <i class="fa-solid fa-circle-info" style="color: rgb(0, 0, 0);"></i>
                <p></p>
            </div>

            <!-- ============================================================ 
                CROQUIS BASE
            ============================================================ -->
            <div id="croquisItesa" ></div>

            <!-- ============================================================ 
                CONTENEDORES DE INTERFAZ
            ============================================================ -->
            <div id="vista-admin-rutas" class="">
                <?php include __DIR__ . '/vistas_admin/rutas.php'; ?>
            </div>

            <div id="vista-admin-edificios" class="ocultar">
                <?php include __DIR__ . '/vistas_admin/edificios.php'; ?>
            </div>
        </main>
    </div>
</body>

</html>