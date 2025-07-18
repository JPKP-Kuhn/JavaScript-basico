const argumentValue = process.argv[2] //Twilioquest 
const numberValue = Number(argumentValue)
function parimp (n){
    if(n%2==0){
        return 'par'
    } else{
        return 'ímpar'
    }
}
console.log(parimp(numberValue))
/*let res = parimp(numberValue)
console.log(res) */
