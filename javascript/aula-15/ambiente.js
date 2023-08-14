// let num = [2, 5, 8, 1, 3]


// for(let i = 0; i < num.length ; i++){
//     var numero = num[i]
//     console.log(`Posição ${i} valor : ${num[i]}`)
// }
//percursos para exibições em vetores/Arrays

let num = [10, 300, 40]
num.sort()
console.log(num)

for(let i in num){
    console.log(`Posição ${i} valor : ${num[i]}`)
}

let n = num.indexOf(4)
if(n == -1){
    console.log('valor não encontrado !')
}
else{
    console.log(`${n}`)
}



