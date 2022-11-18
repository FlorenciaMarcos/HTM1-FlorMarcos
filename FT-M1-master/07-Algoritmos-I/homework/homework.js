'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

let factores=[1]
let factoresActual=2
while (num!==1){
  if(num%factoresActual===0){
    factores.push(factoresActual)
    num= num/factoresActual
  }else{ factoresActual++}

}
return factores
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  /* for(let j=0 ; j <= array.length ; j++){
      for(let i=0; i < array.length;i++){
          let aux=0;
          if(array[i] > array[i+1]){
              aux = array[i];
              array[i] =  array[i+1];
              array[i+1] = aux;
          }
      }}
      return array;
  */

   let flag=true;

   while(flag){
      flag=false
      for(let i=0; i<array.length-1; i++){
      if(array[i] > array[i+1]){
        let aux=array[i]
      array[i] = array[i+1]
      array[i+1] = aux
      flag = true
    }
    }
   }
   return array
  }
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
      //let count = 0;
      //while(count <= array.length) { 
        //    for(let i = 1; i <= array.length; i++){
          ////    if(array[i] < array[i-1]){
              //      aux = array[i];
                //    array[i] = array[i-1];
                  //  array[i-1] = aux;
             //   }
            //}
         //   count++;
       // }
     // return array
  //  }
  for(let i=1 ; i<array.length ; i++){
  let j = i-1;
  let aux = array[i];
  while(j>=0 && array[j]> aux){
    array[j+1]= array[j]
    j--
  }
  array[j+1]=aux
}
return array
}  
      // Implementar el método conocido como insertionSort para ordenar de menor a mayor
      // el array recibido como parámetro utilizando arreglos
      // Devolver el array ordenado resultante
      // Tu código:
      
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 for(let i = 0 ; i<array.length-1 ; i++){
 let min=i
  for(let j = i+1 ; j<array.length ; j++){
   
   if(array[j] < array[min]){
    min=j
   }
  }
  let aux= array[i]
  array[i]=array[min]
  array[min]=aux
 }
 return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
