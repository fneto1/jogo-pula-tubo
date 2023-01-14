const mario = document.querySelector('.mario') //selecionando a imagem do personagem pela classe
const pipe = document.querySelector('.pipe')

//definindo a função para realizar o pulo
const jump = () => {
    mario.classList.add('jump')
    //mario: variavel definida anteriormente
    //classList.add: adiciona uma nova classe na div. Ex.: <img src="img/mario.gif" class="mario jump">

    //removendo a classe jump para podermos repetir os pulos
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)

    //os 500 é referente ao tempo da animação do pulo
    //ou seja, apos 500 ms o setTimeout irá remover a classe jump
}

//loop para verificar se o personagem encostou no pipe. A cada 10 ms o setinterval irá armazenar a posição do tubo e do personagem

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; //armazenar a posição do tubo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') //armazenar a altura do pulo. o '+' converte o resultado que é uma string em um number

    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 95){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)