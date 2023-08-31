// Função para exibir ou fechar o overlay com todos os botões de filtro do cartão
function showOrCloseFilter(idFilter) {
    let overlaySelected = document.getElementById(idFilter);
    let body = document.body;
    
    if(overlaySelected){
        // Verificar se modal está aberto ou não
        if(!overlaySelected.classList.contains("display_none")) {
            overlaySelected.classList.add("display_none");
            overlaySelected.setAttribute('aria-hidden', "true");
            overlaySelected.setAttribute('aria-disabled', "true");
            body.setAttribute('aria-hidden', "false");
            body.setAttribute('aria-disabled', "false");
        }else {
            overlaySelected.classList.remove("display_none");
            overlaySelected.setAttribute('aria-hidden', "false");
            overlaySelected.setAttribute('aria-disabled', "false");
            overlaySelected.setAttribute('tabindex', '0');
            overlaySelected.focus();
            body.setAttribute('aria-hidden', "true");
            body.setAttribute('aria-disabled', "true");
            body.setAttribute('tabindex', '-1');
        }

        // Uso de teclado esc para fechar modal
        document.onkeydown = function(event) {
            event = event || window.event;
            if (event.code == "Escape" || event.code == "Enter") {
                if(!overlaySelected.classList.contains("display_none"))
                showOrCloseFilter(idFilter);
            }
        }

        // Clicar no outline para fechar modal
        document.getElementById('overlay-filter').onclick = function(event) {
            if(event.target == document.getElementById('overlay-filter')){
                showOrCloseFilter(idFilter);
            }
        }
    }
    
}