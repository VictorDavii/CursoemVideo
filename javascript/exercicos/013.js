//Calcular a média de todos os números de um array 


function PositiveNumber(n = []){
    var soma = 0 
    var media = 0 
    for(var i = 0; i < n.length; i++){ 

       soma += n[i]
       
       
    }
    
    return media = (soma / n.length)
}

var numeros = [2, 3, 6, -8, 9]

console.log(`MédiaArray: ${PositiveNumber(numeros)}`)  