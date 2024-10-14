// exercise 4
document.getElementById("hide").onclick = function () {
    document.getElementById("text-4").style.display = "none";
  };
  
  document.getElementById("show").onclick = function () {
    document.getElementById("text-4").style.display = "block";
  };

// exercise 5
console.log("Hello World")

// exercise 6
let gpa = 3.6;
console.log(`Sabina has GPA = ${gpa}`)

let answer = true;
console.log(`Am I from Aktobe? = ${answer}`)

let name = 'Sabina';
console.log(`My name is = ${name}`)

// exercise 7
let num1, num2;

num1 = parseInt(window.prompt("Enter the first number: "));
num2 = parseInt(window.prompt("Enter the second number: "));

sum = num1 + num2;
document.getElementById("Par").textContent = `Exercise 7 - The sum is: ` + sum;

// exercise 8
const d = new Date();
d.toDateString();
document.getElementById("Date").textContent = d;

// exercise 9
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
const year = prompt('Enter a year:');
console.log(checkLeapYear(year));

// exercise 10
function multiplyBy() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
  
    parseInt(document.getElementById("result").textContent = `reasult is: ${num1 * num2}` );
  }
  
  function divideBy() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
  
    parseInt(document.getElementById("result").textContent = `reasult is: ${num1 / num2}`);
  }

  // exercise 11
  function ToF() {
    let celsius = document.getElementById("IntC").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("temp").textContent = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}
  
function ToC() {
  let fahrenheit = document.getElementById("IntF").value;
  let celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("temp").textContent = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
}

// exercise 12
function CheckEvenOdd() {
  let num = parseInt(document.getElementById("IntNum").value);
  if (num % 2 == 0) {
    document.getElementById("check").textContent = "The number " + num + " is Even.";
  } else {
    document.getElementById("check").textContent = "The number " + num + " is Odd.";
  }
}

// exercise 13
function findLargestLeast() {

  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let number3 = parseFloat(document.getElementById("number3").value);

  const largest = Math.max(number1, number2, number3);
  const least = Math.min(number1, number2, number3);
  
  document.getElementById("find").textContent = "The largest number is: " + largest + " The least number is: " + least;
}

// exercise 14
function calculateArea() {
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);
  let c = parseFloat(document.getElementById("sideC").value);

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  document.getElementById("rslt").textContent = "The area of the triangle is: " + area.toFixed(2);
}

// exercise 15
function func() {
  let numfact = parseInt(document.getElementById("numInput").value);

  if (numfact < 0) {
    result = "Factorial is not defined for negative numbers.";
  } 
  else if (numfact === 0) {
    result = 1; 
  } 
  else { 
    result = 1; 
    for (let i = numfact; i > 1; i--) { 
      result *= i; 
    }
  }
  document.getElementById("resultfact").textContent = "Factorial: " + result; 
}

// exercise 16
function countVowelsAndConsonants() {
  let str = document.getElementById("inputString").value.toLowerCase();
  let vowelCount = 0;
  let consonantCount = 0;
  const vowels = "aeiou";

  for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }

  document.getElementById("final").textContent = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

// exercise 17
function timeConvert() {
let seconds = parseFloat(document.getElementById("secondsInput").value);

let hours = Math.floor(seconds / 3600); 
let remainingSeconds = seconds % 3600; 
let minutes = (remainingSeconds / 60).toFixed(4);

  document.getElementById("res").textContent = `Hours: ${hours}, Minutes: ${minutes}`;
}

// exercise 18
function findMostFrequent() {
  let input = document.getElementById("numbersInput").value;
  let numbers = input.split(' ').map(num => parseInt(num.trim()));
  let maxCnt = 0;

  for (let i = 0; i < numbers.length; i++) {
      let cnt = 0;
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
          cnt++;
        }
      }
      if (cnt > maxCnt) {
        maxCnt = cnt;
        mostF = numbers[i];
      }
  }
  document.getElementById("end").textContent = `The most frequent number is: ${mostF}`;
}

// exercise 19
function calculateFibonacci() {
  let n = parseInt(document.getElementById("int").value);
  let fibonacci = " ";
  let a = 0, b = 1;
  
  for (let i = 1; i <= n; i++) {
      fibonacci += a + " ";  
      let next = a + b;
      a = b;
      b = next;
  }
document.getElementById("sequence").textContent = "Fibonacci Sequence: " + fibonacci;
}

// exercise 20
function countDays() {
  let today = new Date();
  today.setHours(0, 0, 0, 0); 
  let newYear = new Date(today.getFullYear() + 1, 0, 1);
  let timeDiff = newYear - today;
  let daysLeft = (timeDiff / (1000 * 60 * 60 * 24)) | 0;

  document.getElementById("days").textContent = "Days left until New Year: " + daysLeft;
}
