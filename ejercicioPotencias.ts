// Ejercicio: POTENCIAS

/* Consigna
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado. (Las entradas)
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.

    3 (BASE ) 4 (EXPONENTE) = 3x3x3x3 = 81 (RESULTADO)
*/

// puebo con el ejemplo, con el numero 1 , con el 0, para ver si funciona correctamente (prueba de escritorio - salida)

import * as rls from 'readline-sync';

let numeroBase: number =rls.questionInt("Escriba el numero que corresponde a la base");
let numeroExponente: number =rls.questionInt("Escriba el numero que corresponde al exponente");


// console.log("El resultado del calculo es: " + resultado) 

// no funciona con eso solo 

//(numeroExponente >=0) {
   // console.log("El resultado del calculo es: " + resultado);

while (numeroExponente <0); { // numero negativo
    console.log("No se puede realizar el calculo. Escriba un numero mayor o igual a 0");
    numeroExponente =rls.questionInt("Escriba el numero que corresponde al exponente");

}

// let resultado: number // = (numeroBase ^ numeroExponente)

function calcularPotencia(numeroBase:number, numeroExponente:number) {

    let resultado : number ;
           
        resultado = numeroBase**numeroExponente;

     return resultado; 
}

let resultadoCalculo = calcularPotencia(numeroBase,numeroExponente);

    console.log("El resultado del calculo es: " + resultadoCalculo);


/*function calcularPotencia(numeroBase:number, numeroExponente:number): number {

    let resultado : number = 1 ;
    
    for ( let i: number = 0; i<numeroExponente ; i++); {
       
        resultado = numeroBase * numeroBase;

    } return resultado; 

} no me funciono 
*/
// funcion potencia + ciclo for 



