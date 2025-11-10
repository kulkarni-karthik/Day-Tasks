// Even and Odd

let n = 22;
let num;

if (n % 2 == 0) {
  num = "Even";
} else {
  num = "Odd";
}

console.log("Number is:" + num);

// Age Calculator

let age = 69;
let category;

switch(true){
case (age < 13) :
    category = "Child";
    break;

    case (age >= 13 && age<=19) :
    category = "Teenager";
    break;

    case (age >= 19 && age <=59) :
    category = "Adult";
    break;

    default :
    category = "Senior";
}

console.log("Category is:" + category);

// Grade Calculator

let marks = 44;
let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A+";
} else if (marks >= 75 && marks <= 89) {
  grade = "A";
} else if (marks >= 60 && marks <= 74) {
  grade = "B";
} else if (marks >= 45 && marks <= 59) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("Your Grade is: " + grade);

//largest number

let a = 22;
b = 43;
c = 72;

let largest = (a > b) ? (a > c ? a : c) : (b > c ? b : c);

console.log("Largest number is:" + largest);

// Check leap year

let year = 2020;
let result;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  result = "Leap year";
} else {
  result = "Not a Leap year";
}

console.log("Given Year is:" + result);
