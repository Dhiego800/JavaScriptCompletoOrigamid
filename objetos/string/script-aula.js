const comida = 'Pizza'; // Retorna string normal
const liquido = new String('Água'); // Retorna objeto do tipo constructor String

const frase = 'A melhor comida';

console.log(
    comida.length,
    frase.length,
    comida[0],
    frase[0],
    frase[frase.length -1],
    );

// Metodo cartAt

const linguagem = 'JavaScript';

linguagem.charAt(0) // j
linguagem.charAt(2) // v
linguagem.charAt(linguagem.length - 1); // t

const frase2 = 'A melhor linguagem é ';
const linnguagem = 'JavaScript';

const fraseFinal = frase2 + linguagem; // concatena 
const fraseFinalConcat = frase2.concat(linguagem, '!!!'); // contatena usando metodo concat().

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

/* includes procura se existe dentro da string determinada string */
listaFrutas.includes(fruta); // Retorna true.
fruta.includes(listaFrutas); // False.

fruta.endsWith('nana'); //Retorna true endsWith('nana') - Termina com: 
fruta.startsWith('Ba'); //Retorna true startsWith('Ba') - Começa com: 
fruta.startsWith('na'); // Retorna false, pois banana não começa com: na. 

/*
    slice(passamos valor inicial[startsWith], passamos valor final[endsWith]);

    se for passado apenas um valor no slice() - ele corta somente os primeiros caracteres, se o valor
    for passado como por exemplo (0, -5) ele irá corta os utimos 5 caracteres.
*/

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // Cliente
transacao2.slice(-4); // ente, se o valor for passado direto negativo, ele irá retornar os 4ultimos caracter conforme exemplo
transacao3.slice(3, 6); //ósi

/*
    substring() funciona da mesma forma que o slice, porém não aceita valores negativos.
*/

linguagem.substring(3,5); //aS 
linguagem.substring(0,4); // Java
linguagem.substring(4); //Script
linguagem.substring(-3);// Retorna a string completa, pois não aceita valores negativos

/*

 */

 const instrumento = 'Guitarra';

 instrumento.indexOf('r'); //Retorna a posição que o R se encontra no exemplo está na posição 5 
 instrumento.lastIndexOf('r'); // retornaa utima string no exemplo utimo R que esá na posicao 6
 instrumento.indexOf('ta'); // pode ser passado mais de uma string no exemplo se encontra na posição 3

 /*
    padStart(number, string) e padEnd(number, string) se for possivel aumentar a string
    ele irá aumentar o numero de caracter de acordo com o que foi passado, e irá usar
    a string que foi passada como segundo argumento.
 */

 const listaPrecos = ['RS 99', 'R$ 199', 'R$ 12000'];

 listaPrecos.forEach((preco) => {
     console.log(preco.padStart(10, '. '));
})

//Aula 2

const frasee = 'Ta';

frasee.repeat(5); // repete a string pelo valor que for passado, no exemplo 5x.

/*
    replace(regexp|substring, newstring|function) basicamente troca uma parte de uma string por outra,
    se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar
*/
let listaItens = 'Camisas Bonés Calças Berbudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco.replace(',', '.');


/*split('') passamos um padrão, "quebra", sempre o que está dentro do split é removido e de acordo com padrão retorna um array */
const arrayLista = listaItens.split(', ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');

/*join() pega cada item de um array junta com o que for passado(''), e retorna uma string. */
const novoHtml = htmlArray.join('section');

const sexo1 = 'Feminino'; 
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';


/*toLocaleLowerCase() Retorna string com letra minuscula, 
toUpperCase() retorna string com letra maiuscula */

const valor = '  R$ 23.00  ';
valor.trim(); //Remove todos os espaços.
valor.trimStart(); // Remove espaço da esquerda para direita.
valor.trimEnd(); // Remove espaço da direita para esquerda.
