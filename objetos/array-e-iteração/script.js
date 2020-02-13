// .forEach(callback (itemAtual, index, array)) função callback é executada para cada item do array

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array){
    //console.log(item.toLocaleUpperCase());
});

// Arrow Function

const li = document.querySelectorAll('li');

li.forEach((item, index) => item.classList.add('ativa' + index));

li.forEach(function(item){
    item.classList.add('ativa');
});

//Modificando a Array Original 

const cars = ['Volvo', 'Nissan', 'Audi'];
cars.forEach((item, index, array) =>{
    array[index] = 'Carro ' + item;
});
//console.log(cars);

/* map() faz exatamente a mesma coisa que ForEach() porém Se isolarmos map em uma variavel e definirmos um return,
o valor dessa variavel será um array com return que foi definido dentro map.
*/
const newArray = cars.map((item, index, array) => {
    //console.log(item, index, array);
    return item.toLocaleUpperCase();
});
//console.log(newArray);

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((number) => number * 2); // Essa sintaxe dispensa uso de return. com uso da {} precisa usar return.

//console.log(numerosX2);

const aulas = [
    {
        nome:'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1' ,
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);
const nomeAulas = aula => aula.nome; // Usando Arrow function 

/*Reduce
 .reduce(callback(acumulador, valorAtual, index, array), valorInicial) 
 Executa função de callback para cada item da Array. um valor esécoaç existe nessa função de callback,
 ele é chamado de ACUMULADOR, mas é na verdade apenas o retorno da iteração anterior.

 Se valor inicial não for passado, reduce pula uma iteração e pega o valor da 2º iteração e
 coloca no acumulador.
 */

const aulasR = [10, 25, 30];
const reduceAulas = aulasR.reduce((acumulador, item, index, array) =>{
    //console.log(acumulador, item, index);
    return acumulador + item;
}, 0);

const numerosR = [10, 25, 30, 2, 54 , 12, 7];

const maiorNumero = numerosR.reduce((anterior, atual)=>{
    // if(anterior > atual) {
    //     return anterior
    // } else{
    //     return atual;
    // }
    return anterior > atual ? anterior : atual;
})

console.log(maiorNumero);