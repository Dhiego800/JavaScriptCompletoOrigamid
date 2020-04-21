/*setTimeout(callback, tempo, arg1, arg2,...) método assícrono
que ativa o callback após tempo. Não existe garantia de que
o codigo será executado exatamente após o tempo, pois, o 
callback entra na fila e espera pela call stack estar vazia.*/

function espara(texto) {
  //console.log(texto);
};
setTimeout(espara, 1000, 'Depois 1s');

setTimeout(()=>{
  //console.log('2s')
}, 2000);

/*Loops e setTimeout

Um loop é executado rapidamente, em milessegundos. Se 
colocarmos um setTimeout dentro do loop, todos eles serão
adicionados na Web api praticamente no mesmo tempo. 
Um evento de setTimeout não espera o tempo do anterior 
acabar para iniciar.*/

for (let i = 0; i < 20; i++) {
  setTimeout(()=>{
    //console.log(i)
  }, 300 * i);
}

/*this e Window

setTimeout é um meétodo do objeto window. O valor de this 
dentro do mesmo callback é uma referência ao seu objeto no
caso Window.*/

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event){
  console.log(this)
  //setTimeout(()=>{
    //this.classList.add('active');
  //}, 1000)
};

/*setInterval

setInterval(callback, tempo, arg1, arg2, ...), irá
ativar o callback toda vez que a quantidade de tempo passar */

function loop (texto){
  //console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

let ii = 0;
setInterval(() => {
  //console.log(i++)
}, 1000);

/*clearInterval

clearInterval(var), podemos parar um intervalo com o
clearInterval. Para isso precisamos atribuir o setInterval
a uma variavel*/

const contaAte10 = setInterval(callback, 1000);

let i = 0;
function callback(){
  console.log(i++);
  if(i > 10) {
    clearInterval(contaAte10);
  }
}