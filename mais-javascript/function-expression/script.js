// Remova o erro
const princeNumber = n => +n.replace('R$','').replace(',', '.');
console.log(princeNumber('R$ 99,99'));

//Crie uma IIFE e isole o escopo de qualquer codigo JS
const moto = 'CG-150';
(() =>{
  const moto = 'XT-660';
    console.log(moto);
})();
console.log(moto);

//Como podemos utilizar a função abaixo?.
const active = callback => callback();

active(function(){
  console.log('Test de Active');
})

/*function active(callback) {
  return callback();
}*/