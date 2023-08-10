// Calcular a soma dos números de um array de qualquer tamanho. 

function somaNumeros(numeros){
    var soma = 0
    for(var i = 0; i < numeros.length; i++){

    soma += numeros[i]

    }
    var media = soma / numeros.length 
    return media.toFixed(2)
}

var numeros = [3,5,8] 

console.log(somaNumeros(numeros))