//Array com os anos que o Brasil foi campeão
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

//loop formando frase com cada ano que o brasil foi campeão, usando template string
for(var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasil ganho a copo de ${brasilCampeao[i]}`);  
}

//interagindo com loop de frutas, objetivo parar na pera.
var frutas = ['Banana', 'Maçâ', 'Pera', 'Uva', 'Melância'];

for(var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'){
    break;
  }
}

var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta);
