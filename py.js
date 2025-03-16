// Write a JavaScript program to create another string by
// adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

const pY = (str) => {
  if (str[0] === "P" && str[1] === "y") {
    return str;
  } else {
    return str + "Py";
  }
};

console.log(pY("milli"));
console.log(pY("Pymilli"));
console.log(pY("Python"));
console.log(pY("pewdie"));
