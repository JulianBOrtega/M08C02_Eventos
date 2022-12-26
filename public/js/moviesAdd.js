const title = document.querySelector('#colorThingy');

function randomRgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function changeColor()
{
    title.style.color = randomRgba();
}