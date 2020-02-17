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
//console.log(maiorNumero);

const aulasReduce = [
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
];

const listaAulas = aulas.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome;
    return acumulador;
}, {});

// .reduceRight() muda forma de leitura, da direita para esquerda.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

//console.log(frutasLeft, frutasRight);


//.some() Se pelo menos um return da iteração for truthy, ele retorna true.

const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
})

function maiorQue100(numero) {
    return numero > 100;
};
const numerosSome = [0, 43, 22, 88, 101, 2];;
const temMaior = numerosSome.some(maiorQue100);
console.log(temUva, temMaior);

/*every() Se todos os return das iterações forem truthy, o método irá retornar true,
Se pelo menos um for falsy, ele irá retornar false.
*/

const frutasEvery = ['Banana', 'Pêra', 'Uva', ''];
const arraysCheias = frutasEvery.every((fruta) => {
    return fruta;
})
const numerosEvery = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numerosEvery.every(x => x > 3);

console.log(arraysCheias, maiorQue3);