let menuButton = document.querySelector(".navbar__mobile__icon");
let sidebar = document.querySelector('.sidebar');
let sidebarOverlay = document.querySelector(".sidebar__overlay")

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--isopen');
    sidebarOverlay.classList.toggle('sidebar--isopen');
});

sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--isopen');
    sidebarOverlay.classList.toggle('sidebar--isopen');
});