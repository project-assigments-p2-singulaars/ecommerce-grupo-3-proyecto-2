let showMenu = document.getElementById('sidebar-icon');
let menuMobile = document.getElementById('menu-mobile');

showMenu.addEventListener('click', ()=>{
    menuMobile.classList.toggle('show');
});