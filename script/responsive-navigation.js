// Menu hamburguer no mobile
const hamburguerMenu = document.querySelector('.hamburguer-menu');
const closeMenu = document.querySelector('.close-menu');
const mainLayout = document.querySelector('.main-layout');
const navContainer = document.querySelector('.nav-container');
let heightNav = 0;

// Botões para abrir e fechar menu com clique
hamburguerMenu.addEventListener("click", (e) => {toggleResponsiveMenu(e)});
closeMenu.addEventListener("click", (e) => {toggleResponsiveMenu(e)});

// Botões para abrir e fechar menu com espaço
hamburguerMenu.addEventListener('keyup', e => {
    if (e.code === 'Space' && !document.querySelector('.nav-container').classList.contains('active')) {
        toggleResponsiveMenu(e)
    }
});

closeMenu.addEventListener('keyup', e => {
    if (e.code === 'Space' ) {
        toggleResponsiveMenu(e)
    }
});

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
    
    if(document.querySelector('.nav-container').classList.contains('active')){
        // Evitar scroll após abrir menu
        heightNav = document.querySelector('.nav-container').clientHeight;
        mainLayout.style.height = heightNav + "px";
        mainLayout.style.overflow = "hidden";
        window.scrollTo(0, 0);
    }else {
        mainLayout.style.height = "auto";
        mainLayout.style.overflow = "auto";
    }
}