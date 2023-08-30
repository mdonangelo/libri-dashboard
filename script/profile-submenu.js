// Mostrar menus internos ao menu de perfil
let profileButton = document.querySelector('.profile-nav')
let profileMenu = document.querySelector('.menu-popup-container');
let popupContainer = profileMenu.querySelector('.popup-container');

profileButton.addEventListener("click", (e) => {
    e.preventDefault();
    popupContainer.classList.toggle('active');
    profileButton.classList.toggle('pressed')
});