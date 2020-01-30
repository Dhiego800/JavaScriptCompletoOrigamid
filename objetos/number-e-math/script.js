// NUMBER

console.log(Number.isNaN(NaN)); // verifica se é NaN se for retorna true
//console.log(4 + 5(NaN)) // retorna false.

console.log(Number.isInteger(20)); // Verifica se é numero inteiro. retorna true, caso numero sejá "quebrado" retorna false ex:20.54547.
console.log(Number.isInteger(20.551)) //retorna false.

console.log(parseFloat('323234.22')) //Transforma String em numero. Retorna um numero, se for passado "," ele ignora tudo que tiver após a virgula e retorna numero.
console.log(parseInt(23.5)) // Retorna 23, corta valores decimais.

const preco = 2.99;
preco.toFixed(); //Retorna 3 arredonda o valor se não for passado nada nos ()

const carro = 1000.455;
carro.toFixed(2) // 1000.46 se for passado valor nós() limita o numero de casas decimais

const preco2 = 1499.49
preco2.toFixed() //1499 Arredonda valor

const preco3 = 3.99;
preco.toString(10); // Transforma numero em string

/*
    toLocaleString() Transforma numero em uma moeda.
    recebe 2 parametros, 1º linguagem, 2º opções
*/
let valor = 59.49;

let valorUs = valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
console.log(valorUs)

let valorBr = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valorBr)

// MATH'S 

Math.PI // Retorna 3.141592653589793;

Math.abs(-5.5); // 5.5 .ABS - Retorna valor absoluto
Math.ceil(4.8334); // 5 ceil - Arrendonda para um valor inteiro, sempre um valor MAIOR
Math.ceil(4.3); // 4 ceil - Arredonda para valor superior
Math.floor(4.8334); //  floor Arredonda sempre para valor menor.
Math.floor(4.3); // floor Arredonda para valor menor
Math.round(4.8334); // round Round simples mente arredonda o valor.
Math.round(4.3);

Math.max(5,3,10,42,2) // Pega lista de argumento que foi passado e retorna o maximo(maior valor)
Math.min(5,3,10,42,2) // Retorna o menor valor(minimo).

const numeroAleatorio = Math.random() * 200;
console.log(numeroAleatorio);

Math.random();

Math.floor(Math.random() * 100) // Retorna numero aleatorio de  a 100
Math.floor(Math.random() * 500) 

Math.floor(Math.random() * (72 - 32 + 1)) + 32; // Retorna valor aleatorio entre os valores 72 e 32
//Math.floor(Math.random() * (max - min + 1)) + min;