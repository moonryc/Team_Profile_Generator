import Engineer from "../lib/Engineer.js";

const employeeName = "Billy"
const employeedId = "0123456789abcdefghijk"
const employeeEmail = `${employeeName}@company.com`
const employeeGit = 'billysGitHub'

test("Tests Engineer creation",()=>{
    const newEngineer = new Engineer(employeeName,employeedId,employeeEmail,employeeGit)
    expect(newEngineer).toEqual(expect.any(Object))
})

test("Tests Engineer name",()=>{
    const newEngineer = new Engineer(employeeName,employeedId,employeeEmail,employeeGit)
    expect(newEngineer.getName()).toEqual(employeeName)
})

test("Tests Engineer ID",()=>{
    const newEngineer = new Engineer(employeeName,employeedId,employeeEmail,employeeGit)
    expect(newEngineer.getId()).toEqual(employeedId)
})

test("Tests Engineer Email",()=>{
    const newEngineer = new Engineer(employeeName,employeedId,employeeEmail,employeeGit)
    expect(newEngineer.getEmail()).toEqual(employeeEmail)
})

test("Tests Engineer github",()=>{
    const newEngineer = new Engineer(employeeName,employeedId,employeeEmail,employeeGit)
    expect(newEngineer.getGitHub()).toEqual(employeeGit)
})

test("Tests Engineer Role",()=>{
    const newEngineer = new Engineer(employeeName,employeedId,employeeEmail,employeeGit)
    expect(newEngineer.getRole()).toEqual("Engineer")
})