// different way to create object 

//approach1
st1 = new Object();
st1.roll = 101
st1.name = 'Mahesh'
st1.cgpa = 7.5

console.log(st1);
// console.log('roll : ' + st1.roll)
// console.log('name : ' + st1.name)
// console.log('cgpa : ' + st1.cgpa)

//approach2
st2 = {
    roll : 202,
    name : 'Rakesh',
    cgpa : 8.2
}


console.log(st2);
// console.log('roll : ' + st2.roll)
// console.log('name : ' + st2.name)
// console.log('cgpa : ' + st2.cgpa)

// using function to remove code redundancy
function accessStudent(st){
    console.log('roll : ' + st.roll)
    console.log('name : ' + st.name)
    console.log('cgpa : ' + st.cgpa)
}

// calling the function
accessStudent(st1)
accessStudent(st2)

function multiply(num1, num2){
    prod = num1 * num2
    return prod
}
res = multiply(10,20)
console.log(res)

