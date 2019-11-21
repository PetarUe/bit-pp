/*Zadatak 1.Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
    Output: ['Hello', 'There', 'ES'] */

(function () {
    function isString(item) {
        return typeof (item) === 'string'
    }
    const array = ['hello', 'there', 'ES', 6]

    const result = array
        .filter(isString)
        .map(x => x.slice(0, 1).toUpperCase() + x.slice(1, x.length))

    console.log(result);

    /*  const finalResult = result.map(x => x.toUpperCase()) */


})()


    /* Zadatak 2.
         Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a 
         fixed value of the tax rate (i.e. 20% in Serbia). 
        Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
        Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
        Output2: [ 24, 20 ] // tax only
    */

    (function () {

        const array = [{ name: 'Banana', price: 120 }, { name: 'Orange', price: 100 }]




        const taxOnly = array.map(x => x.price = x.price * 0.2)
        console.log(taxOnly);


    })()

    /* Zadatak 3.
    Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.
    Input: [4, 6, 11, -9, 2.1], 2
    Output: [6, 8, 13, -7, 4.1] */

    (function () {

        const input = [4, 6, 11, -9, 2.1]
        const increase = 2
        const result = input.map(x => x + increase)

        console.log(result);

    })()

    /*Zadatak 4. Write a function that filters all even elements of the array.
        Input: [6, 11, 9, 0, 3]
        Output: [6, 0]
     */

    (function () {

        const input = [6, 11, 9, 0, 3]

        function isEven(x) {
            return x % 2 === 0
        }
        const result = input.filter(isEven)

        console.log(result);


    })()

    /*Zadatak 5.Write a function that filters all the strings from the given array that contain substring JS or js.
        Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
        Output: ['babel.js, 'JS standard']
     */


    (function () {

        const array = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']

        function partOf(x) {
            return x.toUpperCase(x).includes('JS')
        }

        const result = array.filter(partOf)

        console.log(result);
    })()


    /* Zadatak 6.
    Write a function that filters all integer numbers from the given array.
    Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
        Output: [7, 8]
     */


    (function () {


        const array = [1.6, 11.34, 9.23, 7, 3.11, 8]

    })()