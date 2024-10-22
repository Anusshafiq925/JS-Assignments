// Question no 1
document.write(`Question no 1 <br /><br />`);

var userInput = +prompt("Please enter positive integers with decimal value");
document.write(`Number: ${userInput} <br />`);

var roundOfNum = Math.round(userInput);
document.write(`Round off value: ${roundOfNum} <br />`);
var floorNum = Math.floor(userInput);
document.write(`Floor value: ${floorNum} <br />`);
var ceilNum = Math.ceil(userInput);
document.write(`Ceil Value: ${ceilNum} <br /><br />`);

// Question no 2
document.write(`Question no 2 <br /><br />`);

var userInputNeg = +prompt("Please enter Negative integers with decimal value");
document.write(`Number: ${userInputNeg} <br />`);

var roundOfNum = Math.round(userInputNeg);
document.write(`Round off value: ${roundOfNum} <br />`);
var floorNum = Math.floor(userInputNeg);
document.write(`Floor value: ${floorNum} <br />`);
var ceilNum = Math.ceil(userInputNeg);
document.write(`Ceil Value: ${ceilNum} <br /><br />`);

// Question no 3
document.write(`Question no 3 <br /><br />`);

var userAbs = +prompt("Enter a number to know its absolute value");
var absValue = Math.abs(userAbs);
document.write(`The absolute value of ${userAbs} is ${absValue}<br /><br />`);

// Question no 4
document.write(`Question no 4 <br /><br />`);
var dice = Math.random() * 6 + 1;
var diceValue = Math.floor(dice);
document.write(`Random Dice Value: ${diceValue} <br /><br />`);

// Question no 5
document.write(`Question no 5 <br /><br />`);
var coin = Math.random() * 2 + 1;
var coinvalue = Math.floor(coin);
document.write(`Coin Number: ${coinvalue}<br />`);
if (coinvalue === 2) {
  document.write(`Random Coin Value: Heads <br /><br />`);
} else {
  document.write(`Random Coin Value: Tails <br /><br />`);
}

// Question no 6
document.write(`Question no 6 <br /><br />`);
var count = Math.random() * 100 + 1;
var counting = Math.floor(count);
document.write(`Random number between 1 and 100: ${counting} <br /><br />`);

// Question no 7
document.write(`Question no 7 <br /><br />`);
var userWeight = prompt("Enter your weight");
var weightParse = parseFloat(userWeight);
document.write(`The weight of user is ${weightParse} Kilograms<br /><br />`);

// Question no 8
document.write(`Question no 8 <br /><br />`);
var secret = Math.random() * 10 + 1;

var secretNum = Math.floor(secret);
document.write(`Ramdom number: ${secretNum} <br />`);
var userNum = +prompt("Input a number between 1 and 10.");

if (secretNum === userNum) {
  document.write(`Congratulation Your Number is Correct`);
} else {
  document.write(`Better luck next time`);
}
