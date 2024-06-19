//no olvidar importar por FileSync

import fs from 'node:fs';

const precios: number [] = [525 , 3500 , 400 , 1999]
let preciosString : string = precios.toString();

const productos: string [] = ["Leche" , "Galletitas" , "Harina" ,"Queso"];

let contenidoPrecios: string = " ";

for (let i: number = 0 ; i < precios.length ; i++ ) {
    contenidoPrecios += `${precios [i]} `

}

let contenidoProductos: string = " " ;

for (let i: number = 0 ; i < productos.length ; i++ ) {
    contenidoProductos += `${productos [i]} `

}

// guardar informacion en txt diferentes
fs.writeFileSync('./precios.text', contenidoPrecios);
fs.writeFileSync('./productos.text', contenidoProductos);


//leer la informacion de los dos txt
const datosPrecios: string = fs.readFileSync('./precios.text', 'utf8');
//console.log(datosPrecios); 

const datosProductos: string = fs.readFileSync('./productos.text', 'utf8');
//console.log(datosProductos); 

// metodo trim - saca los espacios de adelante y de atras del string
const datosPrecios2 : string = datosPrecios.trim();
const datosProductos2 : string = datosProductos.trim();

// metodo split
const nuevoPrecios: string [] = datosPrecios2.split(" ");
console.log(nuevoPrecios) ;

const nuevoProductos: string [] = datosProductos2.split(" ");
console.log(nuevoProductos) ;