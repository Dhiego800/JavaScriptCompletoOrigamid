/*
	API__

	APPLICATION
		Um servidor, aplicativo, obj javascript ou qualquer outra coisa que
		você interaja através de comandos. Ao digitar uma URL, estamos utilizando
		a API do browser para se comunicar com a API do servidor.

	PROGRAMMING
		Programação, isso significa que um comando irá encadear uma cadeia de
		eventos pré-definidos. O resultado esperado é geralmente o mesmo.

	INTERFACE
		A interface são os comandos criados para permitir a interação
		com a aplicação, EX: 'VIOLAO'.toLowerCase() é um método que faz
		parte da interface do obj string, A interação com a interface retorna um
		efeito / resposta.

	Exemplos de API's

	#GITHUB
		https://api.github.com/users/origamid
		https://api.github.com/users/origamid/followers

	#ARRAY / ELEMENT
		[].map();
		[].filter();
		Element.classList
		Element.attributes;

	#TEMPO
		https://www.metaweather.com/api/location/455825/
		https://api.github.com/toddmotto/public-apis

	HTTP
		HyperText Transfer Protocol é o protocolo utilizado para
		enviarmos/recebermos arquivos e dados na web.

	#url e method
		Uma requisição HTTP  é feita através de uma URL. O método padrão
		é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

	#METHOD
		GET
			Puxa informação, utilizado para pegar posts, usuários e etc.
		
		POST
			Utilizado para criar posts, usuários e etc.

		PUT
			Geralmente utilizado para atualizar informações

		DELETE
			Deleta uma informação

		HEAD
			Puxa apenas os headers

	#HEADERS
		CACHE-CONTROL
			Tempo que o arquivo deve ficar em cache em segundos. Ex: public,
			max-age=3600
		
		Content-Type
			Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo
			de arquivo principalmente em métodos POST e PUT.

		Lista de Headers
			https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

	#CORS
		Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento
		de recursos entre diferente origins.

		É definido no servidor se é permitido ou não o acesso dos recursos
		através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

		Se o servidor não permitir o acesso, este será bloqueado. É possível
		passar por cima do bloqueio utilizando um proxy.

		CORS é um acordo entre browser / servidor ou servidor / servidor.
		Ele serve para dar a certa proteção ao browser, mas não é inviolável.
*/