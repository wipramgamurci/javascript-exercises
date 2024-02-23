const palindromes = function (string) {
  const proccessedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return proccessedString.split("").reverse().join("") === proccessedString;  
};

// Do not edit below this line
module.exports = palindromes;
