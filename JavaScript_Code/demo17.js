//Difference between regular function and arrow function

// Example 1 : regular function
function fun(){
    console.log("fun executing")
}
fun();

// convert regular function into arrow function
//arrow function 
arr = () =>{
    console.log("arrow executing")
}
arr();

// ==============================

// Example 2 : regular function
function add(a,b){
    sum = a+b;
    return sum;
}
console.log(add(5,10));

// convert regular function into arrow function
//arrow function 
s = (a,b) => {
    sum = a+b;
    return sum;
}
console.log(s(5,10));

// Example 3 : arrow function : spread operator - Allowed
s1 = (...args) => {
    sum = 0;
    for(i of args){
        sum = sum + i;
    }
    return sum;
}
console.log(s1(10,20));
console.log(s1(10,20,30));
console.log(s1(10,20,30,40));

// Example 4 : arrow function : arguments - NOT Allowed
// s4 = () => {
//     sum = 0;
//     for(i of arguments){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(s2(10,20));
// console.log(s2(10,20,30));
// console.log(s2(10,20,30,40));



// Difference between regular function and arrow function

// we can call a regular function before or after its declaration
// we can call an arrow function after its declaration but not before its declaration

//hoisting
//regular functions
// fun();
function fun(){
    console.log("regular function executing")
}
fun();

//arrow functions
// arr(); // error
arr = () => {
    console.log("arrow function executing")
}
arr();