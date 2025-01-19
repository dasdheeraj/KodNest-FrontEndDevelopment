// spread operator 
// solution of function overloading in js using spread operator
function add(...args) { // args is keyword you can write anything 
    sum = 0;
    for(i of args){
        sum = sum + i;
    }
    return sum;
}
console.log(add(10,20));
console.log(add(10,20,30));
console.log(add(10,20,30,40));