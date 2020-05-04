/*
## History
  É possível acessarmos o histórico de acesso do browser em uma sessão
  sessão específica atrasvés do window.history. O objeto history
  possui diferentes métodos e propriedades.

  pushState()
    A parte interessante de manipularmos o history é que podemos
    modificar o histórico e adicionar um novo item.    
    window.history.pushState(obj, title, url)

  popstate
    O evento popstate pode ser adicionado ao objeto window.
    Assim podemos executar uma função toda vez que o usuário
    clicar no botão de voltar ou próximo

## Fetch e History
  Ao puxarmos dados via fetch api, o url da página continua o mesmo.
  Ao combinar fetch com history api conseguimos simular
  uma navegação real entre páginas, sem a necessidade de recarregamento
  da mesma.
*/