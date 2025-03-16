// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

const absoluteDiff = (num) => {
  const absdiff = Math.abs(num - 13);

  if (absdiff > 13) {
    return 2 * absdiff;
  } else {
    absdiff;
  }
  return absdiff;
};

console.log(absoluteDiff(30));
