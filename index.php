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
    <main>
        <div>
            <?php include __DIR__ . '/assets/php/componentes/menu_desplegable_izquierdo.php'; ?>
        </div>
        
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

        <section class="seccion-videos">
            <div class="contenedor-video anim-video-izq">
                <video autoplay loop muted playsinline>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
            </div>
    
            <div class="contenedor-video anim-video-der">
                <video autoplay loop muted playsinline>
                    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
            </div>
        </section>

        <section class="seccion-equipo">
            <h2 class="titulo-equipo anim-titulo">Nuestro Equipo de Trabajo</h2>
            
            <div class="grid-equipo">
                <div class="tarjeta-integrante">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Joshua.jpg" alt="Foto de Joshua">
                    <h3>Brandon Joshua</h3>
                    <p>Desarrollo Front-end</p>
                </div>
                
                <div class="tarjeta-integrante">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Diego.jpg" alt="Foto de Diego">
                    <h3>Diego</h3>
                    <p>Ingeniería de Software</p>
                </div>

                <div class="tarjeta-integrante">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Ingrid.jpg" alt="Foto de Ingrid">
                    <h3>Ingrid</h3>
                    <p>Modelado 3D (Blender)</p>
                </div>

                <div class="tarjeta-integrante">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/Angel.jpg" alt="Foto de Angel">
                    <h3>Angel</h3>
                    <p>Modelado 3D (Blender)</p>
                </div>


                <div class="tarjeta-integrante">
                    <img src="<?php echo BASE_URL; ?>assets/img/equipo/profesor.jpg" alt="Foto del Profesor">
                    <h3>Profesor</h3>
                    <p>Asesor del Proyecto</p>
                </div>
            </div>
        </section>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    <script>
        // Registrar el plugin ScrollTrigger en el motor de GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Animación para el Video Izquierdo (Entrada desde la izquierda)
        gsap.from(".anim-video-izq", {
            x: -150,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".seccion-videos",
                start: "top 80%",
                // play: al entrar, none: al salir, none: al regresar, reverse: reinicia al subir
                toggleActions: "play none none reverse"
            }
        });

        // Animación para el Video Derecho (Entrada desde la derecha)
        gsap.from(".anim-video-der", {
            x: 150,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".seccion-videos",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Animación para el Título del Equipo
        gsap.from(".anim-titulo", {
            y: -30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".seccion-equipo",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Animación en Cascada (Stagger) para las Tarjetas de los Integrantes
        gsap.from(".tarjeta-integrante", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15, // Retraso secuencial entre cada tarjeta
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".grid-equipo",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    </script>
</body>
</html>