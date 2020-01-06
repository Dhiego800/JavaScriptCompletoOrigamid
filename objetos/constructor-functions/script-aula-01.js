/*
Funções contrutoras são responsáveis por contruir novos objetos, sempre que chamamos a mesma.
Criando uma função construtora (Padrão para função construtora, sempre nome da função inicia com LETRA MAIUSCULA)
This se referencia a ele mesmo no escopo atual. no exemplo a baixo this seria o mesmo que CARRO

Palavra chave NEW Possui 5 etapas:

1ª Cria novo objeto vazio, 
2º Define um protótipo,
3º Aponta a variável this para o objeto (No exemplo honda, fiat),
4º Executa a função, substituindo this pelo objeto (tudo feito por debaixo dos panos),
5º No final retorna o novo objeto

*/
function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

/* Entendendo conceito
    const honda = new Carro(); //Clone1 Carro honda
    honda.marca = 'honda' // atribuindo nova marca ao objeto clonado da constructor function

    const fiat = new Carro(); //Clone2 Carro Fiat
    fiat.marca = 'fiat';

*/


 // Criando novo objeto e atribuindo valores de forma mais simples

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 6000);

function Carro2(marca, precoInicial) {

    const taxa = 1.2; // Não temos acesso a taxa pois ela não esta referenciada no this
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;

}

const mazda = new Carro2('Mazda', 5000);