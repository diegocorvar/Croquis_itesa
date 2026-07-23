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
            <div id="botones-inicio-admin" class="">
                <?php include __DIR__ . '/botones_menu/botones_inicio_admin.php'; ?>
            </div>
            <div id="botones-editar-ruta" class="sub-menu ocultar">
                <?php include __DIR__ . '/botones_menu/botones_editar_ruta.php'; ?>
            </div>
        </aside>
        <main class="vista-admin">
            <div id="vista-admin-rutas">
                <?php include __DIR__ . '/vistas_admin/rutas.php'; ?>
            </div>
            
        </main>
    </div>
</body>
</html>