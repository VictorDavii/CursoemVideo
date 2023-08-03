var agora = new Date()
var diaSem = agora.getDay()

/*
Dia da semanas vai dar resultados em Number sendo: 

0 = Domingo 
1 = Segunda 
2 = Terça 
3 = Quarta 
4 = Quinta
5 = Sexta

*/
var semana = ''
switch (diaSem) {
    case 0:
        semana = 'Domingo'
        break;
    case 1:
        semana = 'Segunda'
        break;
    case 2:
        semana = 'Terça'
        break;
    case 3:
        semana = 'Quarta'
        break;  
    case 4:
        semana = 'Quinta'
        break;
    case 5:
        semana = 'Sexta'
        break;  
    case 6:
        semana = 'Sábado'
        break;     
             
    default:
        semana = 'ERROR'
        break;
}


console.log(`Hoje é dia ${diaSem} No jS.`)
console.log(`Já para nós isso implica que é ${semana}.`)


