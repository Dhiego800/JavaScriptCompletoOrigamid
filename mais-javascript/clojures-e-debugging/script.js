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

debugger
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