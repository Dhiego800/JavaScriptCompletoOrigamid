/*
1- Quando usuario clicar nos links internos do site, adicione a classe ativo ao item clicado e remova
dos demais itens caso eles possuam a mesma. Previna o comportamento padão desses links.

2- Selecione todos os elementos do site começando a partir do body, ao click mostre 
exatamente quais dos elementos estão sendo clicados.

3- Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está 
sendo clicado, o método remove() remove um elemento.

4- Se usuário clicar na tecla (t), aumente todo o texto do site.
*/


//1
const linksInterno = document.querySelectorAll('a[href^="#"');
function handleLink(event) {
  event.preventDefault();
  linksInterno.forEach((item) => {
    link.classList.remove('ativo');
  });

  event.currentTarget.classList.add('ativo');
  //this.currentTarget.classList.add('ativo'); opicional
}

linksInterno.forEach((link) => {
  link.addEventListener('click', handleLink);
});

//2
function handleElemento(event) {
  console.log(event.currentTarget); // exercicio 2
  // event.currentTarget.remove(); //Exercicio 3
}

//3
const todosElementos = document.querySelectorAll('body *');
todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
})

//4
function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown', handleClickT);