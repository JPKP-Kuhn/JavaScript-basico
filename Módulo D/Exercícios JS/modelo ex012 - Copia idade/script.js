function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value == 0) { /*O JS sabe que 
    fano.value é Number */
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <12){
                //criança
                img.setAttribute('src', 'Homem criança.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'Homem jovem.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'Homem adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Homem idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <12){
                //criança
                img.setAttribute('src', 'Mulher criança.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'Mulher jovem.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'Mulher adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Mulher idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com  ${idade} anos.`
        res.appendChild(img)
    }
}