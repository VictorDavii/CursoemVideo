// Criar uma função que receba como parâmetro um array de números e retorne um array
// contendo somente números positivos. 

function PositiveNumber(n = []){
    var positivos = [] 
    var c = 0
    for(var i = 0; i < n.length; i++){ 

        if(n[i] >= 0){
            
            positivos[c] = n[i]
            c++
        }
       
    }
    return positivos
}

var numeros = [2, 3, 6, -8, 9]

console.log(PositiveNumber(numeros))  