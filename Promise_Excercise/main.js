/*Practice*/
new Promise(function (resolve, reject) {
    setTimeout(() => {

        resolve(new Date('10.10.2010'))


    }, 1000)
})
    .then(function (res) {
        console.log(res);
        return 'Idemo dalje'

    })
    .then(function (res) {
        console.log('Pera i MIca: ' + res);

    })

/*Zadatak 1.1. Create a sample promise that:
Resolves to current time
Prints received time in console when resolved (in then())
 */
new Promise(function (resolve, reject) {
    setTimeout(() => {

        resolve(new Date('10.10.2010'))


    }, 1000)
})
    .then(function (res) {
        console.log(res);

    })

/*Zadatak 2. Create a console app that:
Creates 100 promises;
Each promise has its own ID (0..99);
Each promise is resolved after a random time interval (up to 500ms);
After being resolved, each promise will log its id in the console.
  */

for (let i = 0; i < 100; i++) {
    const randomTime = Number.parseInt(Math.random() * 500)
    new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(i)
        }, randomTime)
    })
        .then(function (res) {
            console.log('ID: ' + res + ' time: ' + randomTime + ' ms');

        })
}

/*Zadatak 3. Modify the app so it prints an ID of the promise that is completed first. */

const array = []

for (let i = 0; i < 100; i++) {
    const randomTime = Number.parseInt(Math.random() * 500)
    array[i] = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(i)
        }, randomTime)
    })
}
Promise.race(array)
    .then(function (value) {
        console.log(value + '\n' + array[0]);

        /* console.log('ID: ' + value + " ") */

    })






/* Zadatak 4. */