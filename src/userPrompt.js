const teamManagerPrompts = require("./teamManagerPrompts.js");
const addEmployee = require("./addEmployee.js");
const Manager =require("../lib/Manager.js");

/**
 * Generates the employees using user prompts and returns a promise that containes an array of different employee classes
 * @returns {Promise<*|*[]>}
 */
const userPrompt = async () => {
    try {
        const answers = await teamManagerPrompts()
        return addEmployee([new Manager(answers.name, answers.id, answers.email, answers.officeNumber)])
    } catch (e) {
        console.log(e)
        return []
    }
}

module.exports = userPrompt
