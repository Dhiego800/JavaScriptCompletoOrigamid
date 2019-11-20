// Exercicio VERIFICANDO IDADE (MAIOR, IGUAL, MENOR)

var minhaIdade = 18;
var idadePrimo = 7;

if(minhaIdade > idadePrimo) {
  console.log ('É maior');
} else if (minhaIdade === idadePrimo) {
  console.log('É igual')
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variaveis são True ou false

var nome = 'Diego';
var idade = 22;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com a china (valor em milhoes)

var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasi tem mais habitantes');  
} else {
  console.log('Brasi tem menos habitantes');  
}

// O que ira aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');  
} else {
  console.log('Falso');
} 
// Resposta console FALSO

// O que irá aparecer no console?

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
