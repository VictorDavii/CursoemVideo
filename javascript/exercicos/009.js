//Criar uma função que converta uma temperatura de Fahrenheit para Celsius 

function FahrenheitToCelsius(n){

    var Celsius = 0 

    Celsius = (n - 32) / 1.8 

    return Celsius.toFixed(2)
}

console.log(FahrenheitToCelsius(33))