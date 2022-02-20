// 1. classic way to declare function 
function add(num1, num2) {
  return num1 + num2;
}
// 2.  function expression 
const add2 = function addingNumbers(num1, num2) {
  return num1 + num2;
}
// 3. function expression (anonymous)
const add3 = function (num1, num2) {
  return num1 + num2;
}
//  4. arrow function
const add4 = (num1, num2) => num1 + num2;

// calling and consoling
const sum1 = add(12, 15);
const sum2 = add2(12, 15);
const sum3 = add3(12, 15);
const sum4 = add4(12, 15);
console.log(sum1, sum2, sum3, sum4);