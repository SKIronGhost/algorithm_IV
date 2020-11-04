//Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.
var array = [3,5,1,7];

var y = 4;

function printHigher (x){ 
  for (i = 0; i<x.length; i++) {
    if (x[i]>y) {
      console.log (x[i])
    }
  }
}

printHigher (array);