// let listaDeAprovados = [
//     'ada.lovelce@gmail.com',
//     'camachoVictor@gmail.com',
//     '113daviiicamacho@hotmail.com',
//     'robertoFirme@meteoloko.com'
// ];

// const enviarEmail = (email) => {
//     console.log(`email para ${email} foi envaido com sucesso!`);  
// };

// listaDeAprovados.forEach((item, position, lista) =>{
//     enviarEmail(item);
//     console.log(`Sua posição na fila é: ${position}`)
//     console.log(`A quantidade de pessoas na lista é de: ${lista.length}`)
// });


let produtos = [

    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'Televisão',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    },
];

produtos.forEach((atualProduto) => {


    atualProduto.valorComDescontado = atualProduto.valorProduto - (atualProduto.porcentagemDesconto * atualProduto.valorProduto); 

    return produtos

})

console.log(produtos)