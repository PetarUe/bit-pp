
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getPersonData = function () {
        return this.name + " " + this.surname
    }
}

/* var beki = new Person("Beki", "Bekic") */


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData = function () {
        return `${this.name} ${this.surname}, ${this.salary}rsd`;
    }
    getSalary() {
        console.log(this.salary)
    }
    increaseSalary = function () {
        var result = this.salary + (this.salary / 10);
        return result
    }
}

var beki = new Employee("Beki", "Bekic", "singerica", 112000);
console.log(beki.increaseSalary());


/* console.log(beki.getData()); */


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization(specialization) {
        console.log(specialization);
    }
}

var mickDeveloper = new Developer("Mick", "McCartney", "Developer", "1050 euros", "Software");
/* 
console.log(mickDeveloper.getSpecialization()); */



class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        console.log(this.department);
    }
    changeDepartment = function (newDepartment) {
        this.department = newDepartment;
    }
}


