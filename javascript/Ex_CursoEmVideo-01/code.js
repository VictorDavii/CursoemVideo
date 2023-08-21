
function carregar(){

    var date = new Date()
    var hora = date.getHours()

    var msg = document.querySelector('div#horas')
    var img = document.getElementById('imagem')

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        document.body.style.backgroundColor = 'rgb(212, 195, 98)'
        img.src = 'img/morning.png'
    }
    else if(hora <= 16 ){
        //BOA TARDE
        document.body.style.backgroundColor = 'orange'
        img.src = 'img/evening.jpg'
    }
    else{
        //BOA NOITE
        document.body.style.backgroundColor = ' rgb(124, 109, 109)'
        img.src = 'img/night.jpg'
    }

}

var loading = document.body 
loading.addEventListener('onload', carregar())