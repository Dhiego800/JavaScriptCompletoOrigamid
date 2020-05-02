/*
	JSON
	JavaScript Object Notation (JSON) é um formato de 
	organização de dados, compostos por um conjunto de chave e valor
	as aspas duplas são obrigatórias, tanto na chave quanto no valor
	quando este for uma string.

	Valores 
	Os valores podem ser números, strings, boolean, arrays,
	objetos e null.

	Arrays e Objetos
	É comum possuirmos array's com objetos em cada valor da array.
	cuidado para não colocar vírgula no útimo item do objeto ou array.

	JSON.parse() e JSON.stringiy()
	JSON.parse() irá transformar um texto JSON em um objeto	JavaScript. 
	JSON.stringify() irá transformar um objeto JavaScript 
	em uma string no formato JSON.
*/

fetch('./dados.json')
.then(r => r.json())
.then(json => {
	json.forEach(materia => {
		//console.log(materia.aula)
	})
})

const jsonParse = fetch('./dados.json');

jsonParse.then(r => r.text())
.then(jsonText => {
	const jsonFinal = JSON.parse(jsonText); // transforma json
	console.log(jsonFinal)
});

const configuracoes = {
	player: "Google",
	tempo: 25.5,
	aula: "2.1 JavaScript"
}

const stringifyConfig = JSON.stringify(configuracoes); // transforma string
//console.log(stringifyConfig);


/*
	Exemplo Real
	Podemos guardar por exemplo no localStorage, uma string como
	valor de uma propriedade. E retornar essa string como 
	um objeto.
*/

const configAPI = {
	player: "Google API",
	tempo: 25.5,
	aula: "2.6 JavaScript"
};

localStorage.config = JSON.stringify(configAPI);

console.log(JSON.parse(localStorage.config))