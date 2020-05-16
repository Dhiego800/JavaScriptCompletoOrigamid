/*
  #Factory Function
    São funções que retornam um objeto sem a necessidade de 
    utilizarmos a palavra chave new. Possuem basicamente a mesma
    função que constructor function / classes.

  #Métodos / Variaveis privadas
    Uma das vantagens é a possibilidade de criarmos métodos / 
    variaveis privadas.

  #Ice Factory
    Podemos impedir que os métodos e propriedades sejam
    modificados com Object.freeze(). Ideia inicial de 
    Douglas Crockfrod.

  #Constructor Function / Factory Function
    Uma das vantagens do Factory Function é a possibilidade de
    iniciarmos a mesma, sem a utilização da palavra chave new.
    Também é possível fazer isso com uma Constructor Function.
*/

function createButton (text) {
  const numeroSecreto = 877745698723001;

  function element () {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return Object.freeze({
    text,
    element
  });
}

const btn = createButton('Seguir')
//console.log(btn.element());

function Pessoa (nome) {
  if(!(this instanceof Pessoa)) // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`
}

const dev = Pessoa('Dhiiego')
console.log(dev);