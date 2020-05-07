/*
  #Subclasses
    É possivel criamos uma subclasse, esta irá ter acesso aos 
    métodos da classe à qual ela estendeu através do seu protótipo.

  #Métodos
    Podemos escrever por cima de um método herdado.

  #Super
    É possível utilizar a palavra chave super para falarmos com
    a classe que pai e acessarmos os seus métodos e propriedades.

  #Super e Constructor
    Podemos utilizar o super par esterndermos o método constructor.
*/

class Veiculo {
  constructor(rodas, combustivel){
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('Veículo acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log('Moto acelerou');
  }
  empinar() {
    console.log('Moto empinou ' + this.rodas + ' rodas')
  }
}

const yamaha = new Moto(1, 'Gaasolina', true);
console.log(yamaha)
const civic = new Veiculo(4)