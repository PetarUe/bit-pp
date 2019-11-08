/*Zadatak 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
 */

var duplicate = function () {
    var arr = [2, 4, 7, 11, -2, 1];
    var arrNew = [];
    var elementOne;


    for (var i = 0; i < arr.length; i++) {
        elementOne = arr[i];


        arrNew.push(elementOne);
        arrNew.push(elementOne);

    }
    return arrNew;
}
console.log(duplicate());


/*Zadatak 2.
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
 */

var remover = function (arr) {

    var sortarr = arr.sort();
    var arrNew = [];

    for (var i = 0; i < sortarr.lenght; i++) {


        if (arrNew[i])
        
}
}

console.log(remover([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/*Zadatak 3.a
Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/


function checkOdd(array) {
    if (array.length % 2 === 0) {
        var result = false;
    } else {
        var result = true;
    }
    return result;
}

console.log(checkOdd([1, 2, 9, 2, 1]));

/*Zadatak 3.b
Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, 
print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

function count(array) {
    if (array.length % 2 === 0) {
        var result = "Error!!!"
    } else {

        var centerValue = array[(array.length + 1) / 2];
        var counter = 0;

        for (var i = 0; i < array.length; i++) {
            if (centerValue > array[i]) {
                counter++;
            }
        }
    }
}
console.log(count([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


/*
var b = 2;
console.log(b++);
*/

/*Zadatak 4.
Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }*/

function checkSmallest() {
    var array = [1, 4, -2, 11, 8, 1, -2, 3];
    var sortedArray = array.sort(function (a, b) { return a - b });
    
    var smallestNum = sortedArray[0];

    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === smallestNum) {
            var smallestIndex = i;
        }
    }
}