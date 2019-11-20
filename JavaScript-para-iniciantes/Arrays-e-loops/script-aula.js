/*
//Criando array
var videoGames = ['Switch', 'Ps4', 'Xbox', '3DS'];

//Retornando e removendo item do array .pop()
var ultimoItem = videoGames.pop();
console.log(ultimoItem);

//Adicionando item no array .push()
videoGames.push('Ps3');

// Fazendo Loop com FOR
for (var numero = 0; numero <= 12; numero ++) {
  console.log(numero);
}

// While Loop

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
*/

// interagindo com array, e break
var videoGames = ['Switch', 'Ps4', 'Xbox', '3DS'];

for(var item = 0; item < videoGames.length; item ++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'Ps4') {
    break;
  }
}

/*iteragindo com array com forEach(1ºValor[Fruta Exemplo: pera, adicionado dinamicamente],
  2ºValor[Posição do elemento no exemplo seria 4ºPosição], 3ºValor o proprio Array;)*/

var frutas = ['Abacaxi', 'Manga', 'Maracujá', 'Uva', 'Pera', 'Banana', 'Melão']
frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array);
})