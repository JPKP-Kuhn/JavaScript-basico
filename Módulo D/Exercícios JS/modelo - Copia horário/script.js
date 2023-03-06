function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manhã (imagem web).png'
        document.body.style.background = 'gray' //Ou código hexadecimal da cor
    } else if (hora >=12 && hora <18) {
        //Boa tarde
        img.src = 'tarde (imagem web).png'
        document.body.style.background = '#5C4033'
    } else {
        //Boa noite
        img.src = 'noite (imagem web).png'
        document.body.style.background = '#474A51'
    }
}