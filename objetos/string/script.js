/* Utilizaando o forEach no array abaixo, some os,
valores de taxa e os valores de recebimento */

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    }
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item)=> {
    const numeroLimpo =  +item.valor.replace('R$ ', ''); // Removendo R$ .

    //console.log(+numeroLimpo); // + na frente de uma string que é só numero, transforma string em number.

    if(item.descricao.slice(0, 4) === 'Taxa'){ // verificando se 'Taxa' existe.
        taxaTotal += numeroLimpo;        
    } else {
        recebimentoTotal += numeroLimpo;
    }
})
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transporteArray = transportes.split(';'); // transformando string em array.

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;
html.split('span').join('a');

//Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1], frase.slice(-1)); // Retornando último caracter da string.

// Retorne total de taxas
const transacoes2 = ['Taxa do banco', '  TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item)=>{
    item = item.toLocaleLowerCase();
    item = item.trim();
    item = item.slice(0, 4);

    if(item === 'taxa') taxasTotal++;
});

console.log(taxasTotal);