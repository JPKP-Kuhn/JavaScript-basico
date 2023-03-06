window.alert('Olá, bem vindo à imersão Dev da Alura')
let valorBRL = document.querySelector('input#txtBRL')
let nome = document.querySelector('input#nametxt')
let cotdollar = 5.06

function nomear(){
    if(nome.value.length == 0){
        window.alert('Coloque um nome!')
    } else{
    res.innerHTML = `Olá ${nome.value}`
    }
}
function dolar(){
    if(valorBRL.value.length == 0){
        window.alert('Escolha um valor!')
    } else{
        let BrtoUS = valorBRL.value / cotdollar
        dres.innerHTML = `U$ ${BrtoUS.toFixed(2)}`
    }
}