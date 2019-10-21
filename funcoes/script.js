function areaQuadrado(lado) {
 return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(pi());

function imc (peso, altura) {
  var imc = peso / (altura * altura)
  return imc;
}
console.log(imc(20, 1));

function corFavorita (cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu'
  } else if(cor === 'verde'){
    return 'Você gosta de mato';
  }else {
    return 'Você não gosta de nada';
  }
}
corFavorita();

addEventListener('click', function() {
  console.log('Click');
})