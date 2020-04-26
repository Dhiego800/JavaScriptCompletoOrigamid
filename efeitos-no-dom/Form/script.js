/* 
function handleKeyUp(event){
  const target = event.target;

  if(!target.checkValidity()){
    target.classList.add('invalido');
    contato.nome.setCustomValidity('Campo NOME deve ser preenchido');
    target.nextElementSibling.innerText = target.validationMessage;

  }  
  texto.innerText = event.target.value;
};


function handleKeyUp(event){
  document.body.style.backgroundColor = event.target.value;  
};
 */
const contato = document.forms[0];
const texto = document.querySelector('.texto');
const dado = {};

function handleChange(event){
  dado[event.target.name] = event.target.value;
};

contato.addEventListener('change', handleChange);