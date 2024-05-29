// Ejercicio – Par/Impar

/* CONSIGNA 
•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo
(Recuerde plantear el Pseudocódigo y las Pruebas de Escritorio)
*/

/* Pseudocódigo - un programa que le permita al usuario ingresar un numero 
    Ese numero de acuerdo al tipo, mostrara si es par o impar, o si es 0.
    Le devolvera un mensaje al usuario con la aclaracion:
    "El numero es par", "El numero es impar" , "El numero es 0"         */

/* Prueba de escritorio 
    Datos de entrada            Salida esperada
    numeroDeseado= 3            "El numero es impar"
    numeroDeseado= 6            "El numero es par"
    numeroDeseado= 0            "El numero es 0"
*/

import * as rls from 'readline-sync';

let numeroDeseado : number =rls.questionInt("Escriba el numero que desea verificar si es par o impar: ");

if (numeroDeseado %2 ==0) {
    console.log("El numero es par");

} else if(numeroDeseado %2 !==0) {
    console.log("El numero es impar");

} else if (numeroDeseado ==0) {
    console.log("El numero ingresado es 0")
}

