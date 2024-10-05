// Question no 1

var multiArry = [[], [], []];

// Question no 2

var multidimensionalArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// Question no 3

for (var i = 1; i <= 10; i++) {
  document.write(`${i} <br/>`);
}

// Question no 4

var tableNo = +prompt("Please enter a Table Number");
var tableLength = +prompt("Please enter a Table lenght");
document.write(`Multiplication Table of ${tableNo} <br />
  Lenght ${tableLength}<br />`);
for (var i = 1; i <= tableLength; i++) {
  document.write(`${tableNo} x ${i} = ${tableNo * i} <br /> `);
}

// Question no 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i]} <br/>`);
}
for (var i = 0; i < fruits.length; i++) {
  document.write(`Element at index  ${i} is ${fruits[i]} <br/> `);
}

// Question no 6

// Counting
document.write(`<br />Counting: <br />`);
for (var i = 1; i <= 15; i++) {
  document.write(`${i},`);
}

// Reverse Counting
document.write(`<br />Reverse Counting: <br />`);
for (var i = 10; i >= 1; i--) {
  document.write(`${i},`);
}

// Even Counting
document.write(`<br /> Even Counting: <br />`);
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(`${i},`);
  }
}

// Odd Counting
document.write(`<br /> Odd Counting: <br />`);
for (var i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    document.write(`${i},`);
  }
}

// Series Counting
document.write(`<br /> Series Counting: <br />`);
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(`${i}k,`);
  }
}

// Question no 7

var a = ["cake", "apple pie", "cookie", "chips", "patties"];

var Userinput = prompt("Please Enter an item");

var available = "no";

for (var i = 0; i < a.length; i++)
  if (Userinput === a[i]) {
    available = "yes";
    document.write(
      `<br /> ${Userinput} is available at index ${i} in our bakery <br />`
    );
  }
if (available === "no") {
  document.write(
    `<br />We are sorry. ${Userinput} is not available in our bakery <br />`
  );
}

// Question no 8

var num = [24, 53, 78, 91, 12];
document.write(`<br /> Array Items: ${num} <br />`);

var largestNum = num[0];

for (var i = 1; i < num.length; i++) {
  if (num[i] > largestNum) {
    largestNum = num[i];
  }
}

document.write(`<br />Largest Number is: ${largestNum} <br /><br />`);

// Question no 9

var num1 = [24, 53, 78, 91, 12];
document.write(`<br /> Array Items: ${num1} <br />`);

var smallestNum = num[0];

for (var i = 1; i < num1.length; i++) {
  if (num[i] < largestNum) {
    smallestNum = num1[i];
  }
}

document.write(`<br />Smallest Number is: ${smallestNum} <br /><br />`);

// Question no 10

document.write("Multiples of 5 ranging 1 to 100." + "<br />");

for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(`${i}, `);
  }
}
