// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if( x >= y){
    return x;
  }
  return y;
}
obtenerMayor(2,3);


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if(edad >= 18){
    return 'Allowed'
  }
  return 'Not allowed'
}
mayoriaDeEdad(17);


function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status === 1){
    return 'Online';
  }if(status === 2){
    return 'Away';
  }
  return 'Offline';
}
conection(1);

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'aleman'){
    return 'Guten Tag!';
  }if(idioma === 'mandarin'){
    return 'Ni Hao!';
  }if(idioma === 'ingles'){
    return 'Hello!';
  }
  return 'Hola!'
}
saludo('frances');

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color){
case 'blue': return "This is blue"; break;
case 'red': return 'This is red'; break;
case 'green': return 'This is green'; break;
case 'orange': return 'This is orange'; break;
default: return 'Color not found';
  }
}
colors(blue);

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5){
    return true;
  }
  return false;
}
esDiezOCinco(4);

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20){
    return true;
  }
  return false;
}
estaEnRango(15);

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
    if (numero - Math.floor(numero) === 0) { // resta xminimo a x y si es distinto tiene decimales
        return true;
    } else {
        return false;
    }
}
esEntero(2.4);

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var tres;
  tres = numero / 3 ; // dividir por 3 y ver despues com math.floor
  if(tres - Math.floor(tres) === 0) {
    tres = tres;
  }
  var cinco;
  cinco = numero / 5;
  if(cinco - Math.floor(cinco) === 0){
    cinco = cinco;
  }
  if( tres === tres && cinco  === cinco){
    return 'fizzbuzz';
    if(tres === tres){return 'fizz';}
    if(cinco === cinco){return 'buzz';}
  }
  return numero;
}
//no funciona
function sacarTres(numero){
  var tres;
tres = numero / 3 ; // dividir por 3 y ver despues com math.floor
if(tres - Math.floor(tres) === 0) {
  //tres = tres;
 return true;
 }
}
  function sacarCinco(numero){
var cinco;
cinco = numero / 5;
if(cinco - Math.floor(cinco) === 0){
//   cinco = cinco;
  return true;
}
}
if( sacarTres === true && sacarCinco  === true){
  return 'fizzbuzz';}
  if(sacarTres === true){return 'fizz';}
  if(sacarCinco === true){return 'buzz';}

return numero;

//
} 
fizzBuzz(2);

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
 if( num1 < 0 || num2 < 0 || num3 < 0){ // HAY NEGATIVOS 
  return 'Hay negativos';
 }
  if ((num1 !==0) > 0 && num1 > (num2 !==0) && num1 > (num3 !== 0) ){ //mayor y positivo
    return  'Número 1 es mayor y positivo';
  }if ( (num3  > (num1 !== 0))  && (num3  > (num2 > 0) )) {
    num3 = num3 + 1;
    return num3;
  }
  if (num3 === 0 || num2 === 0 || num1 === 0 ){
    return 'Error';
  }
  return false;
}
operadoresLogicos(1,2,3);

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  for (i < 1 ;i=1;i++){
    if ((numero / i === 0)){
      return true;
  }
  return 'falso';
}
}
esPrimo(7);

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  
  //function Verda(valor){
    if (valor === true){
    return 'Soy verdadero';
  }
  return false;
}

esVerdadero(false);

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var x = 6;
  for (i=0;i<10;i++)
  {
    return x * i ;
  } 
  tablaDelSeis(0);  


function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if ( numero - Math.floor(numero) === 0){
    if(numero < 99 && numero > 999){
      return true;
    }
    return false;
  }
}
tieneTresDigitos(999);

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  
  var cinco=0;
  var lim=0;
  while (lim < 7)
  {
    cinco = numero + 5;
    return  cinco;
    lim++;
  }
//  return;
}
doWhile(3);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
