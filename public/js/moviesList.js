const body = document.body;
let darkTheme = false;

function toggleDarkMode()
{
    if(!darkTheme)
    {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';

        darkTheme = true;
    }
    else
    {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';

        darkTheme = false;
    }
}