/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

var e = 3;
var a = [5, -4.2, 4, 7];
var i = 0;


for (i = 0; i < 4; i++) {
    if (e === a[i]) {
        var p = "Yes!";
        console.log(p);
        i = 5;
    }
}
if (p === "Yes!") {

} else {
    console.log("No");
}

/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var array = [-3, 11, 5, 3.4, -8];

for (i = 0; i < 5; i++) {
    if (array[i] > 0) {
        array[i] = array[i] * 2;
    }
}
console.log(array);

/*Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var a = [-2, 2, 2, -1, 6];

var smallest = a[0];
var index = 0;

for (i = 1; i < 5; i++) {
    if (a[i] < smallest) {
        smallest = a[i];
        index = i
    }
}
console.log(smallest + "," + index);

/*Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var array = [4, 2, 2, -1, 6];
var min = array[0];
var prevmin = array[0];

for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
        prevmin = min
        min = array[i];


    }
}
console.log(prevmin);

------------------------------------
var array = [4, 2, 2, 10, 6];

var smallest = array[0];
var index = 0

for (i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
        index = i
    }
}
delete array[index];
smallest = array[0];
for (o = 1; o < array.lenght; o++) {
    if (array[o] < smallest) {
        smallest = array[o];
    }
}
console.log(array[o]);

/*Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

var a = [3, 11, -5, -3, 2];
var sum = 0;


for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i];
    }
}
console.log(sum);


/*Write a program that checks if a given array is symmetric. 
An array is symmetric if it can be read the same way both from 
the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
 */

var sta = ""
var array = [2, 4, -2, 5, -2, 4, 2];
var n = array.length;
var o = array.length - 1;

if (n % 2 === 0) {
    for (i = 0; i < n / 2; i++) {
        if (array[i] = array[o]) {
            o -= 1;
        } else {
            i = n;
            sta = "Not symmetric";
        }
    }
    if (sta === "") {
        console.log("Symmetric array!");
    } else if (sta === "Not symmetric") {
        console.log("Not symmetric array!");
    }



} else if (n % 2 === 1) {
    for (i = 0; i < (n - 1) / 2; i++) {
        if (array[i] = array[o]) {
            o -= 1;
        } else {
            i = n;
            sta = "Not symmetric";
        }
    }
    if (sta === "") {
        console.log("Symmetric array!");
    } else if (sta === "Not symmetric") {
        console.log("Not symmetric array!");
    }
}


/*
Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
var a = [4, 5, 6, 2];       //!!!ZASTO PREBACUJE U SLEDECI RED = Zato sto je predugacak niz
var e = 78;
var b = [3, 8, 11, 9];
var sum = [];
var n = a.length;
var m = 1;
var x = 0;

for (i = 0; i < a.length; i++) {
    sum[x] = a[i];
    sum[m] = b[i];
    m = m + 2;
    x = x + 2;
}

console.log(sum);


/*
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var a = [4, 5, 6, 2];       //!!!ZASTO PREBACUJE U SLEDECI RED = Zato sto je predugacak niz
var e = 78;
var b = [3, 8, 11, 9];



var sum = [];
var n = a.length;
var m = n;

for (i = 0; i < a.length; i++) {
    sum[i] = a[i];
    sum[m] = b[i];
    m++;
}

console.log(sum);

/*Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

var a = [4, 6, 2, 8, 2, 2]; //!!!KAKO DA NE PISE EMPTY ITEM


for (i = 0; i < a.length; i++) {
    if (a[i] === 2) {
        delete a[i];
    }
}
console.log(a);

var e = 2;                          //!!!EVO KAKO :D
var a = [4, 6, 2, 8, 2, 2];
var b = [];

for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[b.length] = a[i];

    }
}
console.log(b);



/*Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
 */

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;

if (p < a.length) {
    for (i = a.length; i > p; i--) {
        a[i] = a[i - 1];
    }

    a[p] = e;
    console.log(a);
} else
    console.log("ERROR!")

var a = [2, -2, 33, 12, 5, 8];              /////Ili ovako
var b = [];
var e = 78;
var p = 3;

if (p <= a.length) {
    for (var i = 0; i < a.length; i++) {

        if (i < p) {
            b[b.length] = a[i];
        }
        if (i === p) {
            break;
        }
    }

    b[p] = 78;
    for (p = b.length; p < a.length + 1; p++) {
        b[p] = a[i];
        i++;
    }
    console.log(b)
} else {
    console.log("ERROR");
}

var initial = [2, -2, 33, 12, 5, 8];    /////Ili ovako 3. nacin 'PRAVI NACIN'
var value = 78;
var index = 3;

var extended = [];

for (var i = 0; i < initial.length; i++) {
    if (i === index) {
        extended[extended.length] = initial[i];
    }
    extended[extended.length] = initial[i];
}

console.log(extended);

///
var a = [2, -2, 33, 12, 5, 8];              /////Ili ovako 4. nacin
var b = [];
var e = 78;
var p = 3;


for (var i = 0; i < a.length; i++) {

    if (i < p) {
        b[b.length] = a[i];
    }
    if (i === p) {
        b[p] = 78;
    }
    if (i > p) {
        b[b.length] = a[i];
    }
}
console.log(b)



// 1 2 3 * 5 6 7 * 9 

var i = 1;

for (i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        console.log('*');
    } else {
        console.log(i);
    }
}




// 1 2 3  5 6 7  9 

var i = 1;

for (i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        continue;
    } else {
        console.log(i)
    }
}


// Stampaj sve brojeve od 100 do 1

for (i = 100; i >= 0; i--) {
    console.log(i);
}

//  Napraviti redova koliko ima zvezdica

var shape = "";
var size = 6;
for (var row = 0; row < size; row++) {
    for (var column = 0; column < size; column++) {
        shape += '* '
    }
    shape += '\n'
    for (i = 0; i < size; i++) {
        console.log(shape)
    }

    /* 
    *
    **
    ***
    */

    var size = 3;
    var shape = "";
    for (row = 0; row < size; row++) {
        for (var column = 0; column <= row; column++) {
            shape += "* ";
        }
        shape = shape + "\n";
    }

    console.log(shape);

    var size = 4;         ///EVO GA
    var row = "";
    var result = "";

    for (var i = 0; i < size; i++) {
        row += "* ";
        result += row + "\n";
    }
    console.log(result);