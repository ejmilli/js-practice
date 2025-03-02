let beprompt = prompt("Guess a number between 1 and 10");

let randomNum = Math.floor(Math.random() * 10) + 1;

if (beprompt === randomNum) {
  console.log("GoodWork");
} else {
  console.log("Mismatched, the number was " + randomNum);
}
