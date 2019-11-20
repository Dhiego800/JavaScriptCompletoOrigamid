/* Diferenças Const, Let, var

Const - Mantém escopo de bloco, impede redeclaração, impede modificação de valores da const(variavel)
Let mantém escopo de bloco, não pode ser redeclarada porém seu valor pode ser alterado.
*/

function mostrarCarro() {
  var carro = 'Lancer';
  console.log(carro);
}

mostrarCarro(); //Executa a função e retorna carro no console normalmente.
// console.log(carro); // Retorna um erro, is not defined

//Escopo de bloco
if(true) {
  var mes = 'Dezembro';
  console.log(mes);
}
console.log(mes);

if(false) {
  var mes = 'Dezembro';
  console.log(mes);
}
console.log(mes);

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
// console.log(i);

//Cria Objeto, mas não podemos alterar o valor da const, apenas os valores que contém dentro do obj.
let data = {
  ano: 2019,
  dia: 20,
}
data.ano = 2020;
data.dia = 25;

console.log(data.ano, data.dia);
