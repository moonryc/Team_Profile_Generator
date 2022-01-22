const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(name,id,email,gitHub) {
        super(name,id,email)

        this.gitHub = gitHub

    }

    /**
     * returns engineers github user account
     * @returns {*}
     */
    getGitHub = function () {
        return this.gitHub
    }

    /**
     * returns the engineers role
     * @returns {string}
     */
    getRole = function () {
        return "Engineer"
    }


}

module.exports = Engineer