//Difference between regular function and arrow function

//'this' keyword in javascript

//regular function
st1 = {
    roll : 101,
    name : 'deep',
    info : function(){
        console.log('regular info function')
        console.log(this.roll + " " + this.name);
        console.log(this);
    }
}
st1.info();

//arrow function
st2 = {
    roll : 202,
    name : 'pradeep',
    info : () => {
        console.log('arrow info function')
        console.log(this.roll + " " + this.name);
        console.log(this);
    }
}
st2.info();

// Note :
// inside a regular function declared for an object we can use 'this' keyword to refer to the current object 
// and hence access the properties of that object.
// where as inside an arrow function 'this' keyword cannot be used to access the current object containing the arrow function.