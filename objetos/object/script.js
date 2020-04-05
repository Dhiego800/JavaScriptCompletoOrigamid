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
console.log(moto2);