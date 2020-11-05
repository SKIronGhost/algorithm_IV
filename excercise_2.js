//Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
var array = [3,5,1,7];

function printValues(x){ 
  var a=0
  var b=x[0]
  var sum=0
  for (i=0; i<x.length; i++) {
    sum = sum + x[i];
    if(a<x[i]){
        a=x[i]
    }
    if(x[i]<b){
      b=x[i];
    }
  }
    avg = sum/x.length;
    console.log(a);
    console.log(b);
    return avg;
    
  }
console.log(printValues(array));
