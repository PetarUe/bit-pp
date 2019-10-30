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
console.log(parseFloat(i));
console.log(isIntiger(i));


var i = false;
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

    string = "";

    for (var i = 1; i < number; i++) {
        for (i = 1; i < number; i++) {

        }
    }
}

