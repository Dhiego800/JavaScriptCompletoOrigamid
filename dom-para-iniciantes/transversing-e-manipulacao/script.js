// 1- Duplique o menu e adicione ele em copy
// 2- Selecione o primeiro DT da dl de Faq
// 3- Selecione o DD referente ao primeiro DT
// 4- Substitua o conteúdo html de .faq pelo .animais

// 1
const menuPrincipal = document.querySelector('.menu');
const menuClone = menuPrincipal.cloneNode(true);
const footerCopy = document.querySelector('.copy');

footerCopy.appendChild(menuClone);

// 2
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
console.log(primeiroDt);

//3 reutilizando constante do exercicio 2
const proximoDD = primeiroDt.nextElementSibling // PEGANDO PROXIMO ELEMENTO
console.log(proximoDD);

//4 reutilizando constante do exercicio 2
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML; // Troca de todo conteúdo HTML