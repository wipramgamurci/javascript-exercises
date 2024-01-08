const removeFromArray = function (arr, ...elements) {
  const resultArray = arr.filter((nilai) => !elements.includes(nilai));
  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
