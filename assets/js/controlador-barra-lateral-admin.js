const botonesMenu = document.querySelectorAll('.boton-barra-lateral-admin');
activarToolTips(botonesMenu);

function activarToolTips(botones) {
    for (let boton of botones) {
        const toolTip = boton.querySelector('.tooltip-boton-barra-lateral-admin');

        boton.addEventListener('mouseenter', () => {
            toolTip.classList.remove('ocultar');
        });
        boton.addEventListener('mouseleave', () => {
            toolTip.classList.add('ocultar');
        });
    }
};

const botonSalirAdmin = document.getElementById('boton-salir-admin');

botonSalirAdmin.addEventListener('click', () => {
    window.location.href = BASE_URL;
});