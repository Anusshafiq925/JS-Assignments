// question no 1

var studentNames = [];

// question no 2

var studentNames = new Array();

// question no 3

var stringArray = ["one", "two", "three", "four", "five"];

// question no 4

var numberArray = [1, 2, 3, 4, 5];

// question no 5

var booleanArray = [true, false];

// question no 6

var mixArray = [
  "one",
  "two",
  "three",
  "four",
  "five",
  1,
  2,
  3,
  4,
  5,
  true,
  false,
];

// question no 7

var degree = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write(`<h1> Qualifications: </h1>
     <ol>
      <li>${degree[0]}</li>
      <li>${degree[1]}</li>
      <li>${degree[2]}</li>
      <li>${degree[3]}</li>
      <li>${degree[4]}</li>
      <li>${degree[5]}</li>
      <li>${degree[6]}</li>
      <li>${degree[7]}</li>

    </ol><br />`);

//  question no 8

var studentName = ["Michael", "John", "Tony"];
var studentScore = [320, 230, 480];
var total = 500;

document.write(`
    Score of ${studentName[0]} is ${studentScore[0]}. Percentage: ${
  (studentScore[0] / total) * 100
}% <br />
    Score of ${studentName[1]} is ${studentScore[1]}. Percentage: ${
  (studentScore[1] / total) * 100
}% <br />
    Score of ${studentName[2]} is ${studentScore[2]}. Percentage: ${
  (studentScore[2] / total) * 100
}% <br /> <br /> <br />`);

//  question no 9(a)

var colors = [" red", " blue", " green", " white", " black"];

document.write(colors + "<br /><br />");

colors.unshift(prompt("What color you want to add to the beginning"));
document.write(colors + "<br /><br />");

var colorsOne = [" red", " blue", " green", " white", " black "];

document.write(colorsOne + "<br /><br />");

colorsOne.push(prompt("What color you want to add to the end"));
document.write(colorsOne + "<br /><br />");

var colorsTwo = [" red", " blue", " green", " white", " black "];
document.write(colorsTwo + "<br /><br />");

colorsTwo.unshift(
  prompt("What color the first color you want to add to the beginning "),
  prompt("What color the second color you want to add to the beginning ")
);
document.write(colorsTwo + "<br /><br />");

var colorsThree = [" red", " blue", " green", " white", " black "];
colorsThree.shift();
document.write(colorsThree + "<br /><br />");

var colorsFour = [" red", " blue", " green", " white", " black "];
colorsFour.pop();
document.write(colorsFour + "<br /><br />");

var colorsFive = [" red", " blue", " green", " white", " black "];

document.write(colorsFive + "<br /><br />");

var desiredIndex = +prompt("Please Tell Your Desired Index to Add Value");
var desiredColor = prompt("Please name the color you want to add");

colorsFive.splice(desiredIndex, 0, desiredColor);
document.write(colorsFive + "<br /><br />");

var colorsSix = [" red", " blue", " green", " white", " black "];

document.write(colorsSix + "<br /><br />");
var desireIndex = +prompt("Whichh index you want to delete Colors?");
var desireCount = +prompt("How many colors you want to delete?");
colorsSix.splice(desireIndex, desireCount);
document.write(colorsSix + "<br /><br />");

//  question no 10

var studentScoreone = [320, 230, 480, 120];
document.write(`
  Scores of Students: ${studentScoreone} <br/>`);
var SortNum = studentScoreone.sort();

document.write(`Ordered Scores of Students: ${SortNum} <br/><br/>`);

//  question no 11

var citeis = ["Karachi ", "Lahore ", "Islamabad ", "Quetta ", "Peshawar"];

document.write(`Cities List:<br/>${citeis}<br/> <br/>`);

var selectedCities = citeis.slice(2, 4);
document.write(`Selected Cities List:<br/> ${selectedCities} <br/><br/>`);

//  question no 12

var arr = ["This", "is", "my", "cat"];
document.write(`Array:<br/> ${arr} <br/><br/>`);

var newArr = arr.join(" ");
document.write(`String:<br/> ${newArr} <br/><br/>`);

//  question no 13

var components = ["keyboard", "mouse", "printer", "moniter"];

document.write(`Devives:<br/ > ${components} <br/ ><br/ >`);

var fifo = components.shift();
document.write(`Out:<br/ > ${fifo} <br/ ><br/ >`);

var fifo1 = components.shift();
document.write(`Out:<br/ > ${fifo1} <br/ ><br/ >`);

var fifo2 = components.shift();
document.write(`Out:<br/ > ${fifo2} <br/ ><br/ >`);

var fifo3 = components.shift();
document.write(`Out:<br/ > ${fifo3} <br/ ><br/ >`);

//  question no 14

var devices = ["keyboard", "mouse", "printer", "moniter"];

document.write(`Devives:<br/ > ${devices} <br/ ><br/ >`);

var lifo = devices.pop();
document.write(`Out:<br/ > ${lifo} <br/ ><br/ >`);

var lifo1 = devices.pop();
document.write(`Out:<br/ > ${lifo1} <br/ ><br/ >`);

var lifo2 = devices.pop();
document.write(`Out:<br/ > ${lifo2} <br/ ><br/ >`);

var lifo3 = devices.pop();
document.write(`Out:<br/ > ${lifo3} <br/ ><br/ >`);

//  question no 15

var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`
    <select>
    <option>${mobiles[0]} </option>
    <option>${mobiles[1]} </option>
    <option>${mobiles[2]} </option>
    <option>${mobiles[3]} </option>
    <option>${mobiles[4]} </option>
    <option>${mobiles[5]} </option>
    </select>
    `);
