const arr = [12, 31, 563, 4, 64, 10];
const name = 'somthing somthing';
const number = 12;
const fullPart = `Line starts from here . Starting with ${arr[2]} . 
And has ${name}
And the last line is : ${number} is greater than ${arr.length}
And the 5 times of 9 is : ${fiveTimes(9)}
`;
console.log(fullPart);

function fiveTimes(x) {
  return x * 5;
}