// EJERCICIO ORDENAMIENTO - BUBBLE SORT 
/*Implemente un algoritmo de ordenamiento con el metodo BUBBLE SORT, para que 
ordene un arreglo de longitd N en orden descendente. */

// no olvidar importar
import * as readline from "readline-sync";

// declaro longitud del rreglo 
let arregloDesordenado : number [] = new Array (10) 

// declaro el arreglo
arregloDesordenado = [3,11,7,1,5,9,13,19,15,17];

//arregloDesordenado = burbujeoDescendente(arregloDesordenado);

function burbujeoDescendente(arregloDesordenado : number[]) : number[] {
    let i = 0;
    let j = 0;
    // console.log("El arreglo es: " + arregloDesordenado)

    //arregloDesordenado = burbujeoDescendente(arregloDesordenado);

    for (let i = 0 ; i < arregloDesordenado.length - 1 ; i++ ) {

        for (let j = 0 ; j < arregloDesordenado.length - i - 1 ; j++) {

            if (arregloDesordenado [j] < arregloDesordenado [j+1]) {
                
             // intercambio (si el actual es menor que el siguiente)
                let temp =   arregloDesordenado [j]

                arregloDesordenado [j] = arregloDesordenado [j+1] ;

                arregloDesordenado [j+1] = temp ;

                //let arregloOrdenado : number 
    
                // arregloOrdenado = temp ; //arregloDesordenado [j+1] ; 

            }
        }
    } 
    return arregloDesordenado; 

}

arregloDesordenado = burbujeoDescendente(arregloDesordenado)

console.log("El arreglo ordenado de forma descendentes es: " + arregloDesordenado.join(';')) ;
