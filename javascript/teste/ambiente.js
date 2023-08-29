let listaDeAprovados = [
    'ada.lovelce@gmail.com',
    'camachoVictor@gmail.com',
    '113daviiicamacho@hotmail.com',
    'robertoFirme@meteoloko.com'
];

const enviarEmail = (email) => {
    console.log(`email para ${email} foi envaido com sucesso!`);  
};

listaDeAprovados.forEach((item, position, lista) =>{
    enviarEmail(item);
    console.log(`Sua posição na fila é: ${position}`)
    console.log(`A quantidade de pessoas na lista é de: ${lista.length}`)
});


