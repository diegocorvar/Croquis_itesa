/* ====================================================
    SIMULACIÓN DE BASE DE DATOS (Fácil de migrar)
==================================================== */
/* ====================================================
    SIMULACIÓN DE BASE DE DATOS
==================================================== */
const datosPersonal = [
    {
        id: 1,
        nombre: "Ing. Román Valdez",
        cargo: "Jefe de División de ISC",
        horario: "Lun - Vie: 09:00 a 15:00",
        id_edificio: "E", 
        nombre_edificio: "Edificio E",
        foto: "https://ui-avatars.com/api/?name=Roman+Valdez&background=003362&color=fff&size=128&bold=true"
    },
    {
        id: 2,
        nombre: "Lic. Elías Martínez",
        cargo: "Maestro de ISC",
        horario: "Lun - Vie: 10:00 a 18:00",
        id_edificio: "A",
        nombre_edificio: "Edificio A",
        foto: "https://ui-avatars.com/api/?name=Elias+Martinez&background=003362&color=fff&size=128&bold=true"
    },
    {
        id: 3,
        nombre: "Mtra. Ana Silvia",
        cargo: "Maestra de ISA",
        horario: "Mar y Jue: 08:00 a 16:00",
        id_edificio: "C",
        nombre_edificio: "Edificio C",
        foto: "https://ui-avatars.com/api/?name=Ana+Silvia&background=003362&color=fff&size=128&bold=true"
    }
];

/* ====================================================
    RENDERIZADO DE TARJETAS
==================================================== */
export function renderizarDirectorioPersonal() {
    const contenedor = document.getElementById('contenedor-tarjetas-personal');
    if (!contenedor) return; 

    contenedor.innerHTML = ''; 

    datosPersonal.forEach(persona => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-personal';
        
        tarjeta.innerHTML = `
            <img src="${persona.foto}" alt="Foto de ${persona.nombre}" class="tarjeta-foto">
            
            <h3 class="tarjeta-nombre">${persona.nombre}</h3>
            <p class="tarjeta-cargo">${persona.cargo}</p>
            
            <div style="margin-bottom: 20px;">
                <div class="info-dato">
                    <i class="fa-regular fa-clock"></i>
                    <span>${persona.horario}</span>
                </div>
                <div class="info-dato">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${persona.nombre_edificio}</span>
                </div>
            </div>
            
            <button class="btn-ruta-personal" data-idedificio="${persona.id_edificio}" data-nombreedificio="${persona.nombre_edificio}">
                <i class="fa-solid fa-route"></i> Ver ruta de acceso
            </button>
        `;
        
        contenedor.appendChild(tarjeta);
    });

    asignarEventosRutas();
}

/* ====================================================
    EVENTOS DE BOTONES
==================================================== */
function asignarEventosRutas() {
    const botones = document.querySelectorAll('.btn-ruta-personal');
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const idEdificio = e.currentTarget.getAttribute('data-idedificio');
            const nombreEdificio = e.currentTarget.getAttribute('data-nombreedificio');
            alert(`Preparando ruta hacia el ${nombreEdificio}. ¡Pronto lo conectaremos con el mapa!`);
        });
    });
}