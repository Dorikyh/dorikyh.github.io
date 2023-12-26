const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Función para cambiar entre modos claro y oscuro
function toggleMode() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
    }
}

// Consultar si el sistema está en modo claro o oscuro por defecto
const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

// Si el sistema está en modo oscuro, aplicar el estilo correspondiente
if (prefersLightMode) {
    body.classList.add('light-mode');
}

// Evento click para el botón que activa el cambio de modo
modeToggle.addEventListener('click', toggleMode);
