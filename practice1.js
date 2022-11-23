// JavaScript coding practice exercises

// JavaScript tiene tipado dinamico, las variables se pueden configurar y reestablecer para cualquier dato.
// Ejemplos de identificadores de variables:
_direccion
nombre_usuario
email002
$ahorros
// camelCase en JavaScript, escribir los identificadores de variables con minuscula en la primera palabra y empezar con mayuscula la segunda.

////// Tipos de datos:
// Strings
var nombrePerro = 'waffles';
var usuario = 'Antonio';
var emailUsuario = 'antoniobazalar@yahoo.com';
var restaurante = 'McDonald\'s';
// Numbers
var edad = 26;
var gradosCentigrados = -40;
var longitud = 25.78;
// Booleans
var meEncantaJavascript = true;
var soyMalProgramador = false;
// Undefined
var hola; // undefined
// Null
var numeroTelefono = 991-646-218;
numeroTelefono = null;
numeroTelefono; // null

////// Operadores:
// Simbolos que le indican al interprete de JS las operaciones que debe realizar:
2 + 3 = 5;
7 - 4 = 3;
2 * 2 = 4;
3 / 3 = 1;
2 ** 3 = 8; // potenciacion
21 % 5 = 1; // resto






/////////////////

const nuevaString = 'hola';
const nuevoNum = 1996;
const nuevoBool = true;
const nuevaResta = 10 - 5 === 5;
const nuevaMultiplicacion = 10 * 4 === 40;
const nuevoModulo = 21 % 5 === 1;

//

function devolverString(str){
    return str;
}
console.log(devolverString); 

//

function devolverString2(a, b) {
    var diferencia = a / b;
    return diferencia;
}
devolverString2(6, 2);
console.log(diferencia);

//

function sumarDosNumeros(x, y){
    var suma = x + y;
    return suma;
}
sumarDosNumeros(4, 2);

//

function sonIguales(x, y) {
    if ( x === y){
        return true;
    }
    else {
        return false;
    }
}
sonIguales(2, 3);

//

function combinarNombres(nombre, apellido){
    var combinado = nombre + ' ' + apellido;
    return combinado;
}
combinarNombres('Antonio', 'Bazalar');

//

function esVocal(letra){
if(letra.length > 1){
    return "Dato incorrecto"
  }
  else if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"
}
esVocal('a');