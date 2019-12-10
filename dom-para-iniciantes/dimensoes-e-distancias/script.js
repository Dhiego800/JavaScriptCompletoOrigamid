/*
1- Verifique a distância da primeira imagem em relação ao topo da pg.
2- Retorne a soma da largura de todas imagens 
3- verifique se os links da pagina possuem o minimo recomendado para telas
utilizadas com o dedo. (48px/48px de acordo com o google)

4- Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
*/

//1
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

//2
function somaImagens() {
  let soma = 0;
  const imagens = document.querySelectorAll('img');
  imagens.forEach((imagem) => {
    soma +=imagem.offsetWidth;
    console.log(imagem.offsetWidth)
  })
  console.log(soma);
}
window.onload = function() {
  somaImagens();
}

//3
const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, 'Possui acessibilidade!!!');
  }else {
    console.log(link, 'Não possui boa acessibilidade!!!');
  }
})

//4
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}