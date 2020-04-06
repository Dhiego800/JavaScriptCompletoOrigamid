/*
	Crie uma função que verifique corretamente o tipo de dado 
*/
function tipoDado(dado) {
	return Object.prototype.toString.call(dado)
}

console.log(tipoDado('String'));

/*
	Crie um obj quadrado com a propriedade 
	lados e torne ela imutável
*/
const quadrado = {}
Object.defineProperties(quadrado, {
	lados: {
		value: 4,
		enumerable: true,
	},
});

console.log(quadrado);

/*
	previna qualquer mudança no obj abaixo
*/
const configuracao = {
	width: 800,
	height: 600,
	background: '#333'
}
Object.freeze(configuracao);

/*
	Liste o nome de todas as
	propriedades do	protótipo de String e Array
*/

const listString = Object.getOwnPropertyNames(String.prototype);
const listArray = Object.getOwnPropertyNames(Array.prototype);
console.log(listString, listArray);