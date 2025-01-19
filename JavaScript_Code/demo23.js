//version 2
//regular function
radArr = [10,20,30,40,50]

function calculate(radArr, logic){
    outputArr = []
    for(i=0; i<radArr.length; i++){
        element = logic(radArr[i]);
        outputArr.push(element);
    }
    return outputArr;
}

area = function calcArea(rad){
    return 3.14*rad*rad;
}

peri = function calcPerimeter(rad){
    return 2*3.14*rad;
}

dia = function calDia(rad){
    return 2*rad;
}

console.log(calculate(radArr, area));
console.log(calculate(radArr, peri));
console.log(calculate(radArr, dia));

//version 3
//arrow function
area = (rad) => 3.14 * rad * rad;

perimeter = (rad) => 2 * 3.14 * rad;

diameter = (rad) => 2 * rad;

console.log();
console.log(calculate(radArr, area));
console.log(calculate(radArr, perimeter));
console.log(calculate(radArr, diameter));