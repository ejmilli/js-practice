// rotate the string 'w3resource' in the right direction.
// This is done by periodically removing one letter from the string end and attaching it to the front.

let str = "w3resource";

const rotate = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

console.log(rotate(str));
