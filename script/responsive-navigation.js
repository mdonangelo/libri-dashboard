// Menu hamburguer no mobile
let hamburguerMenu = document.querySelector('.hamburguer-menu');
let closeMenu = document.querySelector('.close-menu');
let navContainer = document.querySelector('.nav-container');

// Botões para abrir e fechar menu
hamburguerMenu.addEventListener("click", (e) => {toggleResponsiveMenu(e)});
closeMenu.addEventListener("click", (e) => {toggleResponsiveMenu(e)});

// Fechar menu se usuário clicar fora do menu
navContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("nav-container")){
        toggleResponsiveMenu(e);
    }
    
})

// Função para abrir e fechar menu
function toggleResponsiveMenu(event) {
    event.preventDefault();
    navContainer.classList.toggle('active');
}