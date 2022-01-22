const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name,id,email,school) {
        super(name,id,email)

        this.school = school

    }

    /**
     * returns interns school
     * @returns {*}
     */
    getSchool = function () {
        return this.school
    }

    /**
     * returns the interns role
     * @returns {string}
     */
    getRole = function () {
        return "Intern"
    }
}

module.exports = Intern