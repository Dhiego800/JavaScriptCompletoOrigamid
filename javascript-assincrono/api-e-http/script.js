const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/');
pokemons.then(response => response.json())
.then(pokemon => {
	//console.log(pokemon)
});

const url = 'https://jsonplaceholder.typicode.com/posts'
const options = {
	method: 'POST',
	body: '{"aula": "JavaScript"}',
	headers: {
		"Content-Type": "application/json; chartset=utf-8",
	}
}
	
fetch(url, options)
.then(response => response.json())
.then(json => {
	//console.log(json)
})

//CORS

const urlG = 'https://google.com'
	
fetch(urlG)
.then(response => response.json())
.then(text => {
	console.log(text)
});


// URL quebra CORS https://cors-anywhere.herokuapp.com[SUA URL]