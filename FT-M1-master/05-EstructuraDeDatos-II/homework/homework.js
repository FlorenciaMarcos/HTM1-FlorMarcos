function LinkedList() {
  this.head=null
  this.size=0
}

function Node(value) {
this.value=value;
this.next=null;


}
// - add: agrega un nuevo nodo al final de la lista;

const newLink = new LinkedList()
LinkedList.prototype.add= function (value){
 //si la lista esta vacia
  let nodo1 = new Node(value);
  if(this.head===null){
      this.head=nodo1;
      this.size++
      return this.head
  }
  let current=this.head
  //si no esta vacia
  while(current.next){ 
      current=current.next
  }
  current.next = nodo1;
  this.size++
  return current.next
  
}
//- remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
LinkedList.prototype.remove= function(){
let removido= null
  //si esta vacia
if(!this.head){
      return this.head
  }
  //si tiene un nodo
  if(this.size===1){
      removido = this.head.value
      this.head = null
      this.size--
      return removido
  }
  let current=this.head
  let siguiente=this.head.next
// si tiene mas de un nodo
  while(siguiente.next){ 
      current=current.next
      siguiente = siguiente.next
  }
  console.log(siguiente)
  console.log(current)
 removido=siguiente.value
  current.next=null
  this.size--
return removido
}
//- search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
LinkedList.prototype.search=function(value){
  let current=this.head
  //lista vacia
  if(!this.head){
    return null
}
while(current){ 
  // si valor es una funcion
  if(typeof value === "function"){
    //la funcion que me pasa me devuelve un booleano
    //si me devuelve TRUE --- encontro el valor
    //la debo ejecutar con el valor del nodo 
    if(value(current.value)){
      return current.value
    }
  }
  

// si la lista no esta vacia cle
if(current.value===value) return current.value
current=current.next
}
return null
}
//funcion 

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBucets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
  
}


HashTable.prototype.set=function(key,value){
 if(typeof(key)!=="string") throw new TypeError ('Keys must be strings')
let index= this.hash(key) // this.hash retorna un numero entre 0 y 35

if(!this.buckets[index]){
  this.buckets[index]={}
}
this.buckets[index][key]=value

}

HashTable.prototype.get=function(key){
   let index= this.hash(key) 
     return this.buckets[index][key]
}

HashTable.prototype.hasKey=function(key){
  let index= this.hash(key) 
  return this.buckets[index].hasOwnProperty(key)
}

HashTable.prototype.hash=function(key){
 contador=0
 for(let i=0 ; i<key.length ; i++){
  contador =contador + key.charCodeAt(i)
 }
 return contador%this.numBuckets
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
