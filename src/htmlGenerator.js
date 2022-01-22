const {writeFile} = require('fs/promises')

/**
 * Generates the html based off of the array of the employees that has been passed in.
 * @param arrayOfEmployees
 * @returns {Promise<void>}
 */
const htmlGenerator = async (arrayOfEmployees) => {

    const manager = arrayOfEmployees.filter((employee) => {
        return employee.getRole() === "Manager";
    })
    const engineers = arrayOfEmployees.filter(employee => {
        return employee.getRole() === "Engineer"
    })
    const interns = arrayOfEmployees.filter(employee => {
        return employee.getRole() === "Intern"
    })

    /**
     * Generates the html for each employee based off of what kind of employee they are and returns the html
     * @param employees
     * @returns {string}
     */
    const addEmployees = (employees) => {
        let employeesString = ""
        for (const employee of employees) {
            let employeeExtraLine = ""
            switch (employee.getRole()) {
                case "Manager":
                    employeeExtraLine = `<p class="pl-4 pr-4 w-fit">OFFICE NUMBER: ${employee.getOfficeNumber()}</p>`
                    break;
                case "Engineer":
                    employeeExtraLine = `<p class="pl-4 pr-4 w-fit">GITHUB: <a target="_blank" href="http://www.github.com/${employee.getGitHub()}">${employee.getGitHub()}</a></p>`
                    break;
                case "Intern":
                    employeeExtraLine = `<p class="pl-4 pr-4 w-fit">SCHOOL ${employee.getSchool()}</p>`
                    break
                default:
                    break
            }
            employeesString += `
            <div class="bg-gray-100 drop-shadow-xl min-w-fit">
            <div class="bg-blue-600 text-white">
                <h3 class="text-2xl text-center">${employee.getName()}</h3>
                <h3 class="text-2xl text-center">${employee.getRole()}</h3>
            </div>
            <div>
                <div class="flex justify-center items-center flex-col md:grid-flow-col sm:grid-flow-row">
                    <div class="m-4 bg-white rounded-md border-gray-500 border-solid border-2 min-w-fit">
                        <p class="pl-4 pr-4 border-gray-500 border-solid border-b-2 min-w-fit">ID: ${employee.getId()}</p>

                        <p class="pl-4 pr-4 border-gray-500 border-solid border-b-2 min-w-fit">
                            EMAIL:
                            <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                        </p>
                        
                        ${employeeExtraLine}
                    </div>
                </div>
            </div>
        </div>`
        }
        return employeesString
    }

    const html = `<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Team</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<header class="bg-red-600 flex justify-center items-center h-24">
    <h1 class="text-white text-3xl">My Team</h1>
</header>
<main class="m-9">
    <div class="grid auto-cols-max gap-8 grid-cols-1">
        ${addEmployees(manager)}
        ${addEmployees(engineers)}
        ${addEmployees(interns)}
    </div>
</main>
</body>
</html>`

    try {
        await writeFile("./dist/index.html", html)
        console.log("Website has been successfully generated")
    } catch (e) {
        console.log(e)
    }
}

module.exports = htmlGenerator