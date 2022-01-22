const inquirer = require("inquirer");


const teamManagerQuestions = [
    {
        message:"Who is the team manager?",
        type:"input",
        name:"name"
    },
    {
        message:"What is the team manager's employee ID?",
        type:"input",
        name:"id"
    },
    {
        message:"What is the team manager's employee email address?",
        type:"input",
        name:"email"
    },
    {
        message:"What is the team manager's employee office number?",
        type:"input",
        name:"officeNumber"
    }
];

/**
 * Generates the Manager using user prompts
 * @returns {*}
 */
const teamManagerPrompts = ()=>{
    return inquirer.prompt(teamManagerQuestions)
};

module.exports = teamManagerPrompts
