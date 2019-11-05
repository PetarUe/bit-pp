//

function Program(description, repository, language, completed) {
    this.description = description;
    this.repository = repository;
    this.programmingLanguage = language;
    this.completed = completed;
    this.printRepository = function () {
        console.log(this.repository)
    }
    this.checkMethod = function () {
        if (this.programmingLanguage === "JavaScript") {
            console.log(this.programminglanguage);
        } else {
            console.log("it is not JavaScript");
        }
    }
    this.checkIfCompleted = function () {
        if (this.completed === true) {
            console.log("completed!");
        } else {
            console.log("Not completed");
        }
    }

}

var program = new Program('web', "bit-web", "JavaScript", false);

console.log(program);





////


function Program(name, cuisine, complexity, listOfIngredients, preparingTime, instructions) {

    this.name = name;
    this.cuisine = cuisine
    this.complexity = complexity
    this.listOfIngredients = listOfIngredients;
    this.preparingTime = preparingTime;
    this.instructions = instructions;
    this.checkIngrediens = function () {
        console.log(listOfIngredients);
    }
    this.checkPreparedTime = function () {
        if (this.preparingTime < 15) {
            console.log("Preparing time under 15 minutes!");
        }
        else {
            console.log("Preparing time over 15 minutes!");
        }
    }
    this.changeType = function (type) {
        this.cuisine = type;
    }
    this.deleteIngredients = function (ing) {
        this.listOfIngredients.ing;
    }
}


var result = new Program("Burger", "ameri", 10, ["meat", "onion", "pickles", "cheese", "bread"], 12, "make it delicious");

console.log(result);