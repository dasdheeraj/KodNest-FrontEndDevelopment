//callback functions
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

//high order function
function calculate(a, b, op){
    res = op(a,b);
    console.log(res);
}
calculate(10, 5, add);
calculate(20, 10, sub);