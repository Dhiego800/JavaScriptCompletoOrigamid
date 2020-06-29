/*
  #Escopo
    Quando criamos uma função, a mesma possui acesso à todas as
    variàveis criadas em seu escopo e também ao escopo pai. A 
    mesma coisa acontece para funções dentro de funções.

  #Clojures
    A funcao2 possui 4 escopos. O primeiro é o local, com 
    acesso ao item3. O segundo dá acesso ao item2, esse
    escopo é chamado de Clojure(funcao1) (escopo de função dentro
    de função). O terceiro escopo é o Script com acesso ao item1 e o 
    quarto é o Global/Window.

  #Debugging
    É possível "debugarmos" um código JavaScript utilizando
    ferramentas do browser ou através do próprio VsCode.
    Se código possuir qualquer Web API, o processo deve ser feito no
    Browser. Plugins podem interferir no debug do browser.   
*/


let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1, item2, item3);
  }
  funcao2();
}
funcao1();

/*
  #Caso Clássico 
    Um dos casos mais clássicos para demonstração de Clojures é
    através da criação de uma função de incremento. É como se a função
    incrementar carregasse uma mochila chamada contagem, onde uma refêrencia
    para as suas variáveis  estão contidas  na mesma.

  #Clojures na Real
    Todas as funções internas da Factory Function possuem uma closure de $$
    As mesmas contém uma referência à variável elements declarada dentro do 
    escopo da função.
*/

function contagem () {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total);
  }
}

const ativarIncremento = contagem();
ativarIncremento();
ativarIncremento();

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;
  };

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  };

  function on(onEvent, callBack) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callBack);
    });
    return this;
  };

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  };

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this;
  };

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass
  };
};

const btns = $$('button');
console.log(btns.hide().show());

function handleClick(event) {
  console.log(event.target);
  btns.addClass('active');
};

btns.on('click', handleClick);