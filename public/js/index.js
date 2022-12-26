const menu = document.querySelector('#menu');

function toggleMenu()
{
    menu.classList.toggle('menu')
}

menu.addEventListener('mouseleave', () =>
{
    if(menu.classList.contains('menu')) toggleMenu();
})