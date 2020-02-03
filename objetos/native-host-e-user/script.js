/*
    1- Liste 5 Objetos nativos do browser
    2- Liste 5 Objetos
    3- Liste 2 Métodos, Propriedades ou Objetos presentes
    no Chrome que não existe no Firefox
*/

//1 
Object;
String;
Array;
Number;
Function;

//2

Window;
history;
Document;
HTMLAllCollection;
NodeList;

//3

// Não existe no firefox webkitHidden
if(typeof document.webkitHidden !=="undefined") {
    console.log('Existe');
} else {
    console.log('Não existe');
}