// Write a JavaScript program to compute the absolute difference between a specified number and 19.
//  Returns triple the absolute difference if the specified number is greater than 19.

const absoluteDiff = (num) => {
  const result = Math.abs(num - 19);

  if (num > 19) {
    return 3 * result;
  }
  return result;
};

console.log(absoluteDiff(20));
