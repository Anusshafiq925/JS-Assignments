// Question no 1
document.write(`Question no 1 <br  /><br  />`);

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + ` ${lastName}`;
document.write(`Your full name is: ${fullName}<br  /><br  />`);

// Question no 2
document.write(`Question no 2 <br  /><br  />`);

var userInput = prompt("what is your favorite phone?");
document.write(`My favorite phone is: ${userInput} <br  />`);
var userLenght = userInput.length;
document.write(`Length of string: ${userLenght} <br  /><br  />`);

// Question no 3
document.write(`Question no 3 <br  /><br  />`);
var counrty = "Pakistani";
document.write(`String: ${counrty} <br  />`);

var indecOfN = counrty.indexOf("n");
document.write(`Index of 'n': ${indecOfN} <br  /><br  />`);

// Question no 4
document.write(`Question no 4 <br  /><br  />`);
var sentence = "Hello World";
document.write(`String: ${sentence} <br  />`);

var lIndecOfl = sentence.lastIndexOf("l");
document.write(`Last index of 'l': ${lIndecOfl} <br  /><br />`);

// Question no 5
document.write(`Question no 5 <br  /><br  />`);
var counrty = "Pakistani";
document.write(`String: ${counrty} <br  />`);
var indexChar = counrty.charAt(3);
document.write(`Charecter at index 3: ${indexChar}<br  /> <br  />`);

// Question no 6
document.write(`Question no 6 <br  /><br  />`);

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(` ${lastName}`);
document.write(`Your full name is: ${fullName}<br  /><br  />`);

//  Question no 7
document.write(`Question no 7 <br  /><br  />`);
var city = "Hyderabad";
document.write(`City: ${city}<br  />`);

var replaceCity = city.replace("Hyder", "Islam");
document.write(`After Replacement: ${replaceCity}<br  /><br  />`);

//  Question no 8
document.write(`Question no 8 <br  /><br  />`);

var sentence =
  "Ali and Sami are best friends. They play cricket and football together.";
document.write(`Sentence: ${sentence}<br  />`);
var sentenceReplace = sentence.replaceAll("and", "&");
document.write(`After Replacement: ${sentenceReplace}<br  /><br  />`);

//  Question no 9
document.write(`Question no 9 <br  /><br  />`);

var stringNum = "472";
document.write(`Value: ${stringNum}<br  />`);
document.write(`Type: ${typeof stringNum}<br  />`);
var convertNum = parseInt(stringNum);
document.write(`Value: ${convertNum}<br  />`);
document.write(`Type: ${typeof convertNum}<br  /><br  />`);

//  Question no 10
document.write(`Question no 10 <br  /><br  />`);
var userInput2 = prompt("Write anything you want in an Capital Latter");
document.write(`User input: ${userInput2} <br  />`);
var upperCase = userInput2.toUpperCase();
document.write(`Upper case: ${upperCase} <br  /><br />`);

//  Question no 11
document.write(`Question no 11 <br  /><br  />`);
var userInput3 = prompt("Write anything you want in an Title Case Latter");
document.write(`User input: ${userInput3} <br  />`);
var titleCase = userInput3.slice(0, 1).toUpperCase() + userInput3.slice(1);
document.write(`Upper case: ${titleCase} <br  /><br />`);

//  Question no 12
document.write(`Question no 12 <br  /><br  />`);
var num1 = 35.36;
document.write(`Number: ${num1}<br  />`);

var numToString = num1.toString().replace(".", "");
document.write(`Result: ${numToString}<br  /><br />`);

//  Question no 13
document.write(`Question no 13 <br  /><br  />`);
var userName = prompt("Please enter your username");

for (var i = 0; i < userName.length; i++) {
  var charCode = userName.charCodeAt(i);

  if (
    charCode === 33 ||
    charCode === 44 ||
    charCode === 46 ||
    charCode === 64
  ) {
    var flag = "no";
  } else {
    flag = "yes";
  }
}

if (flag === "no") {
  document.write(`Please enter a valid username  <br /><br />`);
} else {
  document.write(`Welcome on board <br /><br />`);
}

//  Question no 14
document.write(`Question no 14 <br  /><br  />`);

var a = ["cake", "apple pie", "cookie", "chips", "patties"];

var Userinput4 = prompt("Please Enter an item").toLowerCase();

var available = "no";
for (var i = 0; i < a.length; i++)
  if (Userinput4 === a[i]) {
    available = "yes";
    document.write(
      `${Userinput4} is available at index ${i} in our bakery. <br /> <br />`
    );
  }
if (available === "no") {
  document.write(
    `We are sorry. ${Userinput4} is not available in our bakery. <br /><br />`
  );
}

//  Question no 15
document.write(`Question no 15 <br  /><br  />`);

var userPass = prompt("Please enter your password");
var flag = false;

if (userPass.charCodeAt() >= 48 && userPass.charCodeAt() <= 57) {
  alert("Password can not be begin with numbers");
  flag = true;
} else if (userPass.length < 6) {
  alert("Password must at least 6 characters long");
  var passLength = false;
} else {
  var hasAlphabet = false;
  var hasNumber = false;
}

for (var i = 0; i < userPass.length; i++) {
  var charCode = userPass.charCodeAt(i);

  if (charCode >= 48 && charCode <= 57) {
    hasNumber = true;
  }
  if (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    hasAlphabet = true;
  }
}

if (hasNumber && hasAlphabet && !flag) {
  alert(`Your password ${userPass} is safe`);
} else if (!flag) {
  alert("Password must contain both alphabets and numbers");
}

//  Question no 16
document.write(`Question no 16 <br  /><br  />`);
var university = "University of Karachi";
var uniArray = university.split("");

for (var i = 0; i < uniArray.length; i++) {
  document.write(`${uniArray[i]} <br /> `);
}

//  Question no 17
document.write(`Question no 17 <br  /><br  />`);

var userString = prompt("Enter a Word");
document.write(`User Input: ${userString}<br />`);

var lastChar = userString.charAt(userString.length - 1);

document.write(`Last Character of input: ${lastChar} <br/><br/>`);

//  Question no 18
document.write(`Question no 18 <br  /><br  />`);
var sentence1 = "The quick brown fox jumps over the lazy dog";
document.write(`Sentence:  ${sentence1} <br />`);

var lowerCaseSentence = sentence1.toLowerCase();

var wordsArray = lowerCaseSentence.split(" ");

var count = 0;

for (var i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i] === "the") {
    count++;
  }
}

document.write(`The word 'the' appears  ${count}  times in the given string.`);
