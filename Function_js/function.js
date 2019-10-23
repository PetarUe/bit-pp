/*Write a program that calculates the maximum of two given numbers.
 */

function add(a, b) {
    if (a > b) {
        max = a;
    }
    if (b > a) {
        max = b
    }
    return max;
}

console.log(add(19, 8));

/*Write a program that checks if a given number is odd. */


function roulette(a) {
    if (a % 2 === 0) {
        result = "Number is even!";
    }
    if (a % 2 === 1) {
        result = "Number is odd!";
    }
    return result;
}
console.log(roulette(9));

/*Write a program that checks if a given number is a three digit long number.
 */

function digit(a) {
    if (a >= 100 && a <= 999) {
        result = "Number has three digit!"
    }
    else {
        result = "Number doesn't have three digit!";
    }
    return result;
}
console.log(digit(1158));

/*Write a program that calculates an arithmetic mean of four numbers. */

function arithmetic(a, b, c, d) {
    result = (a + b + c + d) / 4
    return result;
}
console.log(arithmetic(10, 10, 20, 100));

/*Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
*****
*    *
*    *
*    *
*****
 */
function shape(dimension) {
    var row = "";
    var shape = "";

    for (var rowIndex = 0; rowIndex < dimension; rowIndex++) {
        row = ''; //resetuje row

        for (var columnIndex = 0; columnIndex < dimension; columnIndex++) {
            if (columnIndex === 0 || columnIndex === dimension - 1 || rowIndex === 0 || rowIndex === dimension - 1) {
                row += "*"
            } else {
                row += ' '
            }
        }

        shape += row + '\n';
    }
    return shape;
}
console.log(shape(6));


/*Write a program that calculates a number of digits of a given number. 
 */
function digit(a) {

    var empty = "";
    empty += a;
    var b;
    b = empty.length;

    return b;
}
console.log(digit(4534));


//drugi nacin (pravi)

function br_cifara(x) {
    var br = 0;
    while (x > 1) {
        br++;
        x = x / 10;
    }
    return br;
}
console.log(br_cifara(123));
/*Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
  */





