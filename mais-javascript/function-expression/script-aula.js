/*
  Function Declaration
    São duas as formas mais comuns de declararmos uma função. A
    que utilizamos até o momento é chamado de Function declaration.

    #Hoisting
      Function Declarations são completamente definidas no momento do
      hoisting, já function expressions apenas serão definidas no 
      momento da execução. Por isso a ordem da declaração de uma FE
      possui importância.

    #Arrow Function
      Podemos criar utilizando arrow function.
    
    #Estrutura / Preferência
      Geralmente o uso entre expression / declaration é uma questão
      de preferência. Function Expression força a criação da mesma 
      antes de sua ativação, o que pode contribuir para um
      código mais estruturado.

    #IIFE - Immediately Invoked Function Expression
      Antes da introdução de modules e da implementação do escopo de
      bloco, a forma mais comum utilizada para isolarmos o escopo de 
      um código JavaScript era através das chamadas IIFE's.
*/

const somar = function(a,b) {
  return a + b;
};
console.log(somar(700, 40));

const subtrair = (a, b) => a - b;
console.log(subtrair(700, 40));

const instrumento = 'Violão';

(function (){
  const instrumento = 'Guitarra';
  console.log(instrumento)
})()
console.log(instrumento);
