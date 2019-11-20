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

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8);

function terceiraIdade(idade) {
  if(typeof idade != 'number') {
    return 'Informe a sua idade';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(90));

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} paises`;
  
}

var profissao = 'Developer Front - End';
function dados() {
  var nome = 'Diego';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
dados();
outrosDados(); // Retorna Erro!

