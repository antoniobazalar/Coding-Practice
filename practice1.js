// JavaScript coding practice exercises

// JavaScript tiene tipado dinamico, las variables se pueden configurar y reestablecer para cualquier dato.
// Ejemplos de identificadores de variables:
_direccion
nombre_usuario
email002
$ahorros
// camelCase en JavaScript, escribir los identificadores de variables con minuscula en la primera palabra y empezar con mayuscula la segunda.
// Nan significa 'Not a number'

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
21 % 5 = 1; // resto, se usa el modulo %

// Precedencia de Operadores y Asociatividad
// Precedencia de Operadores, Orden en que se van a llamar las funciones de los operadores.
console.log (3 + 4 * 5) // 23
console.log (3 * 5 + 4 ** 2) // 31
// Asociatividad de Operadores, Orden en que se ejecutan los operadores cuando tienen la misma precedencia.
var a = 1, b = 2, c = 3;
a = b = c;
console.log(a, b, c); // 3

// Operadores de comparación:
== (igual a..)
=== (igual a.. compara tambien el tipo de dato)
!= (diferente a..)
!== (diferente a.. compara tambien el tipo de dato)
>= (mayor o igual que..)
<= (menor o igual que..)
> (mayor estricto que..)
< (menor estricto que..)

// Operadores logicos:
// NOT (!) Devolvera el valor booleano opuesto de lo que se le pasa.
!true;  //false
!false; //true
!(1 === 1); //false
!(10 <= 9); //true
// AND (&&) Devolvera true si y solamente si AMBAS expresione son true.
true && true;   //true
true && false;  //false
false && true;  //false
false && false; //false
(100 > 10) && (10 === 10) //true
(10 === 9) && (10 > 9)    //false
// OR (||) Devolver'a true si al menos una de las expresiones o ambas son true. Devolvera false si AMBAS expresiones son false.
true || true;   //true
true || false;  //true
false || true;  //true
false || false; //false
(100 > 10) || (10 === 10) //true
(100 < 10) || (10 === 10) //true
(100 > 10) || (10 !== 10) //true
(10 === 9) || (10 < 9)    //false

////// Metodos:
// Realizan una accion en concreto solo para ciertos tipos de datos.
var nombreGato = 'felix';
console.log(nombreGato.length); // 5 Devuelve la cantidad de caracteres de esa cadena de strings.

Math.pow(2,2);    // 4 Devuelve un numero elevado a un exponente.
Math.round(6.5);  // 7 Redondea el numero entero mas cercano.
Math.round(6.4);  // 7 
Math.floor(6.99); // 6 Redondea al numero entero mas cercano hacia abajo.
Math.ceil(6.01);  // 7 Redondea al numero entero mas cercano hacia arriba.


//////////////////////////////////
//////////////////////////////////
//////////////////////////////////


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