//Localizar o maior valor dentro de um array de números.


function localizarMaior(n = []){
 
    var maxNumber = 0;
    for(var i = 0; i < n.length; i++){

        if(maxNumber < n[i]){
            maxNumber = n[i]
        }
    }

    return maxNumber
}

var arrayNumber = [10, 6, 6 ,8, 9, 11]

console.log(`O maior número do array: ${localizarMaior(arrayNumber)}`)



