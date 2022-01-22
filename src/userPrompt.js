import {teamManagerPrompts} from "./teamManagerPrompts.js";
import {addEmployee} from "./addEmployee.js";
const Manager =require("../lib/Manager.js");


export const userPrompt = async () => {
    try {
        const answers = await teamManagerPrompts()
        return addEmployee([new Manager(answers.name, answers.id, answers.email, answers.officeNumber)])
    } catch (e) {
        console.log(e)
        return []
    }
}
