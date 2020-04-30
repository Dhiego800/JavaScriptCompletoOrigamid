/*
  Fetch API
  Permite fazermos requisições HTTP através do método
  fetch(). Este método retorna uma resolução de uma Promise. Podemos
  então utilizar o then para interagirmos com a respotas, que é um 
  objeto do tipo Response
*/

const doc = fetch('./doc.text').then(response =>{
  console.log(response);
})