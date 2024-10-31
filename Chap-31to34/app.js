// Question no 1
document.write(`Question no. 1<br /><br />`);

var date = new Date();
document.write(`${date} <br /><br />`);

// Question no 2

document.write(`Question no. 2<br /><br />`);

var currentMonth = new Date().getMonth();
var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.write(` Current month is: ${month[currentMonth]} <br /><br />`);

// Question no 3

document.write(`Question no. 3<br /><br />`);

var currentday = new Date().getDay();

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var currentdays = days[currentday].slice(0, 3);
document.write(` Today is: ${currentdays} <br /><br />`);

// Question no 4

document.write(`Question no. 4<br /><br />`);

if (currentday === 5 && currentday === 6) {
  document.write(` It's Fun day <br /><br />`);
} else {
  document.write(` It's a Working day<br /><br />`);
}

// Question no 5

document.write(`Question no. 5<br /><br />`);

var currentDate = new Date().getDate();

if (currentDate <= 14) {
  document.write(` First fifteen days of a month <br /><br />`);
} else {
  document.write(` Last fifteen days of a month <br /><br />`);
}

// Question no 6

document.write(`Question no. 6<br /><br />`);

document.write(`Current Date:${date} <br />`);
var elapsedMs = date.getTime();
document.write(
  `Elapsed milliseconds since January 1, 1970: ${elapsedMs} <br />`
);

var elapsedMint = date.getTime() / (1000 * 60 * 60);
document.write(
  `Elapsed minutes since January 1, 1970: ${elapsedMint} <br /><br />`
);

// Question no 7

document.write(`Question no. 7<br /><br />`);

var hour = new Date().getHours();

if (hour >= 0 && hour < 11) {
  document.write(`Its AM <br /><br />`);
} else {
  document.write(`Its PM <br /><br />`);
}

// Question no 8

document.write(`Question no. 8<br /><br />`);
var laterDate = new Date();
laterDate.setDate(laterDate.getDate() - 1);
document.write(`Later Date: ${laterDate} <br /><br />`);

// Question no 9

document.write(`Question no. 9<br /><br />`);

var ramadan2015 = new Date("June 18,2015");
var currentDate1 = new Date();
var diff = currentDate1 - ramadan2015;
var diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(
  `${diffDays} days  have passed since 1st Ramadan, 2015<br /><br />`
);

// Question no 10

document.write(`Question no. 10<br /><br />`);
document.write(`On reference date ${date} <br />`);
var year2015 = new Date("Jan 1, 2015");
var secDiff = date - year2015;
var secondDiff = Math.floor(secDiff / 1000);
document.write(
  `${secondDiff} seconds has passed since beginning of 2015 10<br /><br />`
);

// Question no 11

document.write(`Question no. 11<br /><br />`);
document.write(`Current Date: ${date} <br />`);
var hourAgo = new Date();
hourAgo.setHours(hourAgo.getHours() - 1);
document.write(`1 hour ago, it was: ${hourAgo} <br /><br />`);

// Question no 12

document.write(`Question no. 12<br /><br />`);

document.write(`Current Date: ${date} <br />`);
var yearsAgo = new Date();
yearsAgo.setFullYear(yearsAgo.getFullYear() - 100);
document.write(`100 years back, it was: ${yearsAgo} <br /><br />`);

// Question no 13

document.write(`Question no. 13<br /><br />`);
var userAge = +prompt("Enter your Age");
document.write(`Your age is: ${userAge} <br />`);
var year = new Date();
year.setFullYear(year.getFullYear() - userAge);
var birthYear = year.getFullYear();
document.write(`Your birth year is: ${birthYear} <br /><br />`);

// Question no 14

document.write(`Question no. 14<br /><br />`);
document.write(`<button onclick="bill()">Generate Your Bill</button><br />`);
function bill() {
  var numUnit = 410;
  var chargesunit = 16;
  var payable = numUnit * chargesunit;
  var late = 350;
  var afterPayable = payable + late;
  document.write(`
    <h1>K-Electric Bill</h1>
  
  <p>Customer Name: <strong>ABC Customer</strong></p>
  <p>Month: <strong>Febraury</strong></p>
  <p>Number of Units: <strong>${numUnit} </strong></p>
  <p>Charge per Unit: <strong>${chargesunit}</strong></p>
  <br/>
  <p>Net Amount Payable(within Due Date): <strong>${payable}</strong></p>
  <p>Late Payment Surcharge:<strong>${late}</strong></p>
  <p>Gross Amount Payable(after Due Date): <strong>${afterPayable}</strong></p>`);
}
