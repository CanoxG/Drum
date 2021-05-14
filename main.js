// for playing audio

window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // diger tuslarda function
    // calismasin diye koyduk.
    audio.curentTime = 0;
    audio.play();
    key.classList.add('playing'); // css e ekledigimiz efekti cagiriyor.
}

// for the display

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('playing');
    console.log(this);
} 