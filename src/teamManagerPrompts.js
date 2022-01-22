const inquirer = require("inquirer");
const validateAnswer = require('./validateAnswer')


const teamManagerQuestions = [
    {
        message:"Who is the team manager?",
        type:"input",
        name:"name",
        validate:validateAnswer
    },
    {
        message:"What is the team manager's employee ID?",
        type:"input",
        name:"id",
        validate:validateAnswer
    },
    {
        message:"What is the team manager's employee email address?",
        type:"input",
        name:"email",
        validate:validateAnswer
    },
    {
        message:"What is the team manager's employee office number?",
        type:"input",
        name:"officeNumber",
        validate:validateAnswer
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
