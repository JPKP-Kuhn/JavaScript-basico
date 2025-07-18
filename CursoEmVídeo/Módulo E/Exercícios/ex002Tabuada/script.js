function Tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor digite um número')
    } else{
        let n = Number(num.value)
        
        tab.innerHTML = ''
        for(let c =1; c<=10; c++){
            let item = document.createElement('option') //option de forma dinâmica
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        
        }
    } //com while, crio let c antes do for e no final coloco c++
}