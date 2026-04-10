// High order Function  & Call back Function

// Ques -> Create a calculator that receives multiple values and perform addition , subtraction , multiplication , division , concatination

//Here calculator is high order work
//      dowork is callbackfunction which is passed as an argument for high order function

function calculator(val1,val2,dowork){
    return dowork(val1,val2)
}
let addition = calculator(10,20,(a,b)=>(a+b))
let subtraction = calculator(10,5,(a,b)=>(a-b))
let multplication = calculator(10,5,(a,b)=>(a*b))
let division = calculator(10,2,(a,b)=>(a/b))
let concatination = calculator("Mr.","Dingaa",(a,b)=>(a+b))

console.log(addition)
console.log(subtraction)
console.log(multplication)
console.log(division)
console.log(concatination)
