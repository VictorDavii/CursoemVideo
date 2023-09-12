//data base

//geralmente usa o requise para trazer o Data Base para manipular 
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

    //Js quando referenciamos um atributo que não existe como 'valorComDesconto', ele automaticamente cria esse atributo dentro do objeto referenciado 'AtualProduto'.

    atualProduto.valorComDescontado = atualProduto.valorProduto - (atualProduto.porcentagemDesconto * atualProduto.valorProduto); 
    
    return produtos

})

console.log(produtos)