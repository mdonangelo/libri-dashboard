// Função para exibir ou fechar o overlay com todos os botões de filtro do cartão
function showOrCloseFilter() {
    let overlayDoFiltro = document.getElementById("overlay-filter");
    let body = document.body;
    
    // Verificar se modal está aberto ou não
    if(!overlayDoFiltro.classList.contains("display_none")) {
        overlayDoFiltro.classList.add("display_none");
        overlayDoFiltro.setAttribute('aria-hidden', "true");
        overlayDoFiltro.setAttribute('aria-disabled', "true");
        body.setAttribute('aria-hidden', "false");
        body.setAttribute('aria-disabled', "false");
    }else {
        overlayDoFiltro.classList.remove("display_none");
        overlayDoFiltro.setAttribute('aria-hidden', "false");
        overlayDoFiltro.setAttribute('aria-disabled', "false");
        overlayDoFiltro.setAttribute('tabindex', '0');
        overlayDoFiltro.focus();
        body.setAttribute('aria-hidden', "true");
        body.setAttribute('aria-disabled', "true");
        body.setAttribute('tabindex', '-1');
    }

    // Uso de teclado esc para fechar modal
    document.onkeydown = function(event) {
        event = event || window.event;
        if (event.code == "Escape" || event.code == "Enter") {
            if(!overlayDoFiltro.classList.contains("display_none"))
            showOrCloseFilter();
        }
    }

    // Clicar no outline para fechar modal
    document.getElementById('overlay-filter').onclick = function(event) {
        if(event.target == document.getElementById('overlay-filter')){
            showOrCloseFilter();
        }
    }
}