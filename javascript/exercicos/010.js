// Calcular a soma dos números de um array de qualquer tamanho. 

function somaNumeros(numeros){
    var soma = 0
    for(var i = 0; i < numeros.length; i++){

    soma += numeros[i]

    }
    return soma
}

var numeros = [2, 5, 6, 2, 3, 9, 2] 

console.log(somaNumeros(numeros))