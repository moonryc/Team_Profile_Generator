const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name,id,email,officeNumber) {
        super(name,id,email)

        this.officeNumber = officeNumber
    }

    /**
     * returns the managers office number
     * @returns {*}
     */
    getOfficeNumber = function () {
        return this.officeNumber
    }

    /**
     * returns the managers role
     * @returns {string}
     */
    getRole = function () {
        return "Manager"
    }
}

module.exports = Manager