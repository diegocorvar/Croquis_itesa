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
</head>
<body>
    <main id="main-inicio-admin">
        <header class="barra-lateral-izq-admin">
            <button id="boton-salir-admin" class="boton-barra-lateral-admin">
                <img src="<?php echo BASE_URL; ?>assets/img/iconos/salir.png"/>
            </button>
            <nav class="admin-nav">
                <button id="boton-rutas" class="boton-barra-lateral-admin">
                    <img src="<?php echo BASE_URL; ?>assets/img/iconos/ruta.png"/>
                </button>
            </nav>
        </header>
        <div></div>
    </main>
</body>
</html>