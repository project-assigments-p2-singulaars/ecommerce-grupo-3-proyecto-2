let showMenu = document.getElementById('sidebar-icon');
let menuMobile = document.getElementById('menu-mobile');
let closeMenu = document.getElementById('close-menu');

showMenu.addEventListener('click', ()=>{
    menuMobile.style.display= 'block';
    
});

closeMenu.addEventListener('click', ()=>{
    menuMobile.style.display = 'none';
});