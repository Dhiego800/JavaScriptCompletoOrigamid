function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'Abraçou'
    } // metodo "abracar" se for passado diretamente na função construtora, será instanciado sempre que criamos um novo objeto.
    this.andar = function() {
        return 'andou pelo objeto'
    } // Se chamamoro metodo andar(), que também existe no prototype criado, será executado o metodo que está no objeto
    //pois a ordem de leitura é primeiro a do objeto e dps do prototype.
}

/*Metodos prototype é unico, ou seja é criado uma vez só.
metodo criado no protype, 
*/
Pessoa.prototype.andar = function() {
    return 'Pessoa andou'
}

Pessoa.prototype.nadar = function() {
    return 'Pessoa nadou'
}


const dhiego = new Pessoa('Dhiiego', 23);

// console.log(Pessoa.prototype); // Retorna objeto
// console.log(dhiego.prototype); // Retorna undefined

/* O novo objeto acessa os métodos e propriedades do protótipo
através da propriedade __proto__. É papel da engine fazer essa busca,
não devemos falaar com __proto__diretamente. */

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

const listaArray = Array.prototype.slice.call(lista); // transforma nodelist em array
const listaArray2 = Array.from(lista); // cria array

const objGetOwnProperty = Object.getOwnPropertyNames(Array); // getOwnPropertyNames Pegue as proprias propriedades
console.log(objGetOwnProperty);

const Carro = {
    marca: 'Ford',
    preco: 20000,
    acelerar() {
        return true;
    }
}
Carro // Object
Carro.marca // String
Carro.acelerar // function
Carro.acelerar() //Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) //String

console.log(Carro.preco.constructor.name); // constructor.name monsta o nome do valor que esta sendo retornado