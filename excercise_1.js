//Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.
var array = [3,5,1,7];


function printHigher(x){ 
  var y = 4;
  var qty = 0;

  for (i= 0; i<x.length; i++) {
    if (x[i]>y) {
      qty = qty+1;
    }
    
  }
  return qty;
} 

console.log(printHigher(array));