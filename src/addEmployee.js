import inquirer from "inquirer";
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const generateEmployeeQuestions = [
    {
        message:"What kind of employee would you like to add",
        type: "list",
        choices:["Engineer","Intern"],
        name:"kind"
    },
    {
        message: ({kind})=>{
            return `What is the ${kind}'s name?`
        },
        type:"input",
        name:"name"
    },
    {
        message: ({kind})=>{
            return `What is the ${kind}'s employee id?`
        },
        type:"input",
        name:"id"
    },
    {
        message: ({kind})=>{
            return `What is the ${kind}'s employee email?`
        },
        type:"input",
        name:"email"
    },
    {
        message: ({kind})=>{
            return `What is the ${kind}'s github?`
        },
        type:"input",
        name:"github",
        when:({kind})=>{
            return kind === "Engineer"
        }
    },
    {
        message: ({kind})=>{
            return `What is the ${kind}'s School?`
        },
        type:"input",
        name:"school",
        when:({kind})=>{
            return kind === "Intern"
        }
    },
]



export const addEmployee = async (arrayOfEmployees) => {

    const anotherEmployee = await inquirer.prompt([{
        message:"Would you like To add another employee?",
        type:'confirm',
        name:"isConfirm"
    }])

    if(!anotherEmployee.isConfirm){
        return arrayOfEmployees
    }

    const answers = await inquirer.prompt(generateEmployeeQuestions)

    if(answers.kind === "Engineer"){
        return addEmployee([new Engineer(answers.name, answers.id, answers.github), ...arrayOfEmployees])
    }else{
        return addEmployee([new Intern(answers.name, answers.id, answers.school), ...arrayOfEmployees])
    }
}