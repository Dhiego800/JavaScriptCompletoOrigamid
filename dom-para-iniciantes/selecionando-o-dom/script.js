// document.getElementById Seleciona elemento por ID, caso elemento não existir retorna null
const animais = document.getElementById('animais');
console.log(animais);

/* getElementsByClassName retorna todos elementos que contém a classe desejada.
pode ser passada mais de uma classe, porém só será selecionado os elementos que
tiverem as 2 ou mais classes desejadas.*/

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
console.log(gridSection[2]); // Retorna a grid-section na posição 2.

/* getElementsByTagName Seleciona todas as tags desejadas, presente no site. no Ex: uma UL, mas poderia
ser a, p, div, img etc, retorna algo parecido com array */

const ul = document.getElementsByTagName('ul');

const primeiraUl = document.querySelector('ul');
const primeiraLi = document.querySelector('li');

const linkInterno = document.querySelector('[href^="#"]'); // puxa todos elementos que começa com #
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]); // Retorna uma nodeList com todas imagens que estã dentro da classe animais,