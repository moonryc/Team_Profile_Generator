const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name,id,email,school) {
        super(name,id,email)

        this.school = school

    }

    getSchool = function () {
        return this.school
    }

    getRole = function () {
        return "Intern"
    }
}

module.exports = Intern