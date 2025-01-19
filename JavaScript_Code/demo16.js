//factorial programs using recursion

f = function factorial(num){
    if(num==1){
        return 1;
    }
    return num*factorial(num-1);
}
console.log(f(5));
console.log(f(7));

// console.log(factorial(5));
// console.log(factorial(7));
// when we are dealing with function expressions, we will be able to access the function by using the variable to which the function has been assigned.
// However the function name will have the scope only inside the function and will not be accessible outside the function's scope.
