// Question no 1

var city = prompt("Enter City Name");

if (city === "karachi") {
  alert("Welcome to the city of lights");
} else if (city !== "karachi") {
  alert("Welcome to " + city);
}

// Question no 2

var gender = prompt("Enter Your Gender");

if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma’am");
}

// Question no 3

var signalColor = prompt("Enter Signal Color");

if (signalColor === "red") {
  alert("Must Stop");
} else if (signalColor === "yellow") {
  alert("Ready to Move");
} else if (signalColor === "green") {
  alert("Move Now");
}

// Question no 4

var fuel = prompt("Enter remaining fuel in car");

if (fuel <= "0.25") {
  alert("Please refill the fuel in your car");
} else if (fuel !== "yellow") {
  alert("Carry on");
}

// Question no 5

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
} else if (c === 13) {
  alert("condition 2 is true");
} else if (++c < 14) {
  alert("condition 3 is true");
} else if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
} else if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Question no 6

var subobtained1 = +prompt("Enter Your English Marks");
var subobtained2 = +prompt("Enter Your Urdu Marks");
var subobtained3 = +prompt("Enter Your Maths Marks");
var totalmarks = 300;
var percentage =
  ((subobtained1 + subobtained2 + subobtained3) / totalmarks) * 100;

if (percentage >= 80) {
  var grade = "A-one";
  var remarks = "Exellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage <= 59) {
  grade = "Fail";
  remarks = "Sorry";
}

document.write(`
  <h1>Marks Sheet</h1></br>
  <p>Total Marks: ${totalmarks}</p>
  <p>Marks Obtained: ${subobtained1 + subobtained2 + subobtained3}</p>
  <p>Percentage: ${percentage}%</p>
  <p>Grade: ${grade}</p>
  <p>Remarks: ${remarks}</p>
  `);

// Question no 7

var x = +prompt("Guess the secret number");
var y = 6;

if (x === y) {
  alert("Bingo! Correct answer");
} else if (x === ++y) {
  alert("Close enough to the correct answer");
}

// Question no 8

var number = +prompt("Enter a number to check if it is divisible by 3:");

if (number % 3 === 0) {
  alert("The number " + number + " is divisible by 3.");
} else if (number % 3 !== 0) {
  alert("The number " + number + " is not divisible by 3.");
}

// Question no 9

var number = +prompt("Enter a number to check if it is even or odd:");

if (number % 2 === 0) {
  alert("The number " + number + " is even.");
} else {
  alert("The number " + number + " is odd.");
}

// Question no 10

var t = +prompt("Enter your Temperature");

if (t >= 40) {
  var output = "It is too hot outside.";
} else if (t >= 30) {
  output = "The Weather today is Normal.";
} else if (t >= 20) {
  output = "The Weather today is Cool.";
} else if (t >= 10) {
  output = "The Weather today is soo Cool.";
}
document.write(output + "</br></br>");

// Question no 11

var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");
var operator = prompt("Choose the operator");

if (operator === "+") {
  document.write(
    "The sum of " +
      firstNum +
      " & " +
      secondNum +
      " is " +
      +(firstNum + secondNum)
  );
} else if (operator === "-") {
  document.write(
    "The subtration of " +
      firstNum +
      " & " +
      secondNum +
      " is " +
      +(firstNum - secondNum)
  );
} else if (operator === "*") {
  document.write(
    "The multiply of " +
      firstNum +
      " & " +
      secondNum +
      " is " +
      +(firstNum * secondNum)
  );
} else if (operator === "/") {
  document.write(
    "The division of " +
      firstNum +
      " & " +
      secondNum +
      " is " +
      +(firstNum / secondNum)
  );
} else if (operator === "%") {
  document.write(
    "The modulus of " +
      firstNum +
      " & " +
      secondNum +
      " is " +
      +(firstNum % secondNum)
  );
}
