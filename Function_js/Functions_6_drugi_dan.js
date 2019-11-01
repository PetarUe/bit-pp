//PREDEFINED


/* 3.
Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/
"strict";

function filter(array) {
    var newarray = [];

    for (var i = 0; i < array.length; i++) {


        if (array[i] === parseFloat(array[i]) && array[i] !== 0) {
            newarray[newarray.length] = array[i];
        }
    }
    return newarray;
}

console.log(filter([NaN, 0, 15, false, -22, '', undefined, 47, null]));




//proba
var i = 22.5;
if (parseFloat(i) !== NaN) {
    console.log(parseFloat(i));
}
console.log(parseFloat(i));
console.log(isIntiger(i));


var i = undefined;
console.log(parseFloat(i));


/*4.Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
 */

"use strict";
function calculate(array) {

    var result = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === parseInt(array[i])) {
            result += 1
        }
    }
    return result;
}
console.log(calculate([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/*Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
 */
"use strict";
function calculate(array) {

    var result = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === parseFloat(array[i]) && parseFloat(array[i]) !== parseInt(array[i])) {
            result += 1
        }
    }
    return result;
}
console.log(calculate([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


//EXSERCISE 6

/*1.Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
 */
"use strict"
function vowels(string) {

    var result = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
            result += 1
        }
    }
    return result;
}
console.log(vowels("Hi there!"));

/*2.Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
 */

"use strict";

function combine(array1, array2) {

    var result = [];

    for (var i = 0; i < array2.length; i++) {
        result[result.length] = array1[i];
        result[result.length] = array2[i];


    }
    return result;
}
console.log(combine(["a", "b", "c"], [1, 2, 3]));

/*3.Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

 */

"use strict";

function rotate(array, k) {
    var result = [];
    if (k <= array.length) {
        for (var i = k; i < array.length; i++) {

            result[result.length] = array[i];
        }

        for (var i = 0; i < k; i++) {
            result[result.length] = array[i];
        }
    }
    if (k > array.length) {
        k = k % 6;
        for (var i = k; i < array.length; i++) {

            result[result.length] = array[i];
        }

        for (var i = 0; i < k; i++) {
            result[result.length] = array[i];
        }

    }


    return result;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 1115));

/*4.Write a function that takes a number and returns array of its digits.
 */
"use strict";
function digit(number) {

    var string = number + "";
    var array = [];


    for (var i = 0; i < string.length; i++) {

        array[i] = parseInt(string[i]);
    }
    return array;
}
console.log(digit(256));

/*5.Write a program that prints a multiplication table for numbers up to 12.
 */

"use strict";
function table(number) {

    var string = "";

    for (var i = 1; i <= number; i++) {
        for (var j = 1; j <= number; j++) {
            string += i + " x " + j + " = " + i * j + "\n";
        }
        string += "---------------  \n"
    }
    return string;
}

console.log(table(10));


/*6.Write a function to input temperature in Centigrade and convert to Fahrenheit.
 */
"use strict";

function temperature(x) {

    var result = "";
    result = x * 1.8 + 32;
    result += "F";
    return result;
}
console.log(temperature(35));

/*7.Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
 */

function max(array) {

    var newarray = [];
    var arrayone = [];
    var index = 0;

    for (var i = 0; i < array.length; i++) {
        var floatValue = parseFloat(array[i]);

        if (!Number.isNaN(floatValue) && Number.isFinite(floatValue)) {
            newarray[newarray.length] = array[i];
        }
    }
    for (i = 1; i < newarray.length; i++) {
        if (newarray[index] < newarray[i]) {
            index = i;
        }
    }

    arrayone[0] = newarray[index];
    return arrayone;
}

console.log(max([5, 9, 74, null, -4, undefined, 77, Infinity]));


/*8.Write a function to find the maximum and minimum elements. Function returns an array.
 */

function find(array) {

    var newarray = [];
    var indexmin = 0;
    var indexmax = 0;

    for (i = 0; i < array.length; i++) {
        if (array[indexmax] < array[i]) {
            indexmax = i;
        }
    }
    newarray[newarray.length] = array[indexmax];

    for (i = 0; i < array.length; i++) {
        if (array[indexmin] > array[i]) {
            indexmin = i;
        }
    }
    newarray[newarray.length] = array[indexmin];

    return newarray;
}
console.log(find([8, 9, 17, 1, 11, -1, 0]));

/*9.Write a function to find the median element of array.
 */

function median(array) {

    var result = [];


    if (array.length % 2 === 0) {
        result[result.length] = array[array.length / 2 - 1];
        result[result.length] = array[array.length / 2];
    }
    if (array.length % 2 === 1) {
        result[result.length] = array[(array.length - 1) / 2];
    }


    return result;
}
console.log(median([3, 4, 6, 7, 8, 32, 43, 1]));

/*10.Write a function to find the element that occurs most frequently.
 */
function numbers(array) {
    var num = 0;
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        var j = array[0];
        if (array[i] === j) {
            counter = num++;
        }
    }

    return num;
}
var result = numbers([3, 4, 6, 7, 8, 32, 43, 3]);
console.log(result);


// SA CASA VEZBANJE 


function buildStarRow(char, rowLength) {
    var row = "";

    for (var i = 0; i < rowLength; i++)
        row += char;




    return row;
}
console.log(buildStarRow("*", 10));

for (var i = 0; i < 5;) {
    console.log("*");
}