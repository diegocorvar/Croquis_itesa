<?php
    include_once __DIR__ . '/../../../config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Croquis Itesa</title>

    <!-- Estilos de Leaflet.js: biblioteca de JavaScript de código abierto diseñada para crear mapas web interactivos -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <!-- CSS y JS de Pannellum desde CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.5.6/pannellum.js"></script>

    <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/main.css">
    <link rel="shortcut icon" href="<?php echo BASE_URL; ?>assets/img/logos/logo-itesa2.ico" type="image/x-icon">
</head>
<body>
    <main>
        <?php include __DIR__ . '/../componentes/menu_desplegable_izquierdo.php'; ?>
        <?php include __DIR__ . '/../componentes/barra_busqueda.php'; ?>

        <!-- Script de la librería Leaflet.js -->
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
        <script>
            // Variable global en JavaScript con la URL Base de PHP
            const BASE_URL = "<?php echo BASE_URL; ?>";
        </script>
        <script src="<?php echo BASE_URL; ?>assets/js/croquis_interactivo.js" defer></script>

        <div id="croquisItesa"></div>
        
    </main>
</body>
</html> 