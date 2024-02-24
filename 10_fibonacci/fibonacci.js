const fibonacci = function(input) {
  const num = parseInt(input);

  if(num === 0) return 0;
  if(num < 0) return "OOPS"

  let secondPrevious = 0;
  let firstPrevious = 1;

  for (let i = 2; i <= num; i++){
    let current = firstPrevious + secondPrevious;
    secondPrevious = firstPrevious;
    firstPrevious = current;
  }
  return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
