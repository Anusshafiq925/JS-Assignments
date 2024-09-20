// Question no 1

var a = 10;

document.write(`
    
    <p>Result:</p>
    <p>The value of a is:${a}</p>
    <br />
    <br />
    <p>The value of ++a is:${++a}</p>
    <p>Now the value of a is:${a}</p>
    <br />
    <br />
    <p>The value of a++ is:${a++}</p>
    <p>Now the value of a is:${a}</p>
    <br />
    <br />
    <p>The value of --a is:${--a}</p>
    <p>Now the value of a is:${a}</p>
    <br />
    <br />
    <p>The value of a-- is:${a--}</p>
    <p>Now the value of a is:${a}</p>`);

// Question no 2

var x = 1,
  y = 2;

console.log(--x);
// 0
console.log(--x - --y);
// -1 - 1
console.log(--x - --y + ++y);
// -2 - 0 + 1
console.log(--x - --y + ++y + y--);
// -3 - 0 + 1 + 1
// console.log(--x - --y + ++y + y--);

var result = --x - --y + ++y + y--;
// -4 - -1 + 0 - 0

// console.log(result);
document.write(`
     <p>x is: 1</p>
    <p>y is: 2</p>
    <br />
    <br />
    <p>Result is:${result}</p>`);

// Question no 3

var name1 = prompt("Enter your name");

alert("Welcome to my website " + name1);

// Question no 5

var table = prompt("What number of table you want to learn", 5);

alert(table);

a = table * 1;
b = table * 2;
c = table * 3;
d = table * 4;
e = table * 5;
f = table * 6;
g = table * 7;
h = table * 8;
i = table * 9;
j = table * 10;

document.write(` <h1>Table of ${table}</h1><br/> 
  <p>${table} x 1 = ${a}</p>
  <p>${table} x 2 = ${b}</p>
  <p>${table} x 3 = ${c}</p>
  <p>${table} x 4 = ${d}</p>
  <p>${table} x 5 = ${e}</p>
  <p>${table} x 6 = ${f}</p>
  <p>${table} x 7 = ${g}</p>
  <p>${table} x 8 = ${h}</p>
  <p>${table} x 9 = ${i}</p>
  <p>${table} x 10 = ${j}</p>
  
  `);

// Question no 6

var sub1 = prompt("Enter your 1st subject name");
var sub2 = prompt("Enter your 2nd subject name");
var sub3 = prompt("Enter your 3rd subject name");
var totalmark = 100;
var subObtain1 = +prompt("Enter your " + sub1 + " Obtained Marks");
var subObtain2 = +prompt("Enter your " + sub2 + " Obtained Marks");
var subObtain3 = +prompt("Enter your " + sub3 + " Obtained Marks");
var totalobtained = subObtain1 + subObtain2 + subObtain3;

document.write(`
  <table>
      <tr>
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
      </tr>
      <tr>
        <td>${sub1}</td>
        <td>${totalmark}</td>
        <td>${subObtain1}</td>
        <td>${(subObtain1 / totalmark) * 100}%</td>
      </tr>
      <tr>
        <td>${sub2}</td>
        <td>${totalmark}</td>
        <td>${subObtain2}</td>
        <td>${(subObtain2 / totalmark) * 100}%</td>
      </tr>
      <tr>
        <td>${sub3}</td>
        <td>${totalmark}</td>
        <td>${subObtain3}</td>
        <td>${(subObtain3 / totalmark) * 100}%</td>
      </tr>
      <tr>
        <th></th>
        <th>300</th>
        <th>${totalobtained}</th>
        <th>${(totalobtained / 300) * 100}</th>
      </tr>
    </table>
  `);
