/*
Exercícios
  Retorne no console todas as imagens do site;
  Retorne no console apenas as imagens com a palavra imagem;
  Selecione todos os links internos (onde o href começa com #);
  Selecione o primeiro h2 dentro de .animais-descricao;
  Selecione o último p do site;
*/

//Retornando todas imagens do site.
let todasImgs = document.querySelectorAll('img');
console.log(todasImgs);

//Retornando todas imagens com a palavra imagem.
let imgComPalavraImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgComPalavraImagem);

//Retornando todos os link's internos do site.

let todosLinks = document.querySelectorAll('[href^="#"]');
console.log(todosLinks);

// Retornando primeiro h2
let primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

let ultimoP = document.querySelector('footer p:last-child');
console.log(ultimoP);

//Correção 
//Selecionando todas imagens do site
const img = document.querySelectorAll('img');
console.log(img);

//Selecionando a img que contém a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem');
console.log(imagensAnimais);

//Selecionando apenas link's internos da page
const linkInterno = document.querySelectorAll('[href^="#');
console.log(linkInterno);

//Selecionando o primeiro h2 do site.
//Alternativa 1 procura em todo documento
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

//alternativa 2 procura direto dentro da classe selecionada
const animaisA = document.querySelector('.animais-descricao');
const h2Rapoza = animaisA.querySelector('h2'); 
console.log(h2Rapoza);

// selecionando o ultimo P do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length-1]); //alternativa 1 usando operação -1
console.log(paragrafos[--paragrafos.length]); //alternativa 2 usando decremento --