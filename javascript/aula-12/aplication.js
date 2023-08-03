/*
Exercício: Vai pegar o nome, idade e o horário do usuário. nome para direcionar uma conversa particular e o horário que essa pessoa deita. para entregar quantas horas dormir e que horas acordar.
*/
var buttonhours = document.querySelector('input#buttonHours')


buttonhours.addEventListener('click', ()=>{
    
    var campohours = document.querySelector('input#hours').value
    var resp = document.getElementById('res')
    var nome = document.querySelector('input#nome')
    var TextIdade = document.querySelector('input#idade')
    
    var idade = Number(TextIdade.value)
    var timeComponents = campohours.split(':')


    var totHours = setHours(idade, timeComponents)
    
    resp.innerText = `Aqui ${totHours}`
    
    
    
})


function setHours(idade, timeComponents){

    var hours = parseInt(timeComponents[0], 10);
    var minutes = parseInt(timeComponents[1], 10);

    if(idade < 12 || idade >= 60){

        var quantTime = 10

        
        hours += quantTime

        if(hours >= 24){

            var div = hours

            hours = div % 24 
        }
    }
    else{

        var quantTime = 8

        hours += quantTime 

       

        if(hours > 24){

            var div = hours

            hours = div % 24 

        }
        
        
    }

    var totHours = hours + (minutes / 100)


    return totHours
}




