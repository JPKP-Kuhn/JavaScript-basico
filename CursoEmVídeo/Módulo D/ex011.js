const argumentValue = process.argv[2]
const numberValue = Number(argumentValue)

console.log(`Você tem ${numberValue} anos`)
if(numberValue < 16){
    console.log('Não vota')
}else if(numberValue < 18 || numberValue > 65){
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatório')
}
    