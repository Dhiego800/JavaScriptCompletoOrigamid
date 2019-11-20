const href = window.location.href;
console.log(href);

if(href === 'http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-o-dom/index.html') {
  console.log('URL é igual !!!!')
};

const titulo = document.querySelector('h1');
const tituloClass = titulo.classList[0]; //retorna classe do elemento na posição 0 
console.log(tituloClass);

console.log(titulo.innerText); // Retorna texto
console.log(titulo.classList) // Retorna as classes 
console.log(titulo.id) // retorna id
console.log(titulo.offsetHeight) // retorna a altura do elemento

titulo.addEventListener('click', function(){
  console.log('Texto sendo clicado.')
}); //ativa função no momento do click
