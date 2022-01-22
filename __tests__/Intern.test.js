import Intern from "../lib/Intern.js";

const employeeName = "Billy"
const employeedId = "0123456789abcdefghijk"
const employeeEmail = `${employeeName}@company.com`
const employeeSchool = 'school'

test("Tests Intern creation",()=>{
    const newIntern = new Intern(employeeName,employeedId,employeeEmail,employeeSchool)
    expect(newIntern).toEqual(expect.any(Object))
})

test("Tests Intern name",()=>{
    const newIntern = new Intern(employeeName,employeedId,employeeEmail,employeeSchool)
    expect(newIntern.getName()).toEqual(employeeName)
})

test("Tests Intern ID",()=>{
    const newIntern = new Intern(employeeName,employeedId,employeeEmail,employeeSchool)
    expect(newIntern.getId()).toEqual(employeedId)
})

test("Tests Intern Email",()=>{
    const newIntern = new Intern(employeeName,employeedId,employeeEmail,employeeSchool)
    expect(newIntern.getEmail()).toEqual(employeeEmail)
})

test("Tests Intern School",()=>{
    const newIntern = new Intern(employeeName,employeedId,employeeEmail,employeeSchool)
    expect(newIntern.getSchool()).toEqual(employeeSchool)
})

test("Tests Intern Role",()=>{
    const newIntern = new Intern(employeeName,employeedId,employeeEmail,employeeSchool)
    expect(newIntern.getRole()).toEqual("Intern")
})
