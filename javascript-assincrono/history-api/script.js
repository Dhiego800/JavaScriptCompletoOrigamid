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
	
	async function fetchPage(url) {
		const pageReponse = await fetch(url);
		const pageText = await pageReponse.text();
		window.history.pushState(null, null, url);
	}
*/

const links = document.querySelectorAll('a');

function handleClick(event) {
	event.preventDefault();
	fetchPage(event.target.href);
	window.history.pushState(null, null, event.target.href);
};

async function fetchPage(url){
	document.querySelector('.content').innerHTML = 'Carregando . . .'
	const pageResponse = await fetch(url);
	const pageText = await pageResponse.text();
	replaceContent(pageText);
}

function replaceContent(newText) {
	const newHtml = document.createElement('div');
	newHtml.innerHTML = newText;
	
	const oldContent = document.querySelector('.content');
	const newContent = newHtml.querySelector('.content');

	oldContent.innerHTML = newContent.innerHTML;
	document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
	fetchPage(window.location.href);
})

links.forEach(link => {
	link.addEventListener('click', handleClick);
});