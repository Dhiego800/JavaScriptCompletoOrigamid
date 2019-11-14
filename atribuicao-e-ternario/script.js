//Somando 500 ao valor de scroll abaixo. atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

/* Atribuindo true para varivavel darCredito, caso o
cliente possua carro e casa, e false caso contrariop */

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

//Alternativa 1 exercicio execudado 
if(possuiCarro && possuiCasa === true) {
  var darCredito = true;
}else{
  var darCredito = false;
}
console.log(darCredito);

//alternativa 2 

darCredito = (possuiCasa && possuiCarro) ? 'Credito consedido' : 'credito negado!';
console.log(darCredito);