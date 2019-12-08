const section = document.querySelector('.animais');

// Para duvidas, pesquisar Element na mdn.
// Segue mesmo padrão para widht, clientWidth.

section.clientHeight; // É uma propriedade que retorna height + padding.
section.offsetHeight; // Retorna height + padding + border.
section.scrollHeight; // height total, mesmo dentro de scroll.
section.offsetTop; // Distância entre o topo do elemento e o topo da página.
section.offsetLeft; // Distância entre o canto esquerdo do elemento e o canto esquerdo da pagina.

const listaAnimais = document.querySelector('.animais-lista');
const heightAnimaisLista = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
const primeiroh2 = document.querySelector('h2');
console.log(heightAnimaisLista, animaisTop, primeiroh2.offsetLeft);

const rect = section.getBoundingClientRect(); // Método que retorna um objeto com os valores de widht, height distâncias do elemento e mais.

rect.height; // Retorna height do elemento.
rect.width; // Retorna width do elemento.
rect.top; // distância entre o topo do elemento e o scroll.

console.log(rect.height, rect.width, rect.top)

window.innerWidth; // widht da janela.
window.outerWidth; // soma dev tools também.
window.innerHeight; // height da janela.
window.outerWidth; // soma a barra de endereço.

window.pageYOffset; // distância total do scroll horizontal.
window.pageXOffset; // distância total do scroll vertical.

if(window.innerWidth < 600) {
  //console.log('Tela menor que 600px');
}

//matchMedia() seria mesma coisa que usar media query "No JavaScript" Exemplo:

const small = window.matchMedia('(max-widht: 600px)');
if(small.matches) {
  console.log('Tela menor que 600px, Usuario Mobile') 
}else {
  console.log('Tela Maior que 600px, Usuario Desktop')
} 