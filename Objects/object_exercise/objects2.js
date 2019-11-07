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