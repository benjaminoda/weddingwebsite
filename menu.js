function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    const closeButton = document.querySelector('.mobile-menu-close');
    navUl.classList.toggle('show');
    closeButton.classList.toggle('show');
}