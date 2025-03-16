// Write a JavaScript program to check two given integers whether one is
// positive and another one is negative.

const positiveOrnegative = (num1, num2) => {
  if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    return "One number is positive, the other is negative.";
  } else {
    return "Both numbers are either positive or negative.";
  }
};

console.log(positiveOrnegative(2, -2));
