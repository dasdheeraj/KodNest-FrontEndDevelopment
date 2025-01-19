//Program flow in javascript

//Example 1
//first- declaration
var a = 10;
function fun(){
    console.log("fun is executing");
}
//later- accessing
console.log(a);
console.log(fun);

console.log();

//Example 2
//first- accessing
console.log(b);     //undefined
console.log(funb);  //function info
//later- declaration
var b = 10;
function funb(){
    console.log("funb is executing");
}

console.log();

//Example 3
//first- accessing
console.log(c);     //Error: not defined
console.log(func);  //Error: not defined
//later- declaration: commented function
// var c = 10;
// function func(){
//     console.log("func is executing");
// }

