// document.getElementById Seleciona elemento por ID, caso elemento não existir retorna null
const animais = document.getElementById('animais');
console.log(animais);

/* getElementsByClassName retorna todos elementos que contém a classe desejada.
pode ser passada mais de uma classe, porém só será selecionado os elementos que
tiverem as 2 ou mais classes desejadas.*/

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
console.log(gridSection[2]); // Retorna a grid-section na posição 2.

/* getElementsByTagName Seleciona todas as tags desejadas, presente no site. no Ex: uma UL, mas poderia
ser a, p, div, img etc, retorna algo parecido com array */

const ul = document.getElementsByTagName('ul');

const primeiraUl = document.querySelector('ul');
const primeiraLi = document.querySelector('li');

const linkInterno = document.querySelector('[href^="#"]'); // puxa todos elementos que começa com #
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]); // Retorna uma nodeList com todas imagens que estã dentro da classe animais,

/* 
Diferença entre HTMLCollection vs NodeList 

Primeira diferença está entre metodos e propriedades, segunda aovivo e não aovivo.

HTMLCollection - Se atualiza.
Nodelist - se não se atualiza.

HTMLCollection <<<<<<<<<<<<<<<
 Propriedades: HTMLCollection.length 

 Métodos: HTMLCollection.item() > Retorna um nó especificado por index da lista. o primeiro index da lista é 0. Retorna null se index não existir na lista.
 
 HTMLCollection.namedItem() > Retorna o nó especificado pelo ID ou, caso não tenha ID, o item cuja propriedade name seja igual à pesquisa. Pesquisa por name só é feita em último caso, somente em HTML, e somente se os elementos referenciados suportarem o atributo name. Retorna null se nenhum nó corresponder ao nome pesquisado.
 
 NodeList <<<<<<<<<<<<<<<

NodeList.length
  A quantidade de nodos na NodeList.

  Métodos: NodeList.item()
Retorna um item da lista pelo índice, ou null se o índice for inválido; pode ser usado como uma alternativa a nodeList[idx] (que retorna  undefined quando idx é inválido).

NodeList.entries()
Retorna um iterador que permite passar por todos os pares chave/valor contidos no objeto.

NodeList.forEach()
Executa uma função recebida uma vez para cada elemento no NodeList.

NodeList.keys()
Retorna um iterador que permite passar por todas as chaves dos pares chave/valor contidos no objeto.

NodeList.values()
Retorna um iterador que permite passar por todos os valores dos pares chave/valor contidos no objeto.

*/

const gridSectionHTML = document.getElementsByClassName('grid-section'); // OBS: dispensa uso de .
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// Retorna itens diferentes pois, uma se atualiza e a outra não.
console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

/* 
>>>>> Array-Like <<<<<<

  HTMLCollection & NodeList Parecem uma array, mas não são.

*/

/*forEach() recebe uma função como argumento. 
e essa função recebe 2 argumentos 1º ITEM 2º INDEX - Posição. */

gridSectionNode.forEach(function(item, index) {
  console.log(index); // Retorna posição do elemento (INDEX)
  console.log(item); // Retorna o item em si, no exemplo as section's.
});

// Array.from() transforma uma HTMLCollection ou NodeList em um ARRAY.
const arrayGrid = Array.from(gridSectionHTML);