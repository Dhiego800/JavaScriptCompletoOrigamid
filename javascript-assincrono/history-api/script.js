//window.history;
//window.history.back(); // Vai para a anterior
//window.history.forward(); // Vai para a próxima


//window.history.pushState(null, null, 'sobre.html')
//window.addEventListener('popstate',() => {
//	console.log()
//});

/*
	Só é possivel usar o evento popstate, se o pushState()
	for definido manualmente.
*/

async function fetchPage(url) {
	const pageReponse = await fetch(url);
	const pageText = await pageReponse.text();
	window.history.pushState(null, null, url);
}
