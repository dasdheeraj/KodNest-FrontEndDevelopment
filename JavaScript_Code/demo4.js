// array creation in javascript

a = [10, 20, 30]
console.log(a)

b = [11, true, 'js']
console.log(b)

c = new Array(101, 202, 303);
console.log(c);

// Arrays are data structures which can be used to store data. 
// In javascript Arrays are capable of storing hetrogenious data.

// Creating array elements 
d = [10, 20, 30, 40, 50]
console.log("length of array d : " + d.length);
console.log("d : "+ d);

// Accessing array elements 
console.log("d[0] : "+ d[0]);
console.log("d[3] : "+ d[3]);
console.log("d[6] : "+ d[6]);

// Updating array elements
d[0] = 1001;
console.log("updated d[0] : " + d[0]);
// adding new array element
d[5] = 5005;
console.log("d[5] : " + d[5]);
d[5] = 1010;
console.log("d[5] : " + d[5]);

console.log("****************************************************");
// traversing array using for loop
for(i = 0; i<d.length; i++){
    console.log(d[i]);
}

console.log("****************************************************");

for(el of d){
    console.log(el);
}

console.log("****************************************************");
// using js functions in array
arr = [101, 102, 103, 104, 105, 106];
// to get the index of an element
console.log(arr.indexOf(103));
// to add new element in the array
console.log(arr.push(107, 108));
// to remove an element from array 
console.log(arr.pop(107));

arr.push(99);
console.log("arr after push operation : "+ arr);

arr.pop();
console.log("arr after push operation : "+ arr);
console.log("****************************************************");

console.log("index of 102 : " + arr.indexOf(102));
console.log("index of 200 : " + arr.indexOf(200));

console.log("****************************************************");

// adds element at beginning
arr.unshift(10001);
console.log("arr after unshift operation : " + arr);
// removes first element
arr.shift();
console.log("arr after shift operation : " + arr);

console.log("****************************************************");

// reverse the elements of an array
arr1 = [1001, 1002, 1003, 1004, 1005];
console.log("original array : "+ arr1);
revArr = new Array();
i = arr1.length-1;
for(elem of arr1){
    revArr[i] = elem;
    i--;
}
console.log("reversed array : "+ revArr);

console.log("****************************************************");

arr2 = [10, 20, 30, 40, 50];
revArr2 = [];
idx = 0;
for(i = arr2.length-1; i>=0; i--){
    revArr2[idx] = a[i];
    idx++;
}
console.log("original array : "+ arr2);
console.log("reversed array : "+ revArr2);

console.log("****************************************************");