//regular function
function add(a,b){
    sum = a+b;
    return sum;
}
function sub(a,b){
    console.log(a-b);
}
function div(a,b){
    return a/b;
}
console.log(add(10,5));
sub(10,5);
console.log(div(10,5));
console.log();

//arrow function
add = (a,b) => {
    sum = a+b;
    return sum;
}
console.log(add(10,5));

sub = (a,b) => console.log(a-b); //single line function
sub(10,5);

div = (a,b) => {
    return a/b;
}
console.log(div(10,5));

console.log();
//other approach in a single line: it has only return statement so it can be in a single line
div = (a,b) => a/b; //single line function
console.log(div(10,5));