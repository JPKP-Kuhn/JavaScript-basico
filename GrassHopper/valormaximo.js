var list = [63, 19, 104, 49, 28]
function larger(a,b){
    return a > b ? a : b
}
function maximum(array){
    let max = 0
    for (let num of array){
        max = larger(max,num)
    }
    return max
}
console.log(list)
console.log(maximum(list))