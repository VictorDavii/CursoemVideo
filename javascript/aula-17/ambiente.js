let aluno = [10, '23', 'Ricardo']

/*
Aqui vimos um pouco de Object, isso nós mostra que a muito o que aprender, e devemos nos manter constante no aprendizado.
*/
let amigo = {
    nome: 'José' ,
    sexo: 'M' ,
    peso: 85.3 , 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p 
    }
}

amigo.engordar(4)
console.log(`${amigo.nome} Pesa ${amigo.peso}Kg`)