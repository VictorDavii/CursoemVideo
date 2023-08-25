var gerarTabuada = document.querySelector('input#buttonGerar')

gerarTabuada.addEventListener('click', ()=>{

    var numero = document.querySelector('input#numero').value 

    if(numero == 0 || numero.length == 0){
        alert('O campo esta vazio preecha com um número que não seja o zero(0) !')
    }
    else{
        var resposta = document.getElementById('resultado')
        var soma = 0
        for(var i = 0 ; i <= 10; i++){
             soma = (numero)*i
             resposta.innerHTML += `<option class="valor">${numero} X ${i} = ${soma}</option>$ `
         }
    }
})
