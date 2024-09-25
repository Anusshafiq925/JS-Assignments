// Question no 1

var character = prompt(
  "Enter any character to know input is a number, uppercase letter or lower case letter."
);

if (character.charCodeAt() >= 65 && character.charCodeAt() <= 90) {
  alert("It is an Uppercase Letter");
} else if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122) {
  alert("It is a Lowercase Letter");
} else if (character.charCodeAt() >= 48 && character.charCodeAt() <= 57) {
  alert("It is a Number");
}

// Question no 2

var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

if (num1 > num2) {
  alert("The larger number is: " + num1);
} else if (num1 < num2) {
  alert("The larger number is: " + num2);
} else if (num1 === num2) {
  alert("Both numbers are equal.");
}

// Question no 3

var number = +prompt("Enter a number:");

if (number > 0) {
  document.write("The number " + number + " is positive.<br/>");
} else if (number < 0) {
  document.write("The number " + number + " is negative. <br/>");
} else if (number === 0) {
  document.write("The number is zero.<br/> ");
}

// Question no 4

var char = prompt("Enter a single character:");

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  document.write("true <br/>");
} else {
  document.write("false <br/>");
}

// Question no 5

var registerPass = prompt("Enter Your your Password to register");
var loginPass = prompt("Enter your Password");

if (loginPass === "") {
  alert("Please enter your password");
} else if (loginPass === registerPass) {
  alert("Correct! The password you entered matches the original password");
} else if (loginPass !== registerPass) {
  alert("Incorrect Password");
}

// Question no 6

var greeting;
var hour = +prompt("Please enter Time");
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.write(greeting + "<br/>");

// Question no 7

var time = +prompt(
  "Please enter time in 24 hours clock format like: 1900 = 7pm."
);
var msg;

if (time >= 0000 && time < 1200) {
  msg = "Good Morning";
} else if (time >= 1200 && time < 1700) {
  msg = "Good Afternoon";
} else if (time >= 1700 && time < 2100) {
  msg = "Good Evening";
} else if (time >= 2100 && time < 2359) {
  msg = "Good Night";
}

document.write(msg);
