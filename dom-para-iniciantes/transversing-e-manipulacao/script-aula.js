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

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

//animais.appendChild(titulo); // coloque como útimo filho. (deve ser passado entre ()).
//contato.insertBefore(animais, mapa) // Insere um Before, Argumentos (Elemento a ser movido, Filho do elemento selecionado)
//contato.removeChild(titulo) // Remove Filho
//contato.replaceChild(lista, titulo) // Substitui elemento.

const novoH1 = document.createElement('h1'); // Criando elemento
novoH1.innerText = 'New title'; // Inserindo texto no elemento
novoH1.classList.add('new-title'); // adicionando uma classe ao elemento

mapa.appendChild(novoH1); //Colocando como filho o elemento recém criado.



const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);