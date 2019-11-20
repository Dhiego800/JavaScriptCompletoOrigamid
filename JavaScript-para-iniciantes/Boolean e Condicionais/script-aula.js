var possuiGraduacao = true;
var possuiDotourado = true;

if(possuiGraduacao) {
  console.log('Possui Graduação (É verdadeiro)');
  
} else if(possuiDotourado) {
  console.log('Possui Dotourado!!!');

} else {
  console.log('Não possui NADA');
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);


var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  
  case 'Amarelo':
    console.log('Olhe para o SOL')
    break;
  
  case 'Verde':
    console.log('Olhe para floresta');
    break;

  default: 
  console.log('Feche os olhos');
}

/* 
IF que retorna FALSE

  if(false)
  if(0)
  if(NaN)
  if(null)
  if(undefined)
  if('') 

IF que retorna TRUE

  if(true)
  if(1)
  if('  ')
  if(-5)
  if({})

IF operador de negação

  if(!true) retorna FALSE
  if(!1) retorna FALSE
  if(!'') retorna TRUE
  if(!undefined) retorna TRUE
  if(!!' ') retorna TRUE
  if(!!'') retorna FALSE


  Operadores de comparação

  10 > 5; TRUE
  5 > 10; FALSE
  20 < 10; FALSE
  10 <= 10; TRUE
  10 >= 11; FALSE

  Operador de comparação

  10 == '10'; TRUE
  10 == 10; TRUE
  10 === '10'; FALSE
  10 === 10; TRUE
  10 != 15; TRUE
  10 != '10'; FALSE 
  10 !== '10'; TRUE

Operadores LOGICOS &&

  true && true; TRUE
  true && false; FALSE
  false && true; FALSE
  'Gato' && 'Cão'; 'Cão'
  (5 - 5) && (5 + 5); // 0
  'Gato' && false; FALSE
  (5 >= 5) && (3 <6;) TRUE

  Operador logico || "OU" 

  true || true;
  true || false;
  'Gato" || 'Cão';
  (5 - 5) || (5 + 5);
  'Gato' || false;
  (5 >= 5) || (3 < 6);

  Switch

    switch (VARIAVEL A SER VERIFICADA) {
      case : caso sejá .... faz alguma coisa.
      break Se for verificado PARA.
      Default: Define padrão caso nenhum dos Case for valido.
    }
*/