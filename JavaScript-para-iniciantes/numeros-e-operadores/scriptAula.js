var total = 10 + 9 + 10;
  console.log(total);

var divisao = 100 / 5;
  console.log(divisao);

var modulo = 343242424322 % 3;
  console.log(modulo);

//Não será retornado numero, e sim uma string, então NaN é true
var testeNaN = 'test 100' / 2;
console.log(isNaN(testeNaN));

//retorna um numero então NaN é false
var testeNaN2 = '100' / 2;
console.log(isNaN(testeNaN2));

// A ordem importa Operadores aritimeticos Binarios

var total1 = 20 + 5 * 2; //Prioridade multiplicação
  console.log(total1);

var total2 = (20 + 5) * 2; //() prioriza operação
console.log(total2);

var total3 = 20 / 2 * 5;
console.log(total3);

var total4 =  10 + 10 * 2 + 20 / 2;
console.log(total4);

//Operadores Aritimeticos Unários
var incremento = 5;
  console.log(incremento++);
  console.log(incremento); //retorna 5 
  console.log(++incremento); //retorna 7
