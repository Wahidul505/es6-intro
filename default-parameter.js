// old way to set defaul parameter
function multiply(num1, num2) {
  num2 = num2 || 1;
  const mult = num1 * num2;
  return mult;
}

const result = multiply(12);
console.log(result);

// new way / es6 way to set default parameter 
function mult(num1, num2 = 1) {
  const multiplication = num1 * num2;
  return multiplication;
}
const result2 = mult(15, 3);
console.log(result2);
// another default parameter example 
function fullName(first, second = ' Alam') {
  const full = first + second;
  return full;
}
const result3 = fullName('Wahidul');
console.log(result3);