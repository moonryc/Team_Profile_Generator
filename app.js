const userPrompt =require("./src/userPrompt.js");
const htmlGenerator =require("./src/htmlGenerator.js");

/**
 * Launches the application
 * @returns {Promise<void>}
 */
const runApplication = async () => {
    const arrayOfEmployees = await userPrompt()

    return await htmlGenerator(arrayOfEmployees)
}

runApplication()
