const titleInput = document.querySelector('#titleInput');
let estadoSecreto = 0;

titleInput.addEventListener('keydown', (e) =>
{
    const keyPressed = e.key.toLowerCase();

    'secreto'[estadoSecreto] == keyPressed ? estadoSecreto++ : estadoSecreto = 0;
    
    if(estadoSecreto > 6)
    {
        estadoSecreto = 0;
        alert('SECRETO MÁGICO');
    } 
})