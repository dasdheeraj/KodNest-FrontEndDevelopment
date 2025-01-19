//high order function
x = function(){
    console.log("x is executing");
}

function y(fun){
    fun();
    console.log("y is executing");
}
y(x);

z = (fun) => {
    fun();
    console.log("z is executing");
}
z(x);
