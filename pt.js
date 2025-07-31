// Reage ao teclado (PC)
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

// Reage ao clique ou toque nas teclas (PC e celular)
document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener('click', () => {
        const keyName = key.getAttribute('data-key');
        playSound(keyName);
    });

    key.addEventListener('touchstart', () => {
        const keyName = key.getAttribute('data-key');
        playSound(keyName);
    });
});

// Botão de tocar composição
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

// Função que toca som e acende a tecla
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

// Tocar a composição automática
function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}
