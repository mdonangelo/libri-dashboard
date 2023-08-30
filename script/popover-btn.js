// Script de popover
let popoverContainer = document.getElementsByClassName('popover-container');

for(let numberPopover = 0; numberPopover < popoverContainer.length; numberPopover++) {
    let popoverButton = popoverContainer[numberPopover].querySelector('.popover-btn');
    let popoverText = popoverContainer[numberPopover].querySelector('.popover-message');

    popoverButton.addEventListener("mouseover", (e) => {
        e.preventDefault();
        popoverText.classList.toggle('active');
    })

    popoverButton.addEventListener("mouseout", (e) => {
        e.preventDefault();
        popoverText.classList.toggle('active');
    })
}