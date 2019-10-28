/* Zadatak 1. Find the mnd max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
 */

function finder(array) {

    var min = array[0];
    var max = array[0];
    var minindex = 0;
    var maxindex = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minindex = i;

        } if (array[i] > max) {
            max = array[i];
            maxindex = i;

        }

    }
    array[minindex] = max;
    array[maxindex] = min;
    return array;
}
console.log(finder([3, 500, 12, 149, 53, 414, 1, 19]));

/* Zadatak 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
 */

function divandadd(array) {

    var newarray = [];

    for (var i = 0; i < array.length; i++) {
        if ((array[i] / 2) + 5 !== 0) {
            array[i] = (array[i] / 2) + 5;
        } else {
            array[i] = 20;
        }

    }
    return array;
}
console.log(divandadd([3, 500, -10, 149, 53, 414, 1, 19]));


/* Zadatak 3.  Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
 */

function marks(name, mark) {

    var result = '';

    for (var i = 0; i < name.length; i++) {
        if (mark[i] > 50 && mark[i] < 61) {
            result += name[i] + ' acquired ' + mark[i] + ' points and earned 6. \n'
        }
        if (mark[i] > 60 && mark[i] < 71) {
            result += name[i] + ' acquired ' + mark[i] + ' points and earned 7.\n'
        }
        if (mark[i] > 70 && mark[i] < 81) {
            result += name[i] + ' acquired ' + mark[i] + ' points and earned 8.\n'
        }
        if (mark[i] > 80 && mark[i] < 91) {
            result += name[i] + ' acquired ' + mark[i] + ' points and earned 9.\n'
        }
        if (mark[i] > 90) {
            result += name[i] + ' acquired ' + mark[i] + ' points and earned 10.\n'
        }
        if (mark[i] < 51) {
            result += name[i] + ' acquired ' + mark[i] + ' points and failed to complete the exam.\n'
        }


    }

    return result;
}
console.log(marks(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));


/* Zadatak 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

 */


/* Zadatak 5 (skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
 */







/* Zadatak 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbefrom trs 1 to 500 he calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000

 */



function addandsub() {

    var result = 0;

    for (var i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
            result += i;

        }
    }
    for (i = 0; i <= 500; i++) {
        if (i % 2 !== 0) {
            result -= i;
        }
    }
    result *= 12.5;
    return result;
}

console.log(addandsub());

/* Zadatak 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
 */

function define(array) {

    var newstring = '';

    for (i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "string") {

            if (array[i].length > 1) {
                newstring += array[i][0] + array[i][1];
            }

        }
    }
    return newstring;
}
console.log(define(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

/* Zadatak 8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
 */

function program(string) {

    var newstring = '';
    for (i = string.length - 1; i >= 0; i--) {
        newstring += string[i];
    }
    return newstring;
}

console.log(program('Belgrade Institute of Technology'));

/* Zadatak 9. Write a program that displays all the combinations of two numbers between 1 and 7. Don't

function display() {

}