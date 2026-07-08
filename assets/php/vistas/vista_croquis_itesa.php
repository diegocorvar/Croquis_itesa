<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Croquis Itesa</title>

    <!-- Estilos de Leaflet.js: biblioteca de JavaScript de código abierto diseñada para crear mapas web interactivos -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />

    <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
    <main>
        <?php include('../componentes/menu_desplegable_izquierdo.php'); ?>
        <?php include('../componentes/barra_busqueda.php'); ?>

        <!-- Script de la librería Leaflet.js -->
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
        <script src="/assets/js/croquis_interactivo.js" defer></script>

        <div id="croquisItesa"></div>
        <div class="ventana-informacion-edificio">
            <div class="contenedor-imagen-edificio">
                <img class="imagen-edficio" src="/assets/img/material_croquis/fotos_de_edificios/fachada_edificioE.webp">
            </div>
        </div>
    </main>
</body>
</html>