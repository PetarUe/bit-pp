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
    for (i = 1; i < a; i++) {
        if (a % i === 0) {
            return "false"

        }
    }

}
console.log(number(5))



