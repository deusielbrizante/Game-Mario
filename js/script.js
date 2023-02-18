const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = function(){

    mario.classList.add('jump');

    setTimeout(function(){

        mario.classList.remove('jump');

    }, 500)

}

const loop = setInterval(function(){

    const pipePosition = +window.getComputedStyle(pipe).left.replace('px', '');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 90){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${pipePosition}px`;

        mario.src="./img/game-over.png";
        mario.style.width = '85px'
        mario.style.marginLeft = '50px'
        mario.style.marginBottom = '0px'
        mario.style.padding = '0px'

        clearInterval(loop);

    }

},10);

document.addEventListener('keydown', jump);