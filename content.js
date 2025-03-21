document.addEventListener('keydown', function(event) {
    if (event.code === 'Space'||event.code === 'KeyS') {
        event.preventDefault();
        const buttonPlay = document.querySelector('.play.active');
        buttonPlay.click();
        return
    }
    if (event.code === 'ArrowLeft'||event.code === 'KeyA') {
        event.preventDefault();
        const button = document.querySelector('.jp-rewind');
        button.click();
        return
    }
    if (event.code === 'ArrowRight'||event.code === 'KeyD') {
        event.preventDefault();
        const button = document.querySelector('.jp-forward');
        button.click();
        return
    }
    if (event.code === 'KeyC') {
        event.preventDefault();
        const button = document.querySelector('.transcript__caption.js-closed-caption');
        button.click();
        return
    }
});