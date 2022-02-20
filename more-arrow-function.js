// arrow function with more than one parameter
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// arrow function with one parameter 
const multiply10Times = (num) => num * 10;
// arrow function with one parameter (i can withdraw the first bracket in one parameter arrow function)
const multiply5Times = num => num * 5;
// arrow function without parameter
const getName = () => 'Wahidul Alam';
// arrow function in multiple lines 
const doMath = (num1, num2) => {
  const add = num1 + num2;
  const diff = num1 - num2;
  const mult = add * diff;
  return mult;
}
