const contato = document.forms[0];
const texto = document.querySelector('.texto');

function handleKeyUp(event){
  texto.innerText = event.target.value;
};
contato.addEventListener('change', handleKeyUp);