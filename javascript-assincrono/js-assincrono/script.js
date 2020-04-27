/*
  Síncrono vs Assícrono

Assícrono - Espera a tarefa acabar para continuar com a próxima

Assícrono - Move para a próxima tarefa antes da anterior terminar.
O trabalho será executado no 'fundo' e quando terminado, será colocado na 
fila (Task Queue)

Exemplos
setTimeout, Ajax, Promises, Fetch, Async

*/

/* Execução: método setTimeout() executado. Callback colocado na Web Api.
com tempo de 0 */
setTimeout(function() {
  console.log('Time 1')
});

/* Execução: método setTimeout() executado. Callback colocado na Web Api.
com tempo de 100. setTimeout anterior resolvido, função anônima
colocada na Queue. */
setTimeout(function() {
  console.log('Time 2')
}, 100)

/*Execução: método log() executado. Argumento retornado no console.*/
console.log('Log 1');

/* Execução: método setTimeout() executado. Callback colocado na Web Api.
com tempo de 50 */
setTimeout(function(){
  console.log('Time 3')
}, 50);

/*Execução: método log() executado. Argumento retornado no console.*/
console.log('Log 2');

/*EVENT LOOP: Após a finalização do Script o event loop verifica se
existem itens na Task Queue. */


// VANTAGENS

/*
  Carregamento no fundo - Não trva o script. É possivel utilizar
  o site enquanto o processamento é realizado no fundo.

  Função ao Término - Podemos ficar de olho no carregamento e 
  executar uma função assim que ele terminar.

  Requisições ao Servidor - Não precisamos recarregar a página
  por completo à cada requisição feita ao servidor.

*/