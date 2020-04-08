/*Todo objeto é criado com contructor Object e 
por isso herda as propriedades e 
métodos do seu prototype*/

//Criando obj ambos funcionam da mesma forma.
const carroEx = {
	marca: 'Ford',
	ano: 2018,
}

const pessoaEx = new Object ({
	nome: 'Diego',
	idade: 23,
})

//Criando obj base (prototype) 
const carro = {
	rodas: 4,
	init(marca) {
		this.marca = marca;
		return this
	},
	acelerar() {
		return `${this.marca} acelerou as ${this.rodas} rodas`;
	},
	buzinar() {
		return this.marca + ' buzinou';
	}
}

// Honda e ferrari herdão métodos do obj carro.
const honda = Object.create(carro).init('Honda');
const ferrari = Object.create(carro).init('Ferrari');
//console.log(ferrari.acelerar(), honda.acelerar());

/* Object.assign()
	Object.assign(objAlvo, obj1, obj1) Adiciona ao alvo
	as propriedades e métodos enumeráveis dos demais objs.
	O assign irá modificar o objeto alvo.
*/

const funcaoAutomovel = {
	acelerar() {
		return 'acelerou';
	},
	buzinar() {
		return 'Buzinou';
	}
};

const moto = {
	rodas: 2,
	capacete: true,
}

const carro2 = {
	rodas: 4,
	portaMala: true,
};

// carro e moto agora tem os metodos da funcaoAutomovel.
Object.assign(moto, funcaoAutomovel),
Object.assign(carro2, funcaoAutomovel)
//console.log(moto, carro2);

/*Object.defineProperties(alvo, propriedades) adiciona
ao alvo novas propriedades. A diferença aqui é a 
possibilidade de serem definidas características
dessas propriedades*/

const moto2 = {};
Object.defineProperties(moto2, {
	rodas: {
		value: 2,
		configurable: false, // impede deletar e mudança de valor.
		enumerable: true //torna enumerável
	},
	capacete: {
		value: true,
		configurable: true,
		writable: false, // impede mudança de valor.
	},
	velocidade: {
		get() { //pega um valor
			return this._velocidade;
		},
		set(valor){ //atribui um valor
			this._velocidade = 'Velocidade máxima de ' + valor + ' Km/h';
		}
	}
});
moto2.velocidade = 299.8;
//console.log(moto2);

/*Object.getOwnPropertyDescriptors(obj)
Lista todos os métodos e propriedades de um 
objeto, com suas devidas configurações*/

//Lista com métodos e propriedades de array
const listandoArray = Object.getOwnPropertyDescriptors(Array);
//console.log(listandoArray);

// Lista com métodos e pripriedades do propriedades do protótipo de array
const listandoArrayPrototype = Object.getOwnPropertyDescriptors(Array.prototype);
//console.log(listandoArrayPrototype)

//Puxa de uma única propriedade
const pegandoWindowInnerHeight = Object.getOwnPropertyDescriptor(window, 'innerHeight');
//console.log(pegandoWindowInnerHeight);

/* Object.keys(obj) Retorna uma array com as chaves de todas
as propriedades diretas e enumeráveis do objeto.

	Object.value(obj) retorna uma array com os valores do objeto.

	Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
*/

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis.

const carro3 = {
	marca: 'Ford',
	ano: 2020,
};

Object.keys(carro3); // ['marca', 'ano']

Object.values(carro3); // ['Ford', 2018]

Object.entries(carro3) // ["marca", "Ford"], ["ano", 2020]

/*
Object.getOwnPropertyNames(obj) Retorna uma array
com todas as propriedades diretas do objeto.
(Não retorna as do protótipo).
*/

Object.getOwnPropertyNames(Array) // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);// [...'filter', 'map', 'every', 'some', 'reduce',...]

Object.getOwnPropertyNames(carro3) // ['marca', 'ano']

/*
	Object.getPrototypeOf(), retorna o protótipo do objeto.
	Object.is(obj1, obj2) verifica se os objetos são iguais e retorna 
	true ou false.
*/

const frutas = ['Banana', 'Pêra'];
Object.getPrototypeOf(frutas) // retorna o protótipo
Object.is(''); // string

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
Object.is(frutas1, frutas2); // false, pq não são objetos iguais.

/*
	Object.freeze() impede qualquer mudança nas propriedades.
	Object.seal() previni a adicação de novas propriedades e
	impedem que as atuais sejam deletadas.
	Object.preventExtensions() previne a adição de novas propriedades.
*/

const carro4 = {
	marca: 'Vw',
	ano: 2020,
}

Object.freeze(carro4);
Object.seal(carro4);
Object.preventExtensions(carro4);

// Verificações
Object.isFrozen(carro4); //True, Verifica se contém freeze
Object.isSealed(carro4); //true, Verifica se contém seal
Object.isExtensible(carro4); //False, Verifica se contém preventExtensions

/*
	Propriedades e Métodos do Protótipo
	Já que tudo em JS é obj, as propriedades estão disponíveis em todos
	objs criados a partir de funções construtoras. {}.constructor retorna 
	a função construtora do objeto.
*/

const frutas3 = ['Banana', 'Uva'];
frutas3.constructor; //Array

const frase = 'Isso é uma string';
frase.constructor; //string

/*
	{}.hasOwnProperty('prop') e {}.propertyEnumerable('prop')
	Verifica se possui a propriedade e retorna true. A propriedade
	deve ser direta do objeto e não do protótipo. 
	
	O {}.propertyEnumerable('prop') verifica se a propriedade é
	enumerável.
*/

const frutas4 = ['Perâ', 'Maça'];

frutas4.hasOwnProperty('map') //false
Array.hasOwnProperty('map') //false
Array.prototype.hasOwnProperty('map') //true

Array.prototype.propertyIsEnumerable('map') // false
window.propertyIsEnumerable('innerHeight') // true.

/*
	{}.isPrototypeOf(valor) Verifica se é o protótipo do valor passado
*/
Array.isPrototypeOf(frutas); //true

/*
	{}.toString() Retorna o tipo do objeto. O problema é
	toString ser uma função dos protótipos de Array, String e mais.
	Por isso é comum utilizarmos a função direto do 
	Object.prototyé.toString.call(valor).
*/

const frutas5 = ['Melancia', 'Perâ', 'abacate'];
frutas5.toString() // 'Melancia, Perâ, abacate
typeof frutas5 // object
Object.prototype.toString.call(frutas); // [object Array]


const frase2 = 'String qualquer';
frase2.toString(); // 'string qualquer'
typeof frase2; //string
Object.prototype.toString.call(frase2); // [Object String]


const carro5 = {marca: 'Nissan'}
carro5.toString(); //[Object Object]
typeof carro5; // object
Object.prototype.toString.call(carro5); // [Object String]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [Object NodeList]











/*

*/