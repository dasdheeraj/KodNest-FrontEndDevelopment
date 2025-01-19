//closure
function outer(){
    console.log("outer is executing");
    function inner(){
        console.log("inner is executing");
    }
    return inner;
}
res = outer();
res();