let listaDeAprovados = [
    'ada.lovelce@gmail.com',
    'camachoVictor@gmail.com',
    '113daviiicamacho@hotmail.com',
    'robertoFirme@meteoloko.com'
];

//função enviar o email
const enviarEmail = (email) => {
    console.log(`email para ${email} foi envaido com sucesso!`);  
};

//varrendo o objeto, para cada elemento vai ser enviando a função acima.
listaDeAprovados.forEach((item) =>{
    enviarEmail(item);
});


