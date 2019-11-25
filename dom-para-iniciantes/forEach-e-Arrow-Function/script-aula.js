const imgs = document.querySelectorAll('img');

/* 
imgs.forEach(function(item, index, array){
  
  console.log(item); // o item atual do loop
  console.log(index); // o número do index
  console.log(array); // O array completo
  
});

forEach
const titulos = document.getElementsByClassName('titulo');
console.log(titulos); //Retorna HTML Collection

const titulosArray = Array.from(titulos);
console.log(titulosArray); // Transforma HTML Collection em array

titulosArray.forEach(function(item){
  console.log(titulos); // iteragindo com cada array
});
*/
/*
  Tipos de sintaxe Arrow Function

1- Argumento unico, não precisa de parênteses;
  img.forEach(item => {
    console.log(item);
  })

2- Multiplos argumentos precisam de parênteses;
  imgs.forEach((item,index) => {
    console.log(item, index);
  })

3- Sem argumentos precisa dos parênteses, mesmo vazio;
  let = 0;
  imgs.forEach(() => {
    console.log(i++);
  })

  4- sintaxe inline, só pode ser usado quando o forEach tem só uma função, não usar 
  ; no final ou irá retornar erro, {} é opicional.

  let i = 0;
  img.forEach((item) => console.log(i++))

*/

imgs.forEach((item) => {
  console.log(item);
})