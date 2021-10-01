var prompt = require("prompt-sync")();
var grade = prompt("enter number grade ");

function score(grade) {
  if (grade <= 100 && grade >= 97) {
    console.log("Your grade is.... A+");
  } else if (grade <= 96 && grade >= 93) {
    console.log("Your grade is.... A");
  } else if (grade <= 92 && grade >= 90) {
    console.log("Your grade is.... A-");
  } else if (grade <= 89 && grade >= 87) {
    console.log("Your grade is.... B+");
  } else if (grade <= 86 && grade >= 83) {
    console.log("Your grade is.... B");
  } else if (grade <= 82 && grade >= 80) {
    console.log("Your grade is.... B-");
  } else if (grade <= 79 && grade >= 77) {
    console.log("Your grade is.... C+");
  } else if (grade <= 76 && grade >= 73) {
    console.log("Your grade is.... C");
  } else if (grade <= 72 && grade >= 70) {
    console.log("Your grade is.... C-");
  } else if (grade <= 69 && grade >= 67) {
    console.log("Your grade is.... D+");
  } else if (grade <= 66 && grade >= 65) {
    console.log("Your grade is.... D");
  } else if (grade < 65) {
    console.log("Your grade is.... F");
  } else {
    console.log("please enter a valid grade.");
  }
}
/*if (typeof grade === "string") {
  console.log("Please enter a number between 0 and 100");
}*/
score(grade);
