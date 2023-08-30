// Script para abrir dropdown de botões pequenos
let smallDropdown = document.getElementsByClassName('dropdown-container');
        
for(let numberDropDown = 0; numberDropDown < smallDropdown.length; numberDropDown++) {
    let dropdownButton = smallDropdown[numberDropDown].querySelector('.dropdown-btn');
    let navDropdown = smallDropdown[numberDropDown].querySelector('.nav-btn');

    // Toggle de classes
    dropdownButton.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownButton.classList.toggle('pressed')
        navDropdown.classList.toggle('active');
    })
}