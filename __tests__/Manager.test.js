import Manager from "../lib/Manager.js";

const employeeName = "Billy"
const employeedId = "0123456789abcdefghijk"
const employeeEmail = `${employeeName}@company.com`

test("Tests Manager creation",()=>{
    const newManager = new Manager(employeeName,employeedId,employeeEmail)
    expect(newManager).toEqual(expect.any(Object))
})

test("Tests Manager name",()=>{
    const newManager = new Manager(employeeName,employeedId,employeeEmail)
    expect(newManager.getName()).toEqual(employeeName)
})

test("Tests Manager ID",()=>{
    const newManager = new Manager(employeeName,employeedId,employeeEmail)
    expect(newManager.getId()).toEqual(employeedId)
})

test("Tests Manager Email",()=>{
    const newManager = new Manager(employeeName,employeedId,employeeEmail)
    expect(newManager.getEmail()).toEqual(employeeEmail)
})

test("Tests Manager Role",()=>{
    const newManager = new Manager(employeeName,employeedId,employeeEmail)
    expect(newManager.getRole()).toEqual("Manager")
})

