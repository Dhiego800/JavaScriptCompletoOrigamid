//Operador de atribuição.
var numero = 40;
numero += 10;
//Seria mesma coisa que numero = numero + 10.
console.log(numero);

var idade = 23;
var naoPossuiDiabetes = true;
var podeBeber;

// primeiro valor sempre é True : False
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

//Sintaxe do if() sem {}, OBS: sintaxe só é valida se o if retorna apenas 1 codigo.
var possuiFaculdade = true

if(possuiFaculdade) console.log('Sintaxe1 (Inline) - Sim possui Faculdade')

if(possuiFaculdade)
  console.log('Sintaxe2 (Semelhante ao padrão) - Sim possui faculdade');