// JavaScript coding practice exercises
// Tipos de datos:
// Strings
var nombrePerro = 'waffles';
var usuario = 'Antonio';
var emailUsuario = 'antoniobazalar@yahoo.com';
// Numbers
var edad = 26;
var gradosCentigrados = -40;
var longitud = 25.78;
// Booleans
var meEncantaJavascript = true;
var soyMalProgramador = false;
// 



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