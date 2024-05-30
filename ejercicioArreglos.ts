// Ejercicio - Arreglos

/* Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo : [4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/

// Declaro longitud del arreglo
let arreglo : number [] = new Array (12) 

// Declaro el arreglo
arreglo = [4,7,9,3,1,45,67,23,29,78,11,16]

// Si recorre el for, tendria que mostrar por consola el numero 78

let numeroMasGrande = 0
for (let i = 0 ; i <= arreglo.length ; i++ ) {
    if (arreglo [i] > numeroMasGrande) {
        numeroMasGrande = arreglo [i]
    }
}

console.log ("El numero mas grande es: " + numeroMasGrande) 


