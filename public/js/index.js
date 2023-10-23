const linkInicio = document.getElementById('linkInicio');

// Onclick para el link de la vista de inicio
linkInicio.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSectionsExceptInicio();
    vistaInicio.style.display = 'block';
    
});

// Onclick para el link de la vista de proyectos
linkProyectos.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSections();
    const inicio = document.getElementById('vistaInicio');
    inicio.classList.remove = 'd-block';
    inicio.classList.add = 'none';
    vistaProyectos.style.display = 'block';
});

// Onclick para el link de la vista de proyectos > Mobile
linkProyMobile.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSections();
    vistaProyMobile.style.display = 'block';
});

// Onclick para el link de la vista de proyectos > Landing
linkProyLanding.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSections();
    vistaProyLanding.style.display = 'block';
});

// Onclick para el link de la vista de proyectos > Web
linkProyWeb.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSections();
    vistaProyWeb.style.display = 'block';
});

// Onclick para el link de la vista de proyectos > Ecommerce
linkProyEcommerce.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSections();
    vistaProyEcommerce.style.display = 'block';
});

// Onclick para el link de la vista de proyectos > Games
linkProyGames.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSections();
    vistaProyGames.style.display = 'block';
});

// Onclick para el link de la vista de Perfil de Usuario
linkPerfil.addEventListener('click', function (event) {
    event.preventDefault();
    hideAllSections();
    vistaPerfil.style.display = 'block';
});


// Función para ocultar todas las secciones excepto el inicio
function hideAllSectionsExceptInicio() {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        if (section.id !== 'vistaInicio') {
            section.style.display = 'none';
        }
    }
}
    // Función para ocultar todas las secciones
    function hideAllSections() {
        const sections = document.querySelectorAll('section');
        for (const section of sections) {
            section.style.display = 'none';
        }
    }


hideAllSectionsExceptInicio();
