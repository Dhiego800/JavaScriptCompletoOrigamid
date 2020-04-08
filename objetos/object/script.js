/* Todo objeto é criado com o contrutor Object e por isso herda
as propriedades e métodos do seu prototype */
const pessoa = new Object({
    nome: 'Diego',
    idade: 23,
});

const carro = {
    rodas: 4,
    init(valor) {
        this.marca = valor;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou'
    }
};

const honda = Object.create(carro).init('Honda');
console.log(honda.acelerar());
