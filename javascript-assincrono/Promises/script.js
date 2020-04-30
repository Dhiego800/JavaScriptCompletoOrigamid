/* 
 //EXAMPLE 1

  new Promise()

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

  then()
  O poder das promises está no método then() do seu protótipo. O
  \callback desde método só será ativado quando a promise for 
  resolvida. O argumento do callback será o valor passado
  na função resolve.
*/

const promessa = new Promise(function(resolve, reject){
  let condicao = true;
  if(condicao){
    resolve('Estou Pronto!');
  } else {
    reject(Error('Um erro ocorreu'));
  }
})
//console.log(promessa); // Promise {<resolved>: Estou Pronto! || <rejected>: Error:...}

promessa.then(function(resolucao){
  //console.log(resolucao); // 'Estou pronto!
})

 //EXAMPLE 2
/*
  Assíncrono
  As promises não fazem sentido quando o código executado dentro da 
  mesma é apenas código síncrono. O poder está na execução
  de código assíncrono que executará o resolve() ao final dele.  
 */

 const promessa2 = new Promise((resolve, reject) => {
   setTimeout(() =>{
     resolve ({nome: 'Dhiego66_', idade: 28,}, console.log('Resolvida AGORA Promessa 2'));
   }, 1500)
 });
 promessa2.then(resolucao =>{
   //console.log(resolucao); // Resolvida após 1.5s
 });

 //EXAMPLE 3

 /*
  then().then()
  O método retorna outra promise. Podemos colocar o then()
  após then() e fazer um encadeamento de promessas. O 
  valor do primeiro argumento de cada then, será o valor
  do retorno anterior.

  then(resolve, reject)
  Podemos passar a função que será ativada caso a promise
  seja rejeitada, direto no método then, como segundo argumento

  finaly()
  finaly() executará a função anônima assim que a promessa acabar. A
  diferença do finally é que ele será executado independemente do
  resoltado, se for resovida ou rejeitada.
  */

  const promessa3 = new Promise((resolve, reject) =>{
    let condicao = false;
    if(condicao){
      resolve('ETAPA 1');
    } else {
      reject(Error('Um Erro ocorreu na promisse EXAMPLE 3'))
    }
  });

  promessa3.then(resolucao => {
    console.log(resolucao); // 'Etapa 1
    return 'Etapa 2'
  })  
    .then(resolucao => {
    //console.log(resolucao) // 'Etapa 2';
    return 'Etapa 3';

  }).then(r => r + 4)
  .then(r =>{
    console.log(r); // Etapa 34
  })
  .catch(rejeitada => {
    //console.log(rejeitada)
  }).finally(() =>{
    console.log('Acabou PROMESSA!');
  })

  /*
  Promise.all()
  Retornará uma nova promise assim que todas as promises dentro
  dela forem resolvidas ou pelo menos uma REJEITADA. A
  resposta é uma array com as respostas de cada promise.

  Promise.race()
  Retornará uma nova promise assim que a primeira promise for
  resolvida ou rejeitada. Essa nova promise terá a resposta da 
  primeira resolvida.
  */

  const login = new Promise(resolve => {
    setTimeout(() => {
      resolve('Login Efetuado com sucesso');
    }, 2000);
  });

  const dados =  new Promise(resolve => {
    setTimeout(() => {
      resolve('Dados carregados!!!');
    }, 2500);
  });
  const tudoCarregado = Promise.all([login, dados]);
  const tudoCarregadoR = Promise.all([login, dados]);

  tudoCarregado.then(respostas => {
    console.log(respostas); // Array com ambas respotas.
  });

  tudoCarregadoR.then(respostas => {
    console.log(respostas); // usando race() retorna a respotas da primeira promise resolvida/rejeitada
  });
