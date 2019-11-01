// retorna se o valor é true ou false.
function isTruthy (dado) {
  
  return !!dado;
} 
var testandoIstruthy = isTruthy('Carlos');
console.log(testandoIstruthy);

//Retorna resultado do perimetro quadrado a soma de todos os lados.
function perimetroQuadrado(lado) {
  
  return lado * 3;
}
console.log(perimetroQuadrado(4));

//Retorna Nome completo, obs: usando template String.
function nomeCompleto(nome, sobrenome) {
  
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Diego', 'Morais'));

//Função para verificar se um nomero é PAR.

function isEven(number) {
  var modulo = number % 2;
  if(modulo === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));
console.log(isEven(3));

// Funcção que retorna tipo de dado, que contém nela.

function tipoDeDado (dado){
  return typeof dado;
}

console.log(tipoDeDado(23));
console.log(tipoDeDado(null));
console.log(tipoDeDado('string'));
console.log(tipoDeDado(undefined));
console.log(tipoDeDado(function(){console.log()}));

//Criando função que exibe nome completo no console toda vez que o "evento scroll" ocorrer.

addEventListener("scroll", function(){
  console.log(nomeCompleto('Diego', 'Morais'));
})

//Corrija o erro abaixo 

// function previsoVisitar(paisesVisitados, ) {
//   var totalPaises = 193;
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
// }

// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }

// precisoVisitar(20);
// jaVisitei(20);

//Função correta!!!

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(10));
console.log(jaVisitei(20));