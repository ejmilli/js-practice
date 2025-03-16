// Write a JavaScript program to check a pair of numbers and return
//  true if one of the numbers is 50 or if their sum is 50.

const numOrsum = (num1, num2) => {
  const result = num1 + num2;

  if (num1 === 50 || num2 === 50) {
    return true;
  }

  if (result === 50) {
    return true;
  }

  return false;
};

console.log(numOrsum(20, 20));
