var nome = 'Diego';
// fixed, lenght, slice

var btn = document.querySelector('.btn');
// addEventListener, appendChild, id, innerHTML, outerHTML

function myFunction() {
  /* Obtenha o campo de texto */
    var copyText = document.getElementById("myInput");

  /* Selecione o campo de texto */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*Para dispositivos móveis*/

  /* Copie o texto dentro do campo de texto */
  document.execCommand("copy");

  /* Alertar o texto copiado */
  alert("Copied the text: " + copyText.value);
}