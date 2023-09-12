var data = new Date()
var Years = data.getFullYear()
var enviar = document.querySelector('input#button')

enviar.addEventListener('click', ()=>{

    var nascimento = document.querySelector('input#nascimento').value
    var idade = Years - Number(nascimento)  

    var textResultado = document.querySelector('div#text-Resultado')

    if(nascimento.length == 0 || nascimento > Years || nascimento <= 1903){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }
    else 
    {

        var image = document.getElementById('resultado')
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        //Uma criança 
        if(idade > 1 && idade <= 14){
            if( sexo[0].checked){
                //masculino 
                image.src = 'img/bart.webp'
                genero = 'um garoto'
            }
            else if(sexo[1].checked){
                //feminino 
                image.src = 'img/lisa.webp'
                genero = 'uma garota'
            }  
            textResultado.innerHTML = `Identificamos ${genero} com idade de ${idade} anos.`
        }  
        //adolescente
        else if(idade > 12 && idade <= 18){
            if( sexo[0].checked){
                //masculino 
                image.src = 'img/adolescent-bart.jpg'
                genero = 'um rapaz'
            }
            else if(sexo[1].checked){
                //feminino 
                image.src = 'img/adolescent-lisa.png'
                genero = 'uma moça'
            }
            textResultado.innerHTML = `Identificamos ${genero} com idade de ${idade} anos.`  
        }
        //adulto
        else if(idade > 18 && idade <= 59){
            if( sexo[0].checked){
                //masculino 
                image.src = 'img/adulto.webp'
                genero = 'um homem'
            }
            else if(sexo[1].checked){
                //feminino 
                image.src = 'img/adulta.png'
                genero = 'uma mulher'
            }  
            textResultado.innerHTML = `Identificamos ${genero} com idade de ${idade} anos.`
        }
        //Idoso
        else{
            if( sexo[0].checked){
                //masculino 
                image.src = 'img/avô.jpg'
                genero = 'um idoso'
            }
            else if(sexo[1].checked){
                //feminino 
                image.src = 'img/avó.webp'
                genero = 'uma idosa'
            }
            textResultado.innerHTML = `Identificamos ${genero} com idade de ${idade} anos.`  
        }

       }

    })


