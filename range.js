// Write a JavaScript program to check whether
//  a given integer is within 20 of 100 or 400.

const rangeOf = (num) => {
  if ((num >= 80 && num <= 120) || (num >= 380 && num <= 420)) {
    return true;
  }
  return false;
};

console.log(rangeOf(110));
