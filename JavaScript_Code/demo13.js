// overloading a function in javascript

// approach 1- not working approach
// function add(a, b){
//     return (a+b);
// }

// function add(a, b, c){
//     return (a+b+c);
// }

// function add(a, b, c, d){
//     return (a+b+c+d);
// }

// solution of function overloading in js using arguments
function add() {
    sum = 0;
    for(i of arguments){
        sum = sum + i;
    }
    return sum;
}
console.log(add(10,20));
console.log(add(10,20,30));
console.log(add(10,20,30,40));