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
carros1.pop() // Retorna e removeo Primeiro item da array
carros1.reverse() // Inverte a ordem da array e à retorna.