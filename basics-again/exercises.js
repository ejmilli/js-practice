let x = 10;
x = "text";
console.log(typeof x);

const fav = ["dance", "sing", "write"];

console.log(true + true);

// 1.

// let a = 5;
// a += 3;
// a *= 2;
// console.log(a); // 16

// 2.

console.log(14 % 5);

// 3.

console.log("3" + 2 - 1);

// when used + with objects or arrays, JS converts them to strings
// [] = ""
// when {} converted to string "[object Object]"

let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70 && score <= 89) {
  console.log("Good");
} else {
  console.log("Needs Improvemnet");
}

let grade = "B";

switch (grade) {
  case "A":
    console.log("a");
    break;
  case "B":
    console.log("b");
    break;
  case "C":
    console.log("c");
    break;
  default:
    console.log("fail");
}

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 100; i++) {
//   let sum = 1;
//   sum += i;
//   console.log(sum);
// }

// for (let i = 1; i <= 10; i++) {
//   let multiply = 5;
//   multiply *= i;
//   console.log(multiply);
// }

// for (let i = 1; i <= 5; i++) {
//   let stars = "*".repeat(i);
//   console.log(stars);
// }

// const FizzBuzz = () => {
//   for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// FizzBuzz();

// const factorial = (num) => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(6));

// array = [1, 2, 3, 4, 5];
// let result = array.map((r) => {
//   return r * 2;
// });
// console.log(result);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   sum += i;
//   console.log(sum);
// }

// const evenOrOdd = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// };
// console.log(evenOrOdd(2));

// const maxNumber = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };

// const factorial = (num) => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(5));

// const reverseNumber = (num) => {
//   let result = "";
//   for (let i = num.length - 1; i >= 0; i--) {
//     result += num[i];
//   }
//   return result;
// };
// console.log(reverseNumber("1234"));

// const colors = ["red", "green", "blue"];

// for (const color of colors) {
//   console.log(color);
// }

// const fruits = ["apple", "banana", "cherry"];

// for (const fruit in fruits) {
//   console.log(fruit);
//   console.log(fruits[fruit]);
// }

// const numbers = [4, 7, 1, 9];

// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }
// console.log(sum);

// const nums = [1, 2, 3, 4];

// let result = [];
// for (const n of nums) {
//   result.push(n * 2);
// }
// console.log(result);

// const values = [2, 9, 4, 6, 1];
// let result1 = 0;
// for (let value of values) {
//   if (value > 5) {
//     result1++;
//   }
// }

// console.log(result1);

// const newArray = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(newArray([2, 5, 8, 7, 3, 10]));

// let nums = [10, 20, 30, 40, 50];

// nums.push(60);
// console.log(nums);

// nums.pop();
// console.log(nums);

// nums.shift();
// console.log(nums);

// nums.unshift();
// console.log(nums);

// nums.indexOf(30);
// console.log(nums);

// nums.slice(1, 4);
// console.log(nums);

// let numbers = [1, 2, 3, 4, 5];

// let removed = numbers.splice(1, 2);
// console.log(removed);
// console.log(numbers);

// numbers.splice(2, 0, 10, 11);
// console.log(numbers);

// numbers.splice(0, 1, 0);

// let a = 10;
// let b = 15;

// let result = ([a, b] = [b, a]);
// console.log(result);

// const getMiddle = (arr) => {
//   const mid = Math.floor(arr.length / 2);

//   if (arr.length % 2 !== 0) {
//     return arr[mid];
//   } else {
//     return [arr[mid - 1], arr[mid]];
//   }
// };

// console.log(getMiddle([1, 2, 3, 4, 5, 6]));

// const doubleEvent = (arr) => {
//   let result = [];

//   for (const r of arr) {
//     if (r % 2 === 0) {
//       result.push(r * 2);
//     } else {
//       result.push(r);
//     }
//   }
//   return result;
// };

// console.log(doubleEvent([1, 2, 3, 4, 5]));

// const filterStrings = (arr) => {
//   let result = [];

//   for (const r of arr) {
//     if (typeof r !== "string") {
//       result.push(r);
//     }
//   }
//   return result;
// };

// console.log(filterStrings([1, "apple", 2, "banana", 3]));

// const countPositives = (arr) => {
//   let count = 0;
//   for (const r of arr) {
//     if (r > 0) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countPositives([-1, 2, 0, 4, -5]));

// const sumArray = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(sumArray([1, 2, 3, 4]));

// const getMax = (arr) => {
//   let max = arr[0];
//   for (const r of arr) {
//     if (r > max) {
//       max = r;
//     }
//   }
//   return max;
// };

// console.log(getMax([5, 2, 9, 1]));

// const countVowels = (str) => {
//   let result = str.toLowerCase().split("");
//   let count = 0;
//   for (const r of result) {
//     if (r === "a" || r === "i" || r === "o" || r === "e" || r === "u") {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowels("Hello World"));

// const isPalindrome = (str) => {
//   const cleaned = str.toLowerCase().replace(/\s/g, "");
//   const reversed = cleaned.split("").reverse().join("");
//   return cleaned === reversed;
// };

// console.log(isPalindrome("Racecar")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man a plan a canal Panama")); // true

// const capitalizeWords = (str) => {
//   const words = str.split(" ");
//   const result = [];

//   for (const word of words) {
//     const capitalize = word[0].toUpperCase() + word.slice(1);
//     result.push(capitalize);
//   }
//   return result.join(" ");
// };

// console.log(capitalizeWords("hello world from js"));

// const reverseString = (str) => {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// };

// console.log(reverseString("hello"));

// const reverseWords = (str) => {
//   const sentence = str.split(" ");
//   const reversed = sentence.map((s) => s.split("").reverse().join(""));
//   return reversed.join(" ");
// };

// console.log(reverseWords("hello world"));

// const countWords = (str) => {
//   let words = str.split(" ");
//   let count = 0;

//   for (const word of words) {
//     count++;
//   }
//   return count;
// };

// console.log(countWords("This is a test"));

// const capitalize = (arr) => {
//   return arr.map((r) => r[0].toUpperCase() + r.slice(1));
// };

// console.log(capitalize(["hello", "world", "javascript"]));

// const filterEven = (arr) => {
//   return arr.filter((r) => {
//     if (r % 2 === 0) return r;
//   });
// };

// console.log(filterEven([1, 2, 3, 4, 5, 6]));

// const filterEvens = (arr) => {
//   const result = [];
//   for (const r of arr) {
//     if (r % 2 === 0) {
//       result.push(r);
//     }
//   }
//   return result;
// };

// console.log(filterEvens([1, 2, 3, 4, 5, 6]));

// const sumArray = (arr) => {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// };

// console.log(sumArray([1, 2, 3, 4]));

// const sumArray = (arr) => {
//   let sum = 0;

//   for (const r of arr) {
//     sum += r;
//   }
//   return sum;
// };

// console.log(sumArray([1, 2, 3, 4]));

// const numToString = (arr) => {
//   return arr.map((r) => r.toString());
// };

// console.log(numToString([1, 2, 3]));

// const numToString = (arr) => {
//   let result = [];
//   for (const r of arr) {
//     result.push(r.toString());
//   }
//   return result;
// };

// console.log(numToString([1, 2, 3]));

// const filterFalsy = (arr) => {
//   return arr.filter((r) => Boolean(r));
// };

// console.log(filterFalsy([0, "hello", false, 5, "", null]));

// const uniqueValues = (arr) => {
//   return [...new Set(arr)];
// };

// const wordCount = (str) => {
//   const words = str.toLowerCase().split(" ");
//   let result = {};

//   for (const word of words) {
//     if (result[word]) {
//       result[word]++;
//     } else {
//       result[word] = 1;
//     }
//   }
//   return result;
// };

// console.log(wordCount("apple banana apple orange banana apple"));

// const filterArray = (arr, callback) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// const isEven = (n) => n % 2 === 0;

// console.log(filterArray([1, 2, 3, 4, 5], isEven));

// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };

// for (const key in car) {
//   console.log(key, ":", car[key]);
// }

// const keys = Object.entries(car);
// console.log(keys);

// // const mergeObject = (obj1, obj2) => {
// //   return { ...obj1, ...obj2 };
// // };

// const mergeObject = (obj1, obj2) => {
//   let newObj = {};
//   for (const key in obj1) {
//     newObj[key] = obj1[key];
//   }

//   for (const key in obj2) {
//     newObj[key] = obj2[key];
//   }

//   return newObj;
// };

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// console.log(mergeObject(obj1, obj2));

// const countKeys = (obj) => {
//   let count = 0;

//   for (const key in obj) {
//     count = obj[key]++;
//   }

//   return count;
// };
// console.log(countKeys({ a: 1, b: 2, c: 3 }));

// const hasKey = (obj, key) => {
//   return key in obj;
// };

// console.log(hasKey({ name: "Milli", age: 25 }, "age")); // true

// const swapKeysAndValues = (obj) => {
//   let newObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     newObj[value] = key;
//   }
//   return newObj;
// };

// console.log(swapKeysAndValues({ a: 1, b: 2 }));

// const sumValues = (obj) => {
//   let count = 0;

//   for (let value of Object.values(obj)) {
//     if (typeof value === "number") {
//       count += value;
//     }
//   }
//   return count;
// };

// console.log(sumValues({ a: 2, b: 5, c: "x" }));

// const obj = {
//   name: "Milli",
//   age: 25,
//   city: "Helsinki",
//   verified: true,
// };

// const countStrings = (obj) => {
//   let count = 0;

//   for (let value of Object.values(obj)) {
//     if (typeof value === "string") {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countStrings(obj));

// const obj = {
//   apples: 4,
//   bananas: "a lot",
//   oranges: 10,
//   grapes: "some",
// };

// const keysWithNumbers = (obj) => {
//   let result = [];

//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === "number") {
//       result.push(key);
//     }
//   }
//   return result;
// };

// console.log(keysWithNumbers(obj));

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const invertObject = (obj) => {
//   let newObj = {};
//   for (const [key, value] of Object.entries(obj)) {
//     newObj[value] = key;
//   }
//   return newObj;
// };

// console.log(invertObject(obj));

// const squareNumbers = (arr) => {
//   return arr.map((r) => r ** 2);
// };

// console.log(squareNumbers([1, 2, 3, 4]));

// const longStrings = (arr) => {
//   return arr.filter((r) => {
//     return r.length > 3;
//   });
// };

// console.log(longStrings(["cat", "lion", "dog", "elephant"]));

// const newh1 = document.getElementById("main-title");
// newh1.innerText = "Welcome";

// const newP = document.querySelector(".description");
// newP.style.fontWeight = "bold";

// const anotherPara = document.createElement("new");
// anotherPara.innerText = "This is a new dynamic pargraph";
// const description = document.querySelector(".description");

// description.appendChild(anotherPara);

// const btn = document.getElementById("myBtn");
// btn.addEventListener("click", () => {
//   alert("Button was clicked");
// });

// const newTitle = document.getElementById("title");
// const btn = document.getElementById("myBtn");

// btn.addEventListener("click", () => {
//   newTitle.innerText = "Thanks!";
// });

// const newPara = document.getElementById("p");
// const btn = document.getElementById("myBtn");

// btn.addEventListener("click", () => {
//   newPara.style.display = "none";
// });

// const btn = document.getElementById("myBtn");

// btn.addEventListener("click", () => {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

//   // Set background color of body
//   document.body.style.backgroundColor = randomColor;
// });

////////// for todolist ////////

// const text = document.getElementById("text");
// const btn = document.getElementById("myBtn");
// const ul = document.getElementById("myList");
// // const remove = document.getElementById("remove");

// btn.addEventListener("click", () => {
//   const value1 = text.value.trim();
//   if (value1 === "") return;

//   const li = document.createElement("li");

//   li.innerText = value1;

//   li.addEventListener("click", () => {
//     ul.removeChild(li);
//   });
//   ul.appendChild(li);

//   text.value = "";
// });

// remove.addEventListener("click", () => {
//   const lastLi = ul.lastElementChild;
//   if (lastLi) {
//     ul.removeChild(lastLi);
//   }
// });

// const ul = document.getElementById("myList");
// const li = document.querySelector(".active");

// const getChildren = ul.firstElementChild;
// li.innerText = "second";

// if (li.nextElementSibling) {
//   li.nextElementSibling.classList.add("highlight");
// }

// ul.removeChild(getChildren);

// const outer = document.getElementById("outer");
// const inner = document.getElementById("inner");

// // Outer div listens during capturing phase
// outer.addEventListener(
//   "click",
//   () => {
//     console.log("Outer Div clicked - capturing");
//   },
//   true
// );

// // Inner button listens during bubbling phase (default)
// inner.addEventListener("click", () => {
//   console.log("Button clicked - bubbling");
// });

// const ul = document.getElementById("myList");

// // ul.addEventListener("click", (event) => {
// //   // event.target is the clicked element
// //   if (event.target.tagName === "LI") {
// //     alert(`You clicked on ${event.target.innerText}`);
// //   }
// // });

// const ul = document.getElementById("myList");
// const btn = document.getElementById("btn");

// // Add new li on button click
// btn.addEventListener("click", () => {
//   const fruit = prompt("Enter a fruit name:");
//   if (!fruit) return;

//   const li = document.createElement("li");
//   li.innerText = fruit;
//   ul.appendChild(li);
// });

// // Event delegation on ul
// ul.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     alert(`You clicked: ${event.target.innerText}`);
//   }
// });


// const text = document.getElementById("text");
// const ul = document.getElementById("myList");
// const btn = document.getElementById("btn");
// const remove = document.getElementById("remove");
// const count = document.getElementById("count")

// let lastId; 
// let currentID = 1

// btn.addEventListener("click" , () => {
  
//   const value = text.value.trim()
 
//   if (!value) return 

//   const li = document.createElement("li")
//   li.innerText = value;
//   li.id = String(currentID)
//   lastId = currentID
//   count.innerHTML = `Count: ${currentID}`
//   currentID++
  

   


//    ul.appendChild(li)

//   text.value = ""

// })

// remove.addEventListener("click" , () => {
  
//   const lastChild = document.getElementById(String(lastId))
//   lastChild.remove()
//   currentID--
   
//   count.innerHTML = `Count: ${currentID}`
// })

// const ul = document.createElement("ul");


// ul.classList.add("hehe")
// document.body.appendChild(ul)
// ul.removeAttribute("class")

// const ul = document.getElementById("myList");
// ul.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     const newText = prompt("Edit this item:", e.target.innerText);
//     if (newText !== null && newText.trim() !== "") {
//       e.target.innerText = newText.trim();
//     }
//   }
// });


// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// function delayedGreeting(callback) {
//   setTimeout(() => {
//     callback("Hello from callback!");
//   }, 1000);
// }

// // Usage:
// delayedGreeting((message) => {
//   console.log(message);
// });

// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // try changing this to false

//   setTimeout(() => {
//     if (success) {
//       resolve("Promise resolved!");
//     } else {
//       reject("Promise rejected!");
//     }
//   }, 1000);
// });

// myPromise
//   .then((msg) => console.log(msg))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Promise settled"));

// const isEven = (num) => {
//     return new Promise((reolve, reject)  => {
       
//        setTimeout(() => {
//         if (num % 2 === 0 ) {
//           resolve()
//         } else {
//  reject()
//         }
//        }, 2000)
//     })
// }

// isEven(4) 
// .then(() => {})
// .catch(() => {})


  // for (let i = 1; i <= 20; i++) {
  //   console.log(i)
  // }

  // const facNum = (num) => {
  //   let result = 1
  //   for (let i = 1; i <= num; i++) {
  //     result *= i
  //   }
  //   return result
  // }

  // console.log(facNum(5))

// const numbers = [1, 2, 3, 4, 5, 6];


// const result =  numbers.filter((num) => num % 2 === 0).map((num) => num * num)

// console.log(result)


// const swapped = (obj) => {

//    let newObj = {} 
   
//    for (const [key, value] of Object.entries(obj)) {
//       newObj[value] = key
//    }

//    return newObj

// }


// const obj = { a: 1, b: 2, c: 3 };
// console.log(swapped(obj))


// const arrayOfStrinsg = (arr) => {
  
//   let result = [] 

//   for (const r of arr) {
//     if (r.length > 5) {
//       result.push(r)
//     }
//   }
//    return result
// }

// console.log(arrayOfStrinsg(["milli", "apple", "seven" , "fewgerwergew", "fewgergregre" ]))


// const sumOfsquares = (arr) => {

//   const result = arr.map((r) => r ** 2 )
//   return result
// }

// console.log(sumOfsquares([2, 4, 6]));

//  const facNum = (num) => {
//     if (num < 0 ) return 0

//     let result = 1
//     for (let i = 1; i <= num; i++) {
//       result *= i
//     }
//     return result
//   }

//   console.log(facNum(5))


//   const sqOfOddNumbers = (arr) => {
//     const result = arr.filter((r) => !(r % 2 === 0 )).map((r) => r ** 2)
//     return result   
//   }


//   console.log(sqOfOddNumbers([3, 5, 7]))

// function mergeObjects(obj1, obj2) {
//   let newObj = {}

//    for (const key in obj1) {
//     newObj[key] = obj1[key]
//    }

//    for (const key in obj2)  {
//      newObj[key] = obj2[key]
//    }

//    return newObj
// }

// const obj1 = {
  
//   "a" :  1 ,
//   "b" : "alice",
//     "c" : "house"
// }
// const obj2 = {
  
//   "a" :  4 ,
//   "b" : "alice",
//     "c" : "key"
// }

// console.log(mergeObjects(obj1, obj2))


// // function reverseString(str) {
// //     let str1 = "" 
// //     for (let i = str.length-1; i >= 0; i--) {
// //        str1 += str[i]
// //     }

// //     return str1
// // }

// // console.log(reverseString("hello"))

// const reverseString = (str) => {
  
//   let result = str.split("").reverse().join("")
//   return result
// }

// console.log(reverseString("hello"))


// function myFilter(arr, callback) {
//   let newArr = [];

//   for (const r of arr) {
//     if (callback(r)) {
//       newArr.push(r);
//     }
//   }

//   return newArr;
// }
// function maxNumber(arr) {
//   if (arr.length === 0) return undefined; 

//   let max = arr[0];  
//   for (const r of arr) {
//     if (r > max) {
//       max = r; 
//     }
//   }

//   return max;
// }

// console.log(maxNumber([3, 7, 2, 9, 4])); 


// function myMap(arr, callback) {
//   let newArr = []

//   for (const r of arr) {
//     newArr.push(callback(r))
//   }

//   return newArr
// }


// const isPrime = (num) => {
  
//   if (num <= 1 ) return false 

//   for (let i = 2; i <= num*num ; i++) {
//     if (num % i === 0) return false
//   }
//   return true 

// }


// const isPalindrome = (str) => {
  
//   let result = str.split("").reverse().join("")
//   return str === result
   
// }


// const isPalindrome = (str) => {
//   let reversed = "" 
  
//   for (let i = str.length -1; i >= 0; i--) {
//     reversed += str[i] 
    
//   }
  
//   return str === reversed
  
// }
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));


// const arrayDuplicate = (arr) => {
 
//  let newArr = [] 
//  let seen = [] 
//  for (const r of arr) {
//   if (seen.includes(r)) {
//     if (!newArr.includes(r)) {
//       newArr.push(r)
//     }
//   } else {
//     seen.push(r)
//   }
//  }


//  return newArr

// }

// console.log(arrayDuplicate([1, 2, 2, 3, 4, 4, 4, 5]));


// const capitalizeWords = (str) => {
//   const result = str.split(" ")
//    const capitalize = [] 

//    for (const r of result) {
     
//      capitalize.push(r[0].toUpperCase() + r.slice(1))
//    }

//    return capitalize.join(" ")
   
   
// }

//  console.log(capitalizeWords("hello world from chatgpt"));


const giveCount = (str) => {
   
  const result = str.split("")
  let obj = {}
  
  
  for (const r of result) {
    if (obj[r]) {
      obj[r] += 1
    } else {
      obj[r] = 1
    }
  }
return obj
  
}

console.log(giveCount("hello"));