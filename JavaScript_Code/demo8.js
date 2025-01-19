//types of methods in javascript

//1. no parameter + no return value
function add(){
    num1 = 10
    num2 = 5
    res = num1 + num2
    console.log("Sum = " + res)
}
add()   //function call

//2. parameter + no return value
function sub(num1, num2){
    res = num1 - num2
    console.log("Difference = " + res)
}
sub(50, 20)   //function call

//3. parameter + return value
function mul(num1, num2){
    res = num1 * num2
    return res
}
res = mul(20, 10)   //function call
console.log("Product = " + res)

//4. no parameter + return value
function div(){
    num1 = 10
    num2 = 3
    res = num1 / num2
    return res
}
res = div()   //function call
console.log("Quotient = " + res)