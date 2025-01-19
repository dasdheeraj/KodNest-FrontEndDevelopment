//version 1

//elements of array are radius of circles
radArr = [10,20,30,40,50] 

//find the area of circles
function calcArea(radArr){
    areaArr = []
    for(i=0; i<radArr.length; i++){
        area = 3.14*radArr[i]*radArr[i];
        areaArr.push(area);
    }
    return areaArr;
}
console.log(calcArea(radArr));

//find the perimeter of circles
function calcPer(radArr){
    perArr = []
    for(i=0; i<radArr.length; i++){
        per = 2*3.14*radArr[i];
        perArr.push(per);
    }
    return perArr;
}
console.log(calcPer(radArr));