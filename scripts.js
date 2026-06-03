const navbar = document.querySelector('.navbar-editor');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Evitamos que actúe si el scroll es menor a 50px (cerca del tope)
    if (currentScrollY > 350) {
        if (currentScrollY > lastScrollY) {
            // Scroll hacia abajo: ocultar
            navbar.classList.add('hiddenn');
        } else {
            // Scroll hacia arriba: mostrar
            navbar.classList.remove('hiddenn');
        }
    } else {
        // Si estamos arriba del todo, siempre se muestra
        navbar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});