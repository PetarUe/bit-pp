// Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
//For input 1, output should be “Monday”.

var dayAsNumber = 4;
var dayAsText;

switch (dayAsNumber) {
    case 1:
        dayAsText = " Monday";
        break;
    case 2:
        dayAsText = "Tuesday";
        break;
    case 3:
        dayAsText = "Wednesday";
        break;
    case 4:
        dayAsText = "Thursday";
        break;
    case 5:
        dayAsText = "Friday";
        break;
    case 6:
        dayAsText = "Saturday";
        break;
    case 7:
        dayAsText = "Sunday";
        break;
}
console.log(dayAsText)

//Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
//For input 1, output should be “Monday”.
//For input 10, output should be “Input must be a number between 1 and 7”.


var dayAsNumber = 16;
var dayAsText;

switch (dayAsNumber) {
    case 1:
        dayAsText = " Monday";
        break;
    case 2:
        dayAsText = "Tuesday";
        break;
    case 3:
        dayAsText = "Wednesday";
        break;
    case 4:
        dayAsText = "Thursday";
        break;
    case 5:
        dayAsText = "Friday";
        break;
    case 6:
        dayAsText = "Saturday";
        break;
    case 7:
        dayAsText = "Sunday";
        break;
    default:
        dayAsText = "Input smust be number between 1 to 7";
        break;
}
console.log(dayAsText)

// Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
//For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
//  For input 12, output should be “Input must be number between 1 and 7”.


var dayAsNumber = 4;
var dayAsText;

switch (dayAsNumber) {
    case 1:
        dayAsText = "It\'s weekday";
        break;
    case 2:
        dayAsText = "It\'s weekday";
        break;
    case 3:
        dayAsText = "It\'s weekday";
        break;
    case 4:
        dayAsText = "It\'s weekday";
        break;
    case 5:
        dayAsText = "It\'s weekday";
        break;
    case 6:
        dayAsText = "It\'s weekend";
        break;
    case 7:
        dayAsText = "It\'s weekend";
        break;
    default:
        dayAsText = "Input must be number between 1 to 7";
        break;
}
console.log(dayAsText)

//Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
//For input 2, output should be “February”.
//For input 6, output should be “June”.
//For input 13, output should be “Input must be a number between 1 and 12”.


var monthAsNumber = 2;
var monthAsText;

switch (monthAsNumber) {
    case 1:
        monthAsText = "January";
        break;
    case 2:
        monthAsText = "February";
        break;
    case 3:
        monthAsText = "March";
        break;
    case 4:
        monthAsText = "April";
        break;
    case 5:
        monthAsText = "May";
        break;
    case 6:
        monthAsText = "June";
        break;
    case 7:
        monthAsText = "July";
        break;
    case 8:
        monthAsText = "August";
        break;
    case 9:
        monthAsText = "September";
        break;
    case 10:
        monthAsText = "October";
        break;
    case 11:
        monthAsText = "November";
        break;
    case 12:
        monthAsText = "December";
        break;
    default:
        monthAsText = "Number must be a number between 1 and 12";
        break;
}

console.log(monthAsText)

//Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 

var monthAsNumber = 2;
var monthAsText;

switch (monthAsNumber) {
    case 1:
        monthAsText = "Winter";
        break;
    case 2:
        monthAsText = "Winter";
        break;
    case 3:
        monthAsText = "Spring";
        break;
    case 4:
        monthAsText = "Spring";
        break;
    case 5:
        monthAsText = "Spring";
        break;
    case 6:
        monthAsText = "Summer";
        break;
    case 7:
        monthAsText = "Summer";
        break;
    case 8:
        monthAsText = "Summer";
        break;
    case 9:
        monthAsText = "Autumn";
        break;
    case 10:
        monthAsText = "Autumn";
        break;
    case 11:
        monthAsText = "Autumn";
        break;
    case 12:
        monthAsText = "Winter";
        break;
    default:
        monthAsText = "Number must be a number between 1 and 12";
        break;
}

console.log(monthAsText)

//Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

var gradeMark = "A";
var gradeDescription;

switch (gradeMark) {
    case "A":
        gradeDescription = "A - \"Good job\" ";
        break;
    case "B":
        gradeDescription = "B - \"Pretty good\" ";
        break;
    case "C":
        gradeDescription = "C - \" Passed\" ";
        break;
    case "D":
        gradeDescription = "D - \" Not so good \" ";
        break;
    case "F":
        gradeDescription = "F - \" Failed\" ";
        break;
    default:
        gradeDescription = "Unknown grade";
        break;
}
console.log(gradeDescription)

//Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".


var city = "Wien";
var country;

switch (city) {
    case "Uzice":
        country = "Serbia";
        break;
    case "Belgrade":
        country = "Serbia";
        break;
    case "Krusevac":
        country = "Serbia";
        break;
    case "Nis":
        country = "Serbia";
        break;
    case "Kraljevo":
        country = "Serbia";
        break;
    case "Subotica":
        country = "Serbia";
        break;
    case "Munich":
        country = "Germany";
        break;
    case "Frankfurt":
        country = "Germany";
        break;
    case "Hamburg":
        country = "Germany";
        break;
    case "Rome":
        country = "Italy";
        break;
    case "Venice":
        country = "Italy";
        break;
    case "Verona":
        country = "Italy";
        break;
    case "Madrid":
        country = "Spain";
        break;
    case "Barcelona":
        country = "Spain";
        break;
    case "Wien":
        country = "Austria";
        break;
    default:
        country = "Choose another city";
        break;
}
console.log(country)

//Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var numberOne = 1;
var numberTwo = 0;
var result;
var operator = "/";

switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        if (numberTwo === 0)
            result = "Number two can\'t be 0";
        else;
        result = numberOne / numberTwo;
        break;
}
console.log(result)
