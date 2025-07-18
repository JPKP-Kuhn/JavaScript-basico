var agora = new Date() //pega o tempo do PC
var hora = agora.getHours() //Seleciona as horas

console.log(`São ${hora} horas`)
if( hora >=5 && hora <= 12){
    console.log('Bom dia!')
} else if(hora > 12 && hora <= 18){
    console.log('Boa tarde!')
}else if(hora > 18 && hora <= 24){
    console.log('Boa noite!')
} else if(hora >= 0 && hora < 5){
    console.log('Boa madrugada')
}