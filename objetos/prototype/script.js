/*
1- Crie uma função construtora de pessoas, deve conter nome, sobrenome, idade
2-Crie um método no protótipo que retorne o nome completo da pessoa
3- Liste os metódos acessados por dados criados com NodeList, HTMLCollection, document
4- Liste os construtores dos dados abaixo;
5- Qual o construtor do dado abaixo:
*/

//1-

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

//2
Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}
const diego = new Pessoa('Diego', 'Morais', 23);

//3
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

//4
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // function
li.innerText; // String
li.value; // number
li.hidden // Boolean
li.offsetLeft; // number
li.click(); // undefined 

//5

li.hidden.constructor.name; // String;