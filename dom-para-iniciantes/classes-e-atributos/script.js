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
console.log(animais.attributes);