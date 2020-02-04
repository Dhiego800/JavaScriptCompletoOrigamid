const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}],
function andar(nome) {console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari'; //Substituindo item do array passando novo valor.
carros[3] = 'Toyota'; // Adicionando item no array simplesmente passando indice que não existe no array e atribuindo valor a ele.
carros[20] = 'Nissan'; // Aumenta a array até o indice 21, e atribui valor. OBS: deixa espaços vazios em array a torna mais lenta de ser acessada.

// Método de array

carros.length // Retorna tamanho da array

const li = document.querySelectorAll('li'); // Retorna NodeList

const arrayLi = Array.from(li) // from retorna um array.

const obj = {
    0: 'Dhiego',
    1: 'Dev',
    2: 'Front-end',
    length: 3
}
const objArray = Array.from(obj); // Transformando objeto em array.

console.log(
    Array.isArray(objArray)// Array.isArray() verificando se é array retorna true ou false.
); 

Array.of(10) // Cria uma array com número 10
Array(20) // Cria array com 20 itens
new Array('test1', 'test2'); // Cria array da mesma forma que Array, passando mais argumentos cada um deles vai como item para o array

const frutas = ['Banana', 'Pêra',['Uva Roxa', 'Uva Verde']]; // Array com 3 itens, sendo o utimo item outra array.

console.log(frutas.length);

const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos1.sort(); // Modifica array e deixa em ordem alfabetica, em casos de number organiza de caracter em caracter.

const idades = [32,21,33,43,1,12,8];
idades.sort();

console.log(instrumentos1);
console.log(idades)

const carros1 = ['Ford', 'Fiat', 'VW'];
carros1.unshift('Honda', 'Kia'); // Adiciona novos itens no inicio da array e retorna com novo tamanho.
console.log(carros1);

carros1.push('Ferrari'); // Adiciona item no final do array. e retorna.
console.log(carros1);

carros1.pop() // Retorna e remove o utimo item da array
carros1.shift() // Retorna e removeo Primeiro item da array
carros1.reverse() // Inverte a ordem da array e à retorna.




//splice(index, remover, item1, item2, ...)

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros2.splice(1, 0, 'Kia', 'Munstang'); // Adiciona items na array apartir do index passado
console.log(carros2);
carros2.splice(1, 2, 'Kia', 'Munstang'); // segundoo parametro seria qts itens vamos remover da array, E os retorna
console.log(carros2);

// .copy(alvo, inicio, final)

const arrayCopy = ['Item1','Item2','Item3','Item4','Item5'];
arrayCopy.copyWithin(0, 0, 0);
console.log(arrayCopy);

//fill(Valor, inicio, final) preeche array com o valor que for passado, primeiro parametro de qual index ele deve partir,
// segundo parametro qual index ele deve parar.

arrayFill = ['Item1','Item2','Item3','Item4','Item5'];
arrayFill.fill('test', 2, 4)
console.log(arrayFill)

//concat() concatena, ou seja junta as array's e a retorna.

const transporte1 = ['Barco', 'Avião']
const transporte2 = ['Carro', 'Moto']
const transporteT = transporte1.concat(transporte2);
console.log(transporteT);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); //True, verifica se existe valor na array. 
linguagens.includes('ruby'); // Retorna false, pois não existe na array.
linguagens.indexOf('python'); // Retorna o index(posisão) do item na array.
linguagens.indexOf('js'); // Retorna a posição do primeiro valor que ele encontrar dentro da array.
linguagens.lastIndexOf('js'); // retorna a posição do valor passado na array, de trás para frente.

// join() Junta array e transforma em string.

let htmlString = '<h2>Titulo Principal</h2>';
htmlString = htmlString.split('h2'); // Relembrando "corta" sempre que aparece h2.
htmlString = htmlString.join('h1');

// slice(inicio, final) percorre array do inicio até o index que for passado.
// Caso não for passado nada, slice retorna um clone da array.

const cloneLinguagens = linguagens.slice();
console.log(
linguagens.slice(3),
linguagens.slice(1, 4))