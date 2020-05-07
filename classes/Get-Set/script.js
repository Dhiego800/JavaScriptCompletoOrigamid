/*
  #Get e Set
    Podemos definir comportamentos diferentes de 
    get e set para um método.

  #Valor estático
    Se definirmos apenas o get de um método, teremos então
    um valor estático que não será possível mudarmos.

  ##Set
    Eu posso ter um método com set apenas, que modifique outras
    propriedades do meu objeto.

  #Class
    Assim como em um objeto, as classes podem ter métodos de get e set também.
*/
{
  const button = {
    get tamanho() {
      return this._numero || 660;
    },
    set tamanho(numero) {
      this._numero = numero * 2;
    }
  }
}
{
  const frutas = {
    lista: [],
    set nova(fruta) {
      this.lista.push(fruta);
    }
  }  
  frutas.lista = 'melancia';
  frutas.lista = 'pera';
}

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element(){
    const type = this._elementType || 'button'
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color
    return buttonElement;
  }
  set element(type){
    this._elementType = type;
  }
}
const blueButton = new Button('Compre Já!', 'blue')