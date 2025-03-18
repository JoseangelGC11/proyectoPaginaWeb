// Selecciona el botón del menú y añade un evento de clic
document.querySelector('.menu-toggle').addEventListener('click', function () {
    // Cuando se hace clic en el botón del menú, se añade o quita la clase 'active' al menú
    document.querySelector('.menu').classList.toggle('active');
});

// Selecciona todos los botones de submenú y añade un evento de clic a cada uno
document.querySelectorAll('.submenu-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
        // Selecciona el submenú que está justo después del botón de submenú
        const submenu = button.nextElementSibling;
        // Selecciona el elemento <li> que contiene el botón de submenú
        const parentLi = button.parentElement;
        // Si el submenú existe y tiene la clase 'submenu'
        if (submenu && submenu.classList.contains('submenu')) {
            // Añade o quita la clase 'active' al submenú
            submenu.classList.toggle('active');
            // Añade o quita la clase 'active' al elemento <li> que contiene el botón de submenú
            parentLi.classList.toggle('active');
        }
    });
});