function multiplyBy() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  if (num1 === "" || num2 === "") {
    document.getElementById("result").innerHTML = "Please enter both numbers.";
    return;
  }

  let result = parseFloat(num1) * parseFloat(num2);
  document.getElementById("result").innerHTML = result;
}

function divideBy() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  if (num1 === "" || num2 === "") {
    document.getElementById("result").innerHTML = "Please enter both numbers.";
    return;
  }

  if (parseFloat(num2) === 0) {
    document.getElementById("result").innerHTML = "Cannot divide by zero.";
    return;
  }

  let result = parseFloat(num1) / parseFloat(num2);
  document.getElementById("result").innerHTML = result;
}
