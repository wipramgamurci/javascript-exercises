const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1)
};

const power = function(num1, num2) {
  return num1 ** num2;	
};

const factorial = function(num) {
  if (num === 0){
    return 1
  }
  let result = 1;
  for (let i = 1; i <= num; i++){
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
