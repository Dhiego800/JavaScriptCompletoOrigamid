// Criando objeto com dados pessoais e retornando nome complelto

var dadosPessoais = {
  nome: 'Diego',
  sobrenome: 'Morais',
  idade: 23,
  fazFaculdade: true,
  repetente: false,

  nomeCompleto(nome, sobrenome) {
    return this.nome + ' ' + this.sobrenome;
  }
}
console.log(dadosPessoais.nomeCompleto())
//trocando valor da propriedade.
var carro = {
  preco: 32000,
  portas: 4,
  marca: 'VW',
}
carro.preco = 28000;
console.log(carro.preco);

/* Criando objeto de um cachorro que represente um labrador,
preto, com 10 anos, que late ao ver um homem */

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Homem passando, cachorro Latindo'
    }else {
      return 'Mulher passando, cachorro quieto';
    }
  }
}
console.log(cachorro.latir('homem'));
console.log(cachorro.latir('mulher'));