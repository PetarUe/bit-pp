/* 1. Write an array of months in a year. Using console.log display June, October and January from the array.*/

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[5]);
console.log(months[9]);
console.log(months[1]);


/*2. Write an arrays of days in a week. Using console.log display Sunday from the array.*/

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days[6]);

// Print all negative elements from the array [2, -4, 5, -2, -11].  

var numbers = [2, -4, 5, -2, -11];


if (numbers[0] < 0) {
    console.log(numbers[0]);
}
if (numbers[1] < 0) {
    console.log(numbers[1]);
}
if (numbers[2] < 0) {
    console.log(numbers[2]);
}
if (numbers[3] < 0) {
    console.log(numbers[3]);
}
if (numbers[4] < 0) {
    console.log(numbers[4]);
}

/*Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9]. */

var newNumbers = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var result = ''

if (newNumbers[0] % 3 === 0) {
    result = result + newNumbers[0] + ',';
}
if (newNumbers[1] % 3 === 0) {
    result = result + newNumbers[1] + ',';
}
if (newNumbers[2] % 3 === 0) {
    result = result + newNumbers[2] + ',';
}
if (newNumbers[3] % 3 === 0) {
    result = result + newNumbers[3] + ',';
}
if (newNumbers[4] % 3 === 0) {
    result = result + newNumbers[4] + ',';
}
if (newNumbers[5] % 3 === 0) {
    result = result + newNumbers[5] + ',';
}
if (newNumbers[6] % 3 === 0) {
    result = result + newNumbers[6] + ',';
}
if (newNumbers[7] % 3 === 0) {
    result = result + newNumbers[7] + ',';
}
if (newNumbers[8] % 3 === 0) {
    result = result + newNumbers[8];
}

console.log(result);

/* What is the index of 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

Using console.log:
Display the 3rd element of the array,
Display the 2nd element of the 3rd element. */

var somenumbers = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(somenumbers[0][3]);
console.log(somenumbers[3]);
var first = [7, 0, 7, 27]
console.log(first[2]);














