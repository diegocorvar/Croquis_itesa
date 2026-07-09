<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crookies ITESA</title>

    <!-- Ruta de CSS corregida con el punto inicial -->
    <link rel="stylesheet" href="./assets/css/main.css">
    
    <!-- Librería AOS para las animaciones al scrollear -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<body>
    <main>
        <!-- Componentes PHP (Asegúrate de que dentro de estos archivos también uses "./" en las imágenes) -->
        <div>
            <?php include('./assets/php/componentes/menu_desplegable_izquierdo.php'); ?>
            <?php include('./assets/php/componentes/barra_busqueda.php'); ?>
        </div>
        
        <div class="seccion-hero">
            <div class="contenedor-bienvenida">
                <div class="contenedor-logo">
                    <img class="logo" src="./assets/img/logos/logo-itesa.png" alt="Logo ITESA">
                </div>
                <div class="contenedor-texto-bienvenida">
                    <h1>¡Bienvenido/a al <abbr title="Instituto Tecnológico Superior del Oriente del Estado de Hidalgo">ITESA</abbr>!</h1>
                    <p class="eslogan">“Por un México Tecnológicamente Independiente”</p>
                    <p class="texto-informativo">
                        Explora nuestro croquis interactivo para encontrar edificios, áreas y personal dentro de las instalaciones.
                    </p>
                </div>
                <div class="contenedor-boton-mapa">
                    <p class="pregunta-ubicacion">¿Buscas algún <span>lugar</span> o <span>persona</span>?</p>
                    <button class="boton-ir-mapa">IR AL MAPA</button>
                </div>
            </div>
        </div>

        <!-- SECCIÓN 2: VIDEOS (Maqueta y Blender) -->
        <section class="seccion-videos">
            <div class="contenedor-video" data-aos="fade-right">
                <video autoplay loop muted playsinline>
                    <source src="./assets/videos/maqueta-fisica.mp4" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
            </div>
            
            <div class="contenedor-video" data-aos="fade-left">
                <video autoplay loop muted playsinline>
                    <source src="./assets/videos/render-blender.mp4" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
            </div>
        </section>

        <!-- SECCIÓN 3: EQUIPO DE TRABAJO -->
        <section class="seccion-equipo">
            <h2 class="titulo-equipo" data-aos="fade-up">Nuestro Equipo de Trabajo</h2>
            
            <div class="grid-equipo">
                <div class="tarjeta-integrante" data-aos="zoom-in" data-aos-delay="0">
                    <img src="./assets/img/equipo/brandon.jpg" alt="Foto de Brandon">
                    <h3>Joshua</h3>
                    <p>Desarrollo Front-end</p>
                </div>
                
                <div class="tarjeta-integrante" data-aos="zoom-in" data-aos-delay="100">
                    <img src="./assets/img/equipo/luis.jpg" alt="Foto de Luis">
                    <h3>Diego</h3>
                    <p>Ingeniería de Software</p>
                </div>

                <div class="tarjeta-integrante" data-aos="zoom-in" data-aos-delay="200">
                    <img src="./assets/img/equipo/paulina.jpg" alt="Foto de Paulina">
                    <h3>Angel</h3>
                    <p>Ingeniería de Software</p>
                </div>

                <div class="tarjeta-integrante" data-aos="zoom-in" data-aos-delay="300">
                    <img src="./assets/img/equipo/dassaefd.jpg" alt="Foto de Dassaefd">
                    <h3>Ingrid</h3>
                    <p>Modelado 3D (Blender)</p>
                </div>

                <div class="tarjeta-integrante" data-aos="zoom-in" data-aos-delay="500">
                    <img src="./assets/img/equipo/profesor.jpg" alt="Foto del Profesor">
                    <h3>Profesor</h3>
                    <p>Asesor del Proyecto</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Scripts (Librería de animaciones y su activación) -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000, 
            once: true 
        });
    </script>
</body>
</html>