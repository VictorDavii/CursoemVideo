var idade = 66 

console.log(`Você tem ${idade} Anos de idade.`)
if(idade < 16){
    console.log('Não pode Votar!')
}
else if(idade < 18 || idade > 65){
    console.log('Voto Opcional !')
}
else{
    console.log('Voto Obrigatório!')
}

