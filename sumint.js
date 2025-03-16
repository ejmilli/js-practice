// Write a JavaScript program to compute the sum
//  of the two given integers. If the two values are the same, then return triple their sum.

const sumInteger = (num1, num2) => {
  const result = num1 + num2;

  if (num1 === num2) {
    return 3 * result;
  }
  return result;
};

console.log(sumInteger(2, 2));
