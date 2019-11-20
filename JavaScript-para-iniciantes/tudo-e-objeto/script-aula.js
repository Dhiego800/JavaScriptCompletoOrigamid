//Transformação de maiusculo par minusculo
var nome = 'DIEGO';
var nomeMinusculo = nome.toLocaleLowerCase();
console.log(nome, nomeMinusculo);

// toFixed Retorna numero arredondado, toString transforma numero em String
var numeroQuebrado = 19.4;
console.log(numeroQuebrado.toFixed(), numeroQuebrado.toString());

// length em uma função retorna todos argumentos que essa função aceita
addEventListener.length 

// Seleciona um elemento da DOM document.querySelector()
var btn = document.querySelector('.btn');

// Executa função na hora que for clicado.
btn.addEventListener("click", function(){
  console.log('Clicou')
});

// Retorna o valor que está dentro do elemento(botao)
btn.innerText
console.log(btn.innerText);

// Adiciona classe a um elemento, no ex: ativo.
btn.classList.add('ativo');
