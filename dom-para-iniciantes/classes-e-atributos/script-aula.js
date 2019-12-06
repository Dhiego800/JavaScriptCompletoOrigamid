/* 
menu.className; //String retorna nome da classe. é uma arrayLike portanto podemos pegar exatamente a posição que queremos usando [].
menu.classList; // Lista de classes
menu.classList.add('ativo'); // Adiciona class ativo
menu.classList.add('ativo', 'mobile'); // Adiciona duas classes
menu.classList.remove('ativo'); // Remove uma classe.
menu.classList.toggle('ativo') // Adiciona ou remove a classe.
menu.classList.contains('ativo'); // verifica se contém uma classe, true ou false.
menu.classList. replace('ativo', 'inativo');  // Substitui classe. no Ex: ativo por inativo.
*/

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'ativao', 'vivao', 'zika', 'azul', 'nois', 'pesadao', 'vidaloka', 'ehIsso');

menu.classList.remove('vivao', 'zika');
menu.classList.toggle('vivao', 'zika');

if(menu.classList.contains('vivao')) {
  // console.log('tem a classe vivao');
}

menu.className = 'ClasseNova'; // Podemos reescrever novas classes. ou
menu.classList += 'ClasseNovaaa'; // podemos usar uma sintaxe mais simples += (Seria o mesmo que menu.classList = menu.classList + 'string'; )

// console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes, animais.attributes[0]); // array like, mas se parece com obj. passando[0] ou no caso do data passando['data-texto="test"'],  acesso primeiro atributo do elemento seguindo a ordem que foi passado EX: ID, Data, Class.


const img = document.querySelector('img');

//Dica get (pega), set (setar).

img.getAttribute('src') // Retorna o valor do src, ou seja caminho da imagem.
img.setAttribute('alt', 'Texto qualquer') // Seta cria/atualiza um atributo para o elemento, no exemplo alt="Textp qualquer" na img.
img.hasAttribute('id'); // Verifica se contém o atributo ID no elemento.
// img.removeAttribute('alt'); // Remove um atributo, no exemplo o alt.

img.hasAttributes(); // retorna valor booleano, true/false se tem algum atributo.

//Propriedade Read Only (Apenas leitura), não permite modificação.
animais.attributes = 'class="ativo"'; //Não funciona, read-only.