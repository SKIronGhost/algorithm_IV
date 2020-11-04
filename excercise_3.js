// Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
function reemplazarNegativos (x){
  for(i=0;i<=x.length;i++)
  if(x[i]<0){
    x[i]="Dojo";
  }
  return x;
}

console.log(reemplazarNegativos([1,2,-3,-5,5]));