/* 1 Write a function to check whether the `input` is a string or not.
*/

function input(a) {
    if (typeof a === "string") {
        result = "true"

    }
    else {
        result = "false";
    }
    return result;
}
console.log(input("My name is Bart"));

// 2. Write a function to check whether a string is blank or not.


function input(a) {
    if (typeof a === "string" && a.length === 0) {

        result = "true"

    }
    else {
        result = "false";
    }
    return result;
}
console.log(input(""));

//3. Write a function that concatenates a given string n times (default is 1).

function concatenate(n) {

    var result = "";
    var a = "Ha";

    for (var i = 0; i < n; i++) {
        result += a;
    }
    return result;
}
console.log(concatenate(4));

//drugi nacin

function concatenate(a, n) {

    var result = "";

    for (var i = 0; i < n; i++) {
        result += a;
    }
    return result;
}
console.log(concatenate("Ha", 5));

/*4.Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function letter(a) {

    var result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === "n" || a[i] === "N") {
            result += 1;
        }
    }
    return result;
}
console.log(letter("Number is neki broj nnn"));

/*5.Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
 */

function char(a, b) {

    var result = -1;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            result = i + 1;
            break;
        }
    }

    return result;
}
console.log(char("Dobar dan ljudir", "r"));

/*6
Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */


function char(a, b) {

    var result = -1;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            result = i + 1;

        }
    }

    return result;
}
console.log(char("Dobar dan ljudir hhdhsdia r", "r"));

/*7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
 */

function convert(a) {

    var niz = [];

    for (i = 0; i < a.length; i++) {
        if (a[i] === " ") {
            niz[i] = null;
        } else {
            niz[i] = a[i];
        }
    }
    return niz;

}
console.log(convert("Dobar dan"))

/*8.Write a function that accepts a number as a parameter and checks if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

function number(a) {

    var result = "Yes, it is prime!"

    for (i = 2; i < a; i++) {
        if (a % i === 0) {
            result = "Not prime!"
            break;
        }
    }
    return result;
}
console.log(number(6));


/*9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string" */


function string(text, letter) {


    var result = "";


    for (i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            result += letter;
        }
        else {
            result += text[i];
        }
    }
    return result;
}
console.log(string("My random text!", "*"));

/*10. Write a function to get the first n characters and add “...” at the end of newly created string.
*/
function add(str, n) {

    var res = '';
    for (var i = 0; i < n; i++) {
        res += str[i];
    }
    res += '...';

    return res;

}

console.log(add('AnavoliMilovana', 7));


/*11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]*/

function array(elements) {

    var result = [];


    for (i = 0; i < elements.length; i++) {

        var converted = parseFloat(elements[i]);

        if (Number.isNaN(converted) || !Number.isFinite(converted)) {
            continue;
        }
        result[result.length] = converted;
    }
    return result;


}
console.log(array(["1", "21", undefined, "42", "1e+3", Infinity]));


/*12.Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed */



function retirement(pol, godine) {

    var result;

    if (pol === "m" && godine <= 65) {
        result = 65 - godine;
    } else if (pol === "m" && godine > 65 || pol === "z" && godine > 60) {
        result = "Already retired!";
    } else if (pol === "z" && godine <= 60) {
        result = 60 - godine;
    }
    return result;
}
console.log(retirement("m", 28));


/*12.Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
 */




