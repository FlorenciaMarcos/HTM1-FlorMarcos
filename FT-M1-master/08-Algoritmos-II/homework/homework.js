'use strict'



// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length<=1){return array}
  let pivot=array[0]
  let left=[]
  let right=[]
  let equal=[]
  for(let i=0;i<array.length; i++){
    if(array[i]<pivot)left.push(array[i]);
    else if(array[i]>pivot)right.push(array[i]);
    else equal.push(array[i]);
  }
  
  return quickSort(left).concat(equal).concat(quickSort(right));
  }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1){return array}
  //slice copia una parte de un array poniendo principio y fin
  const medio = Math.floor(array.length/2);
  //slice copia una parte de un array poniendo principio y fin
  const array1 = array.slice(0,medio);
  const array2 = array.slice(medio);
  return merge(mergeSort(array1),mergeSort(array2))
  
  }
  
function merge(array1,array2) {
  let aux=[]
  while(array1.length && array2.length){
    if(array1[0] > array2[0]){
      //shift borra por indice
      aux.push(array2.shift())
    }else {
      aux.push(array1.shift())
    }
  }
  //copia parte de un array y lo adiciona a otro
  return aux.concat(array1,array2);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
