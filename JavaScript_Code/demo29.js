
setTimeout(function(){
    console.log("Order placed successfully!");
    setTimeout(function(){
        console.log("Payment successful!");
        setTimeout(function(){
            console.log("Product delivered successfull!");
        },3000);
    },3000);
},3000);
