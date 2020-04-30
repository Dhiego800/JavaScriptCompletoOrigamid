/* 1
  Fetch API
  Permite fazermos requisições HTTP através do método
  fetch(). Este método retorna uma resolução de uma Promise. Podemos
  então utilizar o then para interagirmos com a respotas, que é um 
  objeto do tipo Response.

  Response
  O objeto Response, possui um corpo com o conteúdo da resposta.
  Esse corpo pode ser transformado eutilizando métodos do protótipo
  do objeto Response. Estes retornam outras promises.  
*/

  // Descomente aqui

// const doc = fetch('./doc.txt').then(resolucao =>{
//   return resolucao.text();
// }).then((body) => {
//   const conteudo = document.querySelector('.conteudo');
//   conteudo.textContent = body;
//   console.log(body);
// });

/* 2
  .json()
  Um tipo de formato de dados muito utilizado com JavaScript é o
  JSON (javaScript Object Notation), pelo fato dele possuir
  basicamente a mesma sintaxe que a de um objeto js. .json()
  transforma um corpo em json em um obj JavaScript.  
 
*/

    // Descomente aqui

// const cep = fetch('https://viacep.com.br/ws/05868210/json/')
// cep.then(response => {
//   response.json()
//   .then(cep => {
//     const conteudoMore = document.querySelector('.conteudo');
//     conteudoMore.textContent = cep.logradouro;
//     console.log(cep.bairro, cep.logradouro)
//   })
// });


/*
  .text()
  Podemos utilizar o .text() para diferentes formatos como text,
  json, html, css, js e mais
*/

// Descomente aqui

// const styleCss = fetch('./style.css')
// styleCss.then(response => {
//   response.text()
//   .then(body => {
//     const divConteudo = document.querySelector('.conteudo');
//     const style = document.createElement('style');    
//     style.innerHTML = body;
//     style.innerText = body;
//     divConteudo.appendChild(style);
//     console.log(style)
//   })
// });

/*
  HTML e .text()
  Podemos pegar um arquivo inteiro HTML, transformar o corpo
  em texto e inserir em uma div com o innerHTML. A partir dai
  podemos manipular dados como um DOM qualquer.

*/

const div = document.createElement('div');
const sobre = fetch('./sobre.html');

sobre.then(response => response.text())
.then(htmlBody => {
  console.log(div)
  div.innerHTML = htmlBody;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
})