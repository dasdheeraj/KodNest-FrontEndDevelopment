//version 3
//single line function
radArr = [10,20,30,40,50]

calculate = (radArr, logic) => radArr.map(logic);

area = (rad) => 3.14 * rad * rad;

perimeter = (rad) => 2 * 3.14 * rad;

diameter = (rad) => 2 * rad;

console.log();
console.log(calculate(radArr, area));
console.log(calculate(radArr, perimeter));
console.log(calculate(radArr, diameter));