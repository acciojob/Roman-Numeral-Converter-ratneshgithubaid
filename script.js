function convertToRoman(num) {
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  for (const [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// Example test:
console.log(convertToRoman(14)); // Output: XIV
// console.log(convertToRoman(36)); // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
