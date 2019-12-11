const img = document.querySelector('img');
/*addEventListenner adiciona escutator de evento, 1º parametro tipo de evento click, load etc, 
2º parametro function callback 3º parametro opicional*/

function callback(event) {
  const currentTarget = event.currentTarget; // This
  const target = event.target; // Onde o click ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}
img.addEventListener('click', callback);
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();

  console.log(this);
  console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

/*
h1.addEventListener('click', handleEvent); // adiciona evento de click
h1.addEventListener('mouseenter', handleEvent); // mouseenter ativa função cada vez que o mause passa encima do elemento selecionado.
h1.addEventListener('mousemove', handleEvent); // mousemove ativa função a cada micromovimento do mause encima do elemento


window.addEventListener('scroll', handleEvent); // dispara função a cada scroll
window.addEventListener('resize', handleEvent); // ativa função cada vez que o tamanho da janela do navegador é redimencionado.
window.addEventListener('keydown', handleEvent); // ativa função cada vez que uma tecla é acionada.


function handleKeyboard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen');
  }
  console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard);
*/

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target);
}

imgs.forEach(img => {
  img.addEventListener('click', handleImg);
});