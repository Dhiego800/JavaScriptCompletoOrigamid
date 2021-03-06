/*
  Utilizando a API https://viacep.com.br/ws/05868210/json/
  Crie um formulario onde o usuário pode digitar o cep e o 
  endereço completo é retornado ao clicar em buscar
*/
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event){
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
};
/*
  Utilizando API https://blockchain.info/ticker
  retorne no DOM o valor de compra da bitcoin and reais.
  atualize este valor a cada 30s
*/

const btcDisplay = document.querySelector('.btc');
function fetchBtc() {
  fetch('https://blockchain.info/ticker').then(r => r.json())
  .then(btncJson => {
    btcDisplay.innerText = ('R$ ' + btncJson.BRL.buy).replace('.',',');
  })
}
fetchBtc();
//setInterval(fetchBtc, 1000 * 30);
/*
  Utilizando a API https://api.chucknorris.io/jokes/random
  retorne uma piada randomica do chucknorris, toda vez
  que cliar em proxima.
*/

const btnProximo = document.querySelector('.proximo')
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada =>{
    paragrafoPiada.innerText = piada.value;
  })
}

btnProximo.addEventListener('click', puxarPiada)
puxarPiada();