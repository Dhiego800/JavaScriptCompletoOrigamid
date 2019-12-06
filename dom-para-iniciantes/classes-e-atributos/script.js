// 1-Adicione a classe ativo a todos os itens do menu.
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
})

// 2- Remove a classe ativo de todos os itens do menu e mantenha
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
})

itensMenu[0].classList.add('ativo');

// 3- Verifique se as imagens possue o atributo alt.
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  console.log(img, img.hasAttribute('alt'));
})

// 4- Modifique o href do link externo no menu.

const linkExterno = document.querySelector('a[href^="http"');
linkExterno.setAttribute('href', 'https://www.google.com.br');

console.log(linkExterno);