
var enviarContagem = document.querySelector('input#button')

enviarContagem.addEventListener('click', ()=>{

    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)

    if(inicio.length == 0 || fim.length == 0){
        alert('[Error] Verifique os dados novamente !')
    }
    else if(inicio == fim ){
        alert('Não a diferença para conta')
    }
    else if(passo == 0){
        alert('Passo = 0. Vamos considerar pulando de 1 em 1.')
        passo = 1
    }
    else{
        
        var resultado = document.querySelector('div#Resultado')    
        resultado.innerHTML = `<h3>Contando: </h3>`

        if(inicio < fim){
            for(var i = inicio; i <= fim; i += passo){
               resultado.innerHTML += `${i} `
               resultado.innerHTML += `<i class="fa-solid fa-hand-point-right"></i>`
            }
        }
        else if(inicio > fim){
           for(var i = inicio; i >= fim; i -= passo){
               resultado.innerHTML += ` ${i} `
               resultado.innerHTML += `<i class="fa-solid fa-hand-point-right"></i>`
           }
           
        }

        resultado.innerHTML += `<i class="fa-solid fa-flag-checkered"></i>`
    }
})
