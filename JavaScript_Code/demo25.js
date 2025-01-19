//first version
arr = [15,10,25,5,20];
double = function(drr){
    for(i=0; i<drr.length; i++){
        drr[i] = drr[i] * 2;
    }
    return drr;
}
console.log(double(arr));

arr = [15,10,25,5,20];
even = function(arr){
    ev = []
    for(i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            ev.push(arr[i]);
        }
    }
    return ev;
}
console.log(even(arr));

arr = [15,10,25,5,20];
sum = function(arr){
    s = 0;
    for(i=0; i<arr.length; i++){
        s = s + arr[i];
    }
    return s;
}
console.log(sum(arr));
console.log();

//second version: using predefined keywords
//using map function
arr = [15,10,25,5,20];
double = arr.map(num => num*2);
console.log(double);

arr = [15,10,25,5,20];
square = arr.map(num => num*num);
console.log(square);

arr = [15,10,25,5,20];
ev = arr.map(num => num%2 == 0);
console.log(ev);

// using filter() function
arr = [15,10,25,5,20];
even = arr.filter(num => num%2 == 0);
console.log(even);

//other approach
arr = [15,10,25,5,20];
isEven = (num) => num%2 == 0;
evens = arr.filter(isEven);
console.log(evens);

//reduce() function
arr = [15,10,25,5,20];
sum = arr.reduce((s, num) => s+num, 0);
console.log(sum);

//find the highest number of array using reduce()