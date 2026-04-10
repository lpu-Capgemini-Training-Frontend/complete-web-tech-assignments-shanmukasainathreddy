/*
Find a factorial of a number using recursive function
*/

function fact(number){
    if(number == 0 || number ==1) return number
    return number * fact(number-1)
}

let res = fact(5)

console.log(res)

