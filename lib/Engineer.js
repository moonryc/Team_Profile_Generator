import Employee from "./Employee.js";

export default class Engineer extends Employee{
    constructor(name,id,email,gitHub) {
        super(name,id,email)

        this.gitHub = gitHub

    }

    getGitHub = function () {
        return this.gitHub
    }

    getRole = function () {
        return "Engineer"
    }


}