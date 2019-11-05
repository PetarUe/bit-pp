/*1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
 */

var caffee {
    name: "espresso",
    sugar: "Yes",
    flavour: "Soft",
    milk: "Yes"
}

/*2.Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 
 */

var film {
    title: "The Game",
    genre: "Drama",
    language: "English",
    actor: "Michael Douglas",
    director: "David Fincher"
}

/*3.Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, 
boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as 
well as a method that checks if program is completed or not. */




function createObject(description, repository, language, completed) {
    return {
        description: description,
        repository: repository,
        programmingLanguage: language,
        completed: completed,
        printRepository: function () {
            console.log(this.repository)

        },
        checkMethod: function () {
            if (this.programmingLanguage === "JavaScript") {
                console.log(this.programmingLanguage);
            } else {
                console.log("It is not JavaScript");
            }
        },
        checkIfCompleted: function () {
            if (this.completed === true) {
                console.log("Completed!");
            } else {
                console.log("Not completed!");
            }
        }
    }
}

var program = createObject('web', "bit-web", "JavaScript", false);

console.log(program);


/*4.Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  
 */

function createObject(name, cuisine, complexity, listOfIngredients, preparingTime, instructions) {
    return {
        name: name,
        cuisine: cuisine,
        complexity: complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        instructions: instructions,
        checkIngrediens: function () {
            console.log(listOfIngredients);
        },
        checkPreparedTime: function () {
            if (this.preparingTime < 15) {
                console.log("Preparing time under 15 minutes!");
            }
            else {
                console.log("Preparing time over 15 minutes!");
            }
        },
        changeType: function (type) {
            this.cuisine = type;
        },
        deleteIngredients: function (ing) {
            this.listOfIngredients.ing;
        }
    }
}

var result = createObject("Burger", "ameri", 10, ["meat", "onion", "pickles", "cheese", "bread"], 12, "make it delicious");

console.log(result);















