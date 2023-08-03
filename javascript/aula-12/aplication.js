/*
Exercício: Vai pegar o nome, idade e o horário do usuário. nome para direcionar uma conversa particular e o horário que essa pessoa deita. para entregar quantas horas dormir e que horas acordar.
*/
var buttonhours = document.querySelector('input#buttonHours')


buttonhours.addEventListener('click', ()=>{
    
    var campohours = document.querySelector('input#hours').value
    var resp = document.getElementById('res')
    var nome = document.querySelector('input#nome')
    var idade = Number(document.querySelector('input#idade')).value

    var timeComponents = campohours.split(':')
    
    var hours = parseInt(timeComponents[0], 10);

    if(idade < 12 || idade >= 60){

        var quantTime = 10

        
        hours += quantTime

        if(hours >= 24){

            var div = hours

            hours = div % 24 

        }

        resp.innerHTML = `<h1>Olá ${nome.value}</h1>`

        resp.innerHTML += `Para a idade ${idade}, a quantidade de sono vai ser de pelo menos ${quantTime} por dia.` 

        resp.innerHTML += `<br> O horário que você deve acordar é ${hours}`
        
    }
    else{

        var quantTime = 8

        hours += quantTime 

        if(hours >= 24){

            var div = hours

            hours = div % 24 

        }

        resp.innerHTML = `<h1>Olá ${nome.value}</h1> <br>`

        resp.innerHTML += `Para a idade ${idade}, a quantidade de sono vai ser de pelo menos ${quantTime} por dia. <br>` 

        resp.innerHTML += `O horário que você deve acordar é ${hours}`
        
    }
    
    /* 
    adicionar os segundos:

    - criar uma variável. 
    - Somar na variável hours

    */
})






