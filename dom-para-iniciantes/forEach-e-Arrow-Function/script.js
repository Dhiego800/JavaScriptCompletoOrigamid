/*
Exercicios 

1- Mostre no console cada paragrafo do site.
2- Mostre o texto dos paragrafos no console.
3- como corrigir o erro abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
})

let = 0;
imgs.forEach(=>{
  console.log(i++);
})

imgs.forEach(() => i++);
*/


/**
 MEU CODIGO

 //1 Retornando todos os paragrafos

const todosParagrafos = document.querySelectorAll('p');
console.log(todosParagrafos);

//2- Mostrando conteudo de texto de cada paragrafo.

todosParagrafos.forEach((todosParagrafos) => {
  console.log(todosParagrafos.textContent);
})

//3 - corrigindo os erros Exercicio.

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
}) // ForEach tinha mais de um argumento e estava sem (), o que ocasionava o erro.

let i = 0;
imgs.forEach(() => {
  console.log(i++);
}) // Estavá com erro por falta de ().

imgs.forEach(() => console.log(i++)) // Faltava função console.log();
 */

 // CORREÇÃO !!!!!!!!!!!!!

 //1
 const paragrafos = document.querySelectorAll('p');
 console.log(paragrafos);

 //2
 paragrafos.forEach((item) =>{
  console.log(item);
 });

 paragrafos.forEach((item) =>{
  console.log(item.innerText);
 });

//3
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});  // Tem que ter os () fechando os argumentos.

let i = 0;

imgs.forEach(() => {
  console.log(i++);
}) // Falto os (), mesmo que não tenha argumentos,

imgs.forEach(() => i++); // Pegadinha, loop está funcionando porém com sintaxe diferente.

console.log(i);