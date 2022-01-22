class Employee{
    constructor(name,id,email) {
        this.name = name
        this.id = id
        this.email = email
    }

    /**
     * returns the employees name
     * @returns {*}
     */
    getName = function(){
        return this.name
    }

    /**
     * returns the employees id
     * @returns {*}
     */
    getId = function(){
        return this.id
    }

    /**
     * returns the employees email
     * @returns {*}
     */
    getEmail = function(){
        return this.email
    }

    /**
     * returns the employees role
     * @returns {string}
     */
    getRole = function(){
        return "Employee"
    }

}

module.exports = Employee