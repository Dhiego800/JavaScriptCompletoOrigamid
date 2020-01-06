/* 
const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element().classList.add('ativo');
    }
}

// Dom.ativo();
// Dom.seletor = 'ul';
// Dom.ativo();
*/

function Dom(seletor) { // Podemos passar argumentos
    this.element = function () {
        return document.querySelector(seletor); // recebe o seletor passado como argumento
    }
    this.ativar = function (classe) { // metodos podemos também passar argumentos nos (), quantos forem necessarios
        this.element().classList.add(classe); // Recebe a classe
    }
}

const li = new Dom('li'); // Seleciona elemento desejado.
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
lastLi.ativar('ativar'); // Passa classe desejada