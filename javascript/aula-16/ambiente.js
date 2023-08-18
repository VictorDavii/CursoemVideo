// function regreess(n){ // (n) Parâmetro

//     console.log(n) // {bloco} - Ação  

//     let nextNumber = n - 1
    
//     if(nextNumber > 0){
//         regreess(nextNumber) //chamada / return a própria função
//     }
//     else
//     'ERROR' 

// }

// regreess(4)

// let newYearCountDown = regreess

// regreess = null 

// newYearCountDown(10) //TypeError: regreess is not a function
// /*
// O código causa um erro porque o corpo da função countDown() faz referência ao nome da função countDown que foi definido como null no momento da chamada da função.
// */

let countDown = function f(fromNumber){

    console.log(fromNumber)

    let nextNumber = fromNumber - 1 

    if(nextNumber > 0){
        f(nextNumber)
    }
    else
    'ERROR'
}

let newYearCountDown = countDown

countDown = null 

newYearCountDown(10)

