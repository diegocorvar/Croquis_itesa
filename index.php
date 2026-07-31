<?php 
include_once __DIR__ . '/config.php'; 
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crookies ITESA</title>

    <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/main.css">
    <link rel="shortcut icon" href="<?php echo BASE_URL; ?>assets/img/logos/logo-itesa2.ico" type="image/x-icon">
</head>
<body>
    <main class="contenedor-principal-index">
        
        <!-- MENÚ LATERAL DE TU COMPAÑERO -->
        <div>
            <?php include __DIR__ . '/assets/php/componentes/menu_desplegable_izquierdo.php'; ?>
        </div>
        
        <!-- SECCIÓN 1: BIENVENIDA (Ocupará el 85% de la pantalla) -->
        <div class="seccion-hero">
            <div class="contenedor-bienvenida">
                <div class="contenedor-texto-bienvenida">
                    <h1>¡Bienvenido/a al <abbr title="Instituto Tecnológico Superior del Oriente del Estado de Hidalgo">ITESA</abbr>!</h1>
                    <p class="eslogan">“Por un México Tecnológicamente Independiente”</p>
                    <p class="texto-informativo">
                        Explora nuestro croquis interactivo para encontrar edificios, áreas y personal dentro de las instalaciones.
                    </p>
                </div>
                <div class="contenedor-boton-mapa">
                    <p class="pregunta-ubicacion">¿Buscas algún <span>lugar</span> o <span>persona</span>?</p>
                    <button class="boton-ir-mapa" onclick="window.location.href='<?php echo BASE_URL; ?>assets/php/vistas/vista_croquis_itesa.php'">IR AL MAPA</button>
                </div>
            </div>
        </div>

        <!-- SECCIÓN 2: LA QUE SE ASOMA ABAJO (Con scroll) -->
        <section class="seccion-inferior">
            
            <!-- Fila de 3 Videos Horizontales -->
            <div class="contenedor-videos-horizontal">
                <div class="video-item">
                    <video autoplay loop muted playsinline>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="video-item">
                    <video autoplay loop muted playsinline>
                        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="video-item">
                    <video autoplay loop muted playsinline>
                        <!-- Actualiza con tu tercer video -->
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    </video>
                </div>
            </div>

            <!-- Fila de Equipo Horizontal -->
            <div class="contenedor-equipo-horizontal">
                <div class="integrante-mini">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Joshua.jpg" alt="Joshua">
                    <span>Joshua</span>
                </div>
                <div class="integrante-mini">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Diego.jpg" alt="Diego">
                    <span>Diego</span>
                </div>
                <div class="integrante-mini">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Ingrid.jpg" alt="Ingrid">
                    <span>Ingrid</span>
                </div>
                <div class="integrante-mini">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Angel.jpg" alt="Angel">
                    <span>Angel</span>
                </div>
                <div class="integrante-mini">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/profesor.jpg" alt="Profesor">
                    <span>Profesor</span>
                </div>
            </div>

        </section>

    </main>
</body>
</html>