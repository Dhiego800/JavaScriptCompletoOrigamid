const h1 = document.querySelector('h1');
const AnimaisLista = document.querySelector('.animais-lista');

h1.outerHTML // Trás todo HTML do elemento
h1.innerHTML // retorna HTML interno do elemento EX: selecionamos uma UL irá retorna todas LI dentro da UL.
h1.innerText // Trás contéudo de texto do elemento, sem tags.

//h1.innerHTML = '<h2>Animais Fantásticos h2</h2>' // Adiciona tag dentro do Elemento.
h1.outerHTML = '<h2>Animais Fantásticos h2</h2>' // Substitui o conteúdo.

// Transversing seria navegação pelo DOM.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // Seleciona o pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // Pega elemento acima
lista.nextElementSibling; // Seleciona elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // Primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


/* Element representa um elemento HTML, ou seja uma TAG.
  Node representa um nó, e pode ser um elemento (Element), texto, comentário
  quebra de linha e mais.
*/

//node
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child