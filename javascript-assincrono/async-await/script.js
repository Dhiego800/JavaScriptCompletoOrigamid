async function puxarDados() {/*
	try{
		const dadosResponse = await fetch('./dados.json'); 
		const dadosJSON = await dadosResponse.json();
		document.body.innerHTML = dadosJSON.aula;
	}
	catch(erro) {
		console.log(erro)
	}*/
}
puxarDados();

async function iniciarAsync() {
	const responseDados = await fetch('./dados.json'); 
	const responseClientes = await fetch('./clientes.json');

	const jsonDados = await (await responseDados).json();
	const jsonClientes = await (await responseClientes).json();

	console.log(jsonDados)
	console.log(jsonClientes)
}
iniciarAsync();

async function asyncSemPromise() {
	// Console não irá esperar!!!
	await setTimeout(() => console.log('Passou 1s...'), 1000);
	console.log('Terminou');
}
//asyncSemPromise();

async function asyncComPromise() {
	await new Promise(resolve => {
		setTimeout(() => {
			console.log('Passou 1s...');
			resolve()
		}, 1000)
	})
	console.log('Terminouu!!!!!!!!!!')
}
asyncComPromise();
