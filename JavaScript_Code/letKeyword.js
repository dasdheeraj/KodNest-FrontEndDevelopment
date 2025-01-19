//let keyword
let a = 10;
function fun(){
    let b = 20;
    console.log("fun a = " + a);
    console.log("fun b = " + b);
    // console.log("fun c = " + c);     // Error
}

console.log("a = " + a);
// console.log("b = " + b);     // Error
// console.log("c = " + c);     // Error
fun();
let c = 30;