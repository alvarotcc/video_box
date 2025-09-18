// Seleciona todos os wrappers de vídeo
const videoWrappers = document.querySelectorAll('.video-wrapper');

videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const button = wrapper.querySelector('.play-overlay');

    // Quando clicar no botão
    button.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            button.style.display = 'none'; // esconde o overlay quando o vídeo estiver tocando
        } else {
            video.pause();
            button.style.display = 'block'; // mostra novamente se pausar
        }
    });

    // Se o vídeo terminar, mostra o overlay novamente
    video.addEventListener('ended', () => {
        button.style.display = 'block';
    });
});
