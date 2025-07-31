let currentColor = 'black';
let canDraw = false;

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

let mouseX = 0;
let mouseY = 0;

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', () => {
        // Remove classe ativa de todas
        document.querySelector('.color.active').classList.remove('active');
        // Adiciona na cor clicada
        item.classList.add('active');
        // Pega a cor
        currentColor = item.getAttribute('data-color');
    });
});

screen.addEventListener('mousedown', (e) => {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
});

screen.addEventListener('mousemove', (e) => {
    if (canDraw) {
        draw(e.pageX - screen.offsetLeft, e.pageY - screen.offsetTop);
    }
});

screen.addEventListener('mouseup', () => {
    canDraw = false;
});

function draw(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = x;
    mouseY = y;
}

document.querySelector('.clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, screen.width, screen.height);
});
