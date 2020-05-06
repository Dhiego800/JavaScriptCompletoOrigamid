/*
  #Contructor Function
    Funções responsáveis pela criação de objetos. O conceito de uma 
    função contrutora de objetos é implementado em outras
    linguagens como Classes.
*/

//Função construtora de botão EX:1
{
function Button1(text, background) {
  this.text = text;
  this.background = background;
}
Button1.prototype.element = function() {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  return buttonElement;
}
const blueButton1 = new Button1('Comprar', 'blue');
console.log(blueButton1.element());
}

/*
  #Class
    O ES6 trouxe uma nova sintaxe para implementarmos funções
    construtoras. Agora podemos utilizar a palavra chave class. É
    considerada syntactical sugar, pois por baixo dos panos continua
    utilizando o sistema de protótipos de uma função construtora
    para criar a classe.

    Example simples
      class Button {
        constructor(propriedade){
          this.propriedade = propriedade;
        }
        metodo1(){}
        metodo2(){}
      }
*/

//Class Ex: 2
{
  class Button2 {
    constructor(text, background, color) {
      this.text = text;
      this.background = background
      this.color = color;
    }
    element() {
      const buttonElement = document.createElement('button');
      buttonElement.innerText = this.text;
      buttonElement.style.background = this.background;
      buttonElement.style.color = this.color;
      return buttonElement;
    }
    appendTo(target) {
      const targetElement = document.querySelector(target);
      targetElement.appendChild(this.element())
      return targetElement;
    }
  }
  const redButton = new Button2 ('Btn-Class', 'red', 'white');
  console.log(redButton.appendTo('body'));
}

/*
  #Constructor
    O método constructor(args){} é um método especial de 
    uma classe. Nele você irá definir todas as propriedades do objeto
    que será criado. Os argumentos passados em new, vão direto para
    o constructor.

  #Constructor Return
    Por padrão a classe retorna this. Ou seja, this é o objeto criado com
    o new Class. Podemos modificar isso alterando o return do constructor, o problema
    é que perderá toda a referência do objeto.

  #This
    Assim como em uma função construtora, this faz refência ao objeto criado
    com new. Você pode acessar as propriedades e métodos da classe
    utilizando this.
  
  #Propriedades
    Podemos passar qualquer valor dentro de uma propriedade.
*/

{
  class Button3 {
    constructor(options) {
      this.options = options;
    }
  }
  const yellowButtonOptions = {
    backgroundColor: 'yellow',
    text: '3º Example',
    color: 'white'
  }
  const yellowButton = new Button3(yellowButtonOptions)
}


/*
  #Static vs Prototype
    Por padrão todos os métodos criados dentro da classe irão para o
    protótipo da mesma. porém podemos ciarar métodos diretamente
    na classe utilizando a palavra chave static. Assim como
    [].map() é um método de uma array e Array.from() é um
    método do construtor array

    #Static
      Você pode utilizar um método static para retornar a própria
      classe com propriedades já pré definidas
*/
{
  class Button4 {
    constructor(text, background) {
      this.text = text;
      this.background = background
    }
    element() {
      const elementButton = document.createElement('button');
      elementButton.innerText = this.text;
      elementButton.style.background = this.background;
      return elementButton;
    }
    static createSilver(text){
      return new Button4(text, 'silver');
    }
  }
  const botaoSilver = Button4.createSilver('Btn-cinza');
  console.log(botaoSilver)
}