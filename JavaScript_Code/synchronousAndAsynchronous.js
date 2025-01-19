//sysnchronous
console.log("Instruction 1");
console.log("Instruction 2");
console.log("Instruction 3");

//asynchronous
console.log("Instruction 101");
function fun(){
    console.log("Instruction 202");
}
setTimeout(fun, 3000);
console.log("Instruction 303");
