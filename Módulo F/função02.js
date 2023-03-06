function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(2, 5))
/* se não colocar um dos parâmetros ele fica como undefined
e 2 + undefined == NaN
colocando =0 nos parâmetros formais, eles então serão 0 se não forem 
definidos nos parâmetros reais */