const navLinks = document.querySelectorAll('.nav-link');

// Añade un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Remueve la clase 'active' de todos los enlaces
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Añade la clase 'active' al enlace clicado
    link.classList.add('active');

    // Oculta todas las secciones de contenido
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => section.classList.add('d-none'));

    // Muestra la sección de contenido correspondiente
    const sectionId = link.id.replace('-link', '');
    document.getElementById(sectionId).classList.remove('d-none');
  });
});