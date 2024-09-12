// Question 1

var a = 10;
var b = 5;
var c = a + b;

// Question 2

var d = a - b;

var e = a * b;

var f = a / b;

var g = a % b;

document.write("Sum of " + a + " and " + b + " is " + c + "<br/> <br/>");

document.write(
  "Subtraction of " + a + " and " + b + " is " + d + "<br/> <br/>"
);

document.write("Multiply of " + a + " and " + b + " is " + e + "<br/> <br/>");

document.write("Division of " + a + " and " + b + " is " + f + "<br/> <br/>");

document.write("Modulus of " + a + " and " + b + " is " + g + "<br/> <br/>");

// Question 3

var num;
num = 9;

document.write("Value after variable declaration is " + num + "<br/> <br/>");

var num1 = 5;

document.write("Initial value " + num1 + "<br/> <br/>");

++num1;

document.write("Value after increment is " + num1 + "<br/> <br/>");

num2 = num1 + 7;

document.write("Value after addition is " + num2 + "<br/> <br/>");

--num2;

document.write("Value after decrement is " + num2 + "<br/> <br/>");

var num3 = num2 % 3;

document.write("The remainder is " + num3 + "<br/> <br/>");

// Question 4

var ticket = 600;

var SumTicket = ticket * 5;

document.write(
  "Total cost to buy 5 tickets to a movie is " +
    SumTicket +
    "PKR" +
    "<br/> <br/> "
);

// Question 5

var table = prompt("What number of table you want to learn");

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

document.write("Table of " + table + "<br/> <br/>");

document.write(table + " x 1 = " + a + "<br/>");

document.write(table + " x 2 = " + b + "<br/>");

document.write(table + " x 3 = " + c + "<br/>");

document.write(table + " x 4 = " + d + "<br/>");

document.write(table + " x 5 = " + e + "<br/>");

document.write(table + " x 6 = " + f + "<br/>");

document.write(table + " x 7 = " + g + "<br/>");

document.write(table + " x 8 = " + h + "<br/>");

document.write(table + " x 9 = " + i + "<br/>");

document.write(table + " x 10 = " + j + "<br/><br/><br/>");

// Question 6

var celsius = 31;
var fahrenheit = 90;

var ctof = (celsius * 9) / 5 + 32;
var ftoc = ((fahrenheit - 32) * 5) / 9;

document.write(celsius + "C is " + ctof + "F" + "<br/>");
document.write(fahrenheit + "F is " + ftoc + "C" + "<br/><br/><br/>");

// Question 7

var item1 = 650;
var item2 = 100;
var shipping = 100;
var quantity1 = prompt("How many quantity of item 1?");
var quantity2 = prompt("How many quantity of item 2?");

alert(quantity1);
alert(quantity2);

document.write("Price of item 1 is " + item1 + "<br/>");
document.write("Price of item 2 is " + item2 + "<br/>");
document.write("Quantity of item 1 is " + quantity1 + "<br/>");
document.write("Quantity of item 2 is " + quantity2 + "<br/>");
document.write("Shipping charges is " + shipping + "<br/>");

document.write(
  "Total cost of your order is " +
    Number(item1 * quantity1 + item2 * quantity2 + shipping) +
    "<br/><br/><br/>"
);

// Question 8

var marks = 1000;
var marksObtained = 750;

document.write("Marks Sheet" + "<br/><br/>");

document.write("Total Marks: " + marks + "<br/>");
document.write("Obtained Marks: " + marksObtained + "<br/>");
document.write(
  "Percentage: " + Number((marksObtained / marks) * 100) + "<br/><br/><br/>"
);

// Question 9
document.write("Currency in PKR" + "<br/><br/>");

var usd = 104.8;
var sar = 28;

document.write(
  "The total currency in Pakistani Rupees is: " +
    Number(10 * usd + 25 * sar) +
    "<br/><br/>"
);

// Question 10

var num10 = 20;

document.write(
  "The result after the arithmetic operations is: " +
    Number(((num10 + 5) * 10) / 2) +
    "<br/><br/><br/>"
);

// Question 11

document.write("Age Calculator" + "<br/><br/>");

var currentYear = 2024;
var birthYear = prompt("What is your birth year?");

alert(birthYear);

document.write("Current Year " + currentYear + "<br/>");
document.write("Birth Year " + birthYear + "<br/>");
document.write(
  "Your age is " + Number(currentYear - birthYear) + "<br/><br/><br/>"
);

// Question 12

document.write("The Geometrizer" + "<br/><br/>");

var radius = 30;

var pi = 3.142;

var circumference = 2 * pi * radius;

var area = pi * radius * radius;

document.write("Radius of circle is: " + radius + "<br/>");
document.write("The circumference is: " + circumference + "<br/>");
document.write("The area is: " + area + "<br/><br/><br/>");

// Question 13

document.write("The Lifetime Supply Calculator" + "<br/><br/>");

var snack = "chocolatto";
var age13 = 25;
var maxAge = 70;
var amountOfSnack = 5;

document.write("Fav Snack is: " + snack + "<br/>");
document.write("Current Age is: " + age13 + "<br/>");
document.write("Estimated Max Age is: " + maxAge + "<br/>");
document.write("Amoun of snacks per day is: " + amountOfSnack + "<br/>");

document.write(
  "You will need " +
    Number(365 * amountOfSnack * (maxAge - age13)) +
    snack +
    " to last you until the ripe old age of " +
    maxAge +
    "<br/><br/><br/>"
);
