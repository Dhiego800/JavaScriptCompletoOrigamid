// Criando objeto

var pessoa = {
  nome: 'Diego',
  idade: 23,
  profissao: 'Front-End Developer',
  possuiFaculdade: true,
}
console.log(pessoa); console.log(pessoa.idade);

// Criando Método

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
     return this.lados * lado;
  },
}

console.log(quadrado.lados);
console.log(quadrado.area(9));
console.log(quadrado.perimetro(3));