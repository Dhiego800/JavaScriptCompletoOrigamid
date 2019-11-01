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

// ORganizando codigo

Math.PI; // 3.14
Math.random(); //retorna sempre um número aleaório de 0 a 1

var menu = {
  width: 100,
  height: 200,
  backgroundColor: '#fff',
}

var bg = menu.backgroundColor; // acessa valor.

menu.color = 'blue'; // criamos novo valor.

menu.esconder = function() {
  console.log('escondi');
} // criando Metodo.

menu.hasOwnProperty('color') /* true, verifica se possui propriedade e retorna com valor
boolean true False. */

