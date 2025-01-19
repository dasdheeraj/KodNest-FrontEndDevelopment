//const keyword
const a = 10;
function fun(){
    const b = 20;
    console.log("fun a = " + a);
    // console.log("fun b = " + b);     // Error
    // console.log("fun c = " + c);     // Error
}

console.log("a = " + a);
// console.log("b = " + b);     // Error
// console.log("c = " + c);     // Error
fun();
const c = 30;