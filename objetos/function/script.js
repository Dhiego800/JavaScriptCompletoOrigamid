/*Criando função usando construtor Function, e por isso
herda suas propriedades e métodos. */
const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
    return n1 + n2;
}
somar.length; // 2 Retorna numeros de argumentos que a função possui
somar.name // Retorna o nome da função.


// Metodo call() Executa a função, sendo possivel passarmos uma nova referência ao THIS da mesma.
const carro = {
    marca: 'Ford',
    ano: 2020,
}

function descricaoCarro() {
    //console.log(this.marca + ' ' + this.ano);
}
descricaoCarro() // undefinided undefinided
descricaoCarro.call() // undefinided undefinided
descricaoCarro.call(carro) // Retorna Ford 2020

/*Substituindo o this da função*/
const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Perâ', 'Uva'];

carros.forEach.call(frutas, (item) =>{
    //console.log(item);
});

function Dom(seletor) {
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
//console.log(lista);

//Modificando função nativa (não aconselhavel)
const frutas1 = ['Uva', 'Maça', 'Banana'];
Array.prototype.mostrarThis = function() {
    console.log(this);
};

// Array-like
/*HTMLCollection, NodeList e os demais objetos do Dom, são
parecidos com uma array. Por isso conseguimos utilizar os mesmos na
substituição do this em call.*/

const li = document.querySelectorAll('li');
const filtro = Array.prototype.filter.call(li, function(item){
    return item.classList.contains('ativo');
});

console.log(filtro);

const arrayLike = {
    0: 'item 1',
    1: 'item 2',
    2: 'item 3',
    length: 3,
};

/* apply(this, [arg1, arg2, ...]) funciona como o call, a única
diferença é que os argumentos da função são passados através de uma array*/

const numeros = [3,4,5,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

/*Diferente de call e apply o bind(this, arg1, arg2, ...) não
irá executar a função mas sim retornar a mesma com o novo contexto de this */

const filtrarLi = Array.prototype.filter.bind(li, function(item){
    return item.classList.contains('ativo');
});
console.log(filtrarLi());

const $ = document.querySelectorAll.bind(document);

const carroBind = {
    marca: 'Ford',
    ano: '2020',
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo} s`
    }
};

const honda = {
    marca: 'Honda',
}

const acelerarHonda = carroBind.acelerar.bind(honda);
console.log(acelerarHonda(300, 22));

function imc (altura, peso) {
    return peso / (altura * altura);
};
const imc180 = imc.bind(null, 1.80);