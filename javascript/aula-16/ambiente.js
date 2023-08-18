function regreess(n){ // (n) Parâmetro

    console.log(n) // {bloco} - Ação  

    let nextNumber = n - 1
    
    if(nextNumber > 0){
        regreess(nextNumber) //chamada / return a própria função
    }
    else
    'ERROR' 

}

regreess(4)

let newYearCountDown = regreess

regreess = null 

newYearCountDown(10)