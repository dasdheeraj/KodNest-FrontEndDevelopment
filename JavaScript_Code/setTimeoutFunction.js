// setTimeout function

//way 1
function fun1(){
    console.log("fun1() is executing!");
}
console.log("program execution has started");
setTimeout(fun1,3000);

//way 2
setTimeout(function fun2(){
        console.log("fun2() is executing!");
    }
    ,3000);

//way 3
setTimeout(function (){
        console.log("fun3() is executing!");
    }
    ,3000);

//way 4
setTimeout( () => {
        console.log("fun4() is executing!");
    }
    ,3000);

//way 5
f5 = function fun5(){
    console.log("fun5() is executing!");
}
setTimeout(f5, 3000);

//call fun1 after 3 sec of execution start and fun2 after 6 sec
//approach1
setTimeout(function fun6(){
    console.log("fun6() is executing!");
}
,3000);

setTimeout(function fun7(){
    console.log("fun7() is executing!");
}
,6000);


//approach2
function fun8(){
    console.log("fun8() is executing!");
    setTimeout(fun9,3000);
}

function fun9(){
    console.log("fun9() is executing!");
}
setTimeout(fun8,3000);


//approach3
function fun10(){
    console.log("fun10() is executing!");
}

function fun11(){
    console.log("fun11() is executing!");
}
setTimeout(fun10,3000);
setTimeout(fun11,6000);

//approach4
setTimeout(function(){
    console.log("fun1");
    setTimeout(function(){
        console.log("fun2");
    }, 3000);
}, 3000);


//call placeOrder after 3 sec of execution start, makePayment after 6 sec and deliverProduct after 9 sec
//approach1
function placeOrder(){
    console.log("placeOrder() is executing!");
}
function makePayment(){
    console.log("makePayment() is executing!");
}
function deliverProduct(){
    console.log("deliverProduct() is executing!");
}
setTimeout(placeOrder,3000);
setTimeout(makePayment,6000);
setTimeout(deliverProduct,9000);

//approach2
placeOrder = function(){
    console.log("Order placed successfully!");
}
makePayment = function(){
    console.log("Payment successful!");
}
deliverProduct = function(){
    console.log("Product delivered successfull!");
}
setTimeout(placeOrder,3000);
setTimeout(makePayment,6000);
setTimeout(deliverProduct,9000);

//approach3 
//callback hell or Pyramid of doom in js
setTimeout(function(){
    console.log("Order placed successfully!");
    setTimeout(function(){
        console.log("Payment successful!");
        setTimeout(function(){
            console.log("Product delivered successfull!");
        },3000);
    },3000);
},3000);
