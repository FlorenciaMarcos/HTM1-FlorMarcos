var obj = {
       a: {
        a1: 10,
        a2: 'Franco',
        a3: {f: 'r', a: 'n', c: {o: true}}
      },
      b: 2,
      c: [1, {a: 1}, 'Franco']}
      
var countProps = function(obj) {
    // Tu código aca:
let contador=0 ;
for(const prop in obj){
    contador++;
    if(typeof obj[prop]==="objeto" && !Array.isArray(obj[prop])){
        contador+=countProps(obj[prop])
    }
}
return contador
}
 console.log(countProps(obj)) 
