//Calcular a soma de todos os dígitos de um número inteiro positivo.



function somaDigito(n){

  var ntoString = n.toString()
  var numberAdd = 0 
  
  for(var char of ntoString){ 
  
     var numberNow = parseInt(char)
  
     numberAdd += numberNow
  
  }
  return numberAdd
}

console.log(somaDigito(58912))