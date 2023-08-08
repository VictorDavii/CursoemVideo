// exercício 1° 
// for(var i = 1; i <= 10; i++){
//     console.log(i)
// }

//exercício 2° // Números ímpares
// for(var i = 1; i < 100; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }


// exercício 3° //Tabuada do 8 
// for(var i = 0; i <= 10; i++){

//     var valor = 8 * i 
//     console.log(`8 X ${i} = ${valor}`)
// }

// exercício 4° //Tabuada do 1 ao 10  
// for(var y = 1; y <= 10; y++){

//     for(var x = 0; x <= 10; x++){
//         var total = y * x 
//         console.log(`${y} X ${x} = |${total}|`)
//     }
// }

// exercício 5° // Soma de números de 1 a 10  
// var soma = 0 
// for(var i = 1; i <= 10; i++){
//     soma += i
//     console.log(soma)
// }

// exercício 6° //Calculado o fatorial de 10 
// var numero = 1
// for(var i = 1; i <= 10; i++){
    
//     numero *= i
// }
// console.log(numero)

// exercício 7° //function que trás a porcentagem de qualquer número. 
console.log(porcentagem(78, 50))

function porcentagem(n, por){
    
    return (n/100)*por

}