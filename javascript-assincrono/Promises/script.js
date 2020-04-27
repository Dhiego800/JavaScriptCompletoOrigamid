/* new Promise()

  Promise é uma função contrutora de promessas. Existem
  dois resultados possíveis de uma promessa, ela pode ser resolvida,
  com a execução do primeiro argumento, ou rejeitada se o segundo
  argumento for ativado

  Resolve()
  Podemos passar um argumento na função resolve(), este será
  enviado junto com a resolução da promise.

  reject()
  Quando a condição de uma resolução da promise não é atingida,
  ativamos a função reject para rejeitar a mesma. Podemos indicar
  no console um erro, informando que a promise foi rejeitada.
*/

const promessa = new Promise(function(resolve, reject){
  let condicao = true;
  if(condicao){
    resolve('Estou Pronto!');
  } else {
    reject('Um erro ocorreu');
  }
})
console.log(promessa); // Promise {<resolved>: Estou Pronto!}