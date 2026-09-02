let menuButton = document.querySelector(".navbar__mobile__icon");
let sidebar = document.querySelector(".sidebar");
let sidebarOverlay = document.querySelector(".sidebar__overlay");
let orderOnlineButton1 = document.querySelector(".order__online__button__1")

function openSidebar() {
    sidebar.classList.add("sidebar--isopen");
    sidebarOverlay.classList.add("sidebar--isopen");

    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar.classList.remove("sidebar--isopen");
    sidebarOverlay.classList.remove("sidebar--isopen");

    document.body.style.overflow = "";
}

menuButton.addEventListener("click", () => {
    if (sidebar.classList.contains("sidebar--isopen")) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

sidebarOverlay.addEventListener("click", closeSidebar);

orderOnlineButton1.addEventListener('click', () => {
    window.open('https://wa.me/+918085679315')
})