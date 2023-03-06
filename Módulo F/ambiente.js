//variáveis compostas
let num = [5, 2, 9, 1]
num.push(3) //coloca no final da array
let val = num.indexOf(9)
console.log(`O valor 9 está na posição ${val}`)
num.sort() //ordem crescente
num.push(0)
num.push(7)
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`Esse vetor tem ${num.length} posições`)
console.log(`O primeiro elemtento é ${num[0]}`)
console.log(`O segundo elemento é ${num[1]}`)
for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
for(let pos in num){ //essa sintaxe do for só funciona para objetos(arrays são estes)
    console.log(num[pos])
}
let nov = num.indexOf(9)
console.log(`O valor 9 agora está na posição ${nov}`)