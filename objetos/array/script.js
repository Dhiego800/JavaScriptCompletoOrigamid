/* Remova o primeiro valor de comidas e coloque em uma variável Remova o último valor de comidas e coloque em uma variável 
Adicione 'Arroz' ao final da array  Adicione 'Peixe' e 'Batata' ao início da array */

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const comida1 = comidas.shift(); // Isolando e removendo primeiro item da array
console.log(comida1);

const comidaU = comidas.pop(); // Isolando e removendo utimo item da array
console.log(comidaU);

comidas.push('Arroz'); // Adicionando arroz ao final da array
comidas.unshift('Peixe', 'Batata'); // Adicionando 'Peixe' e 'Batata'
console.log(comidas);

/* Arrume os estudantes em ordem alfabética Inverta a ordem dos estudantes 
Verifique se Joana faz parte dos estudantes 
Verifique se Juliana faz parte dos estudantes */

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
estudantes.sort(); // deixando em ordem alfabedica.
estudantes.reverse(); // invertendo a ordem da array

console.log(estudantes.includes('Joana')); // verificando se Joana faz parte dos estudantes (array)
console.log(estudantes.includes('Juliana'));

// Substitua section por ul e div com li, // utilizando split e join 


let html = `<secton>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>
                `
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

// Remova o último carro, mas antes de remover // salve a array original em outra variável

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

const cloneCarros = carros.slice();
console.log(cloneCarros); // Clonando array original

const utimoCarro = carros.pop(); // Removendo utimo item e salvando em uma variavel
console.log(utimoCarro);
console.log(carros);