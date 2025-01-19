//var keyword
var a = 10;
function fun(){
    var b = 20;
    console.log("fun a = " + a);
    console.log("fun b = " + b);
    console.log("fun c = " + c);
}

console.log("a = " + a);
// console.log("b = " + b);     // Error
console.log("c = " + c);
fun();
var c = 30;