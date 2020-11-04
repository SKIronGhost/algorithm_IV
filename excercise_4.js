// Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
function removerRango(x,a,b){
  z=[]
  for(i=0;i<x.length;i++){
    if(i<a || i>b)
    z.push(x[i])
  }
  return z;
}
console.log(removerRango([20,30,40,50,60,70],2,4));
