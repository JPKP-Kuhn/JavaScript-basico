/*
var numeroSecreto = parseInt(Math.random() * 1001)
//enquanto o chute for diferente do número secreto
while(chute != numeroSecreto){
    var chute = prompt('Digite um número entre 0 e 1000')
    //se o chute for igual ao número secrero
    if(chute == numeroSecreto){
        alert('Acertou!')
    } else if(chute > numeroSecreto){
        alert('Errou... o número secreto é menor')
    } else if (chute < numeroSecreto){
        alert('Errou... o número secreto é maior')
}
}
Código feito na aula, agora farei meu próprio*/
let chute =document.querySelector('input#chutetxt')
const numeroSecreto = parseInt(Math.floor(Math.random() * 1000 + 1))
chute.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        Tentativa()
    }
})

function Tentativa(){
    if(chute.value == 0){
        alert('Escolha algum valor')
    } else if(chute.value == numeroSecreto){
        res.innerHTML = 'Você acertou'
    } else if(chute.value > numeroSecreto){
        res.innerHTML = 'Errou... o número secreto é menor'
    } else if(chute.value < numeroSecreto){
        res.innerHTML = 'Errou... o número secreto é maior'
    }
}