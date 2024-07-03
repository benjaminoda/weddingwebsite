function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    const closeButton = document.querySelector('.mobile-menu-close');
    const body = document.body;

    navUl.classList.toggle('show');
    closeButton.classList.toggle('show');

    // Toggle a class on the body to prevent scrolling when menu is open
    body.classList.toggle('menu-open');

    // Fade in/out menu items
    const menuItems = navUl.querySelectorAll('li');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transitionDelay = navUl.classList.contains('show') ? `${0.1 * (index + 1)}s` : '0s';
        }, 0);
    });
}