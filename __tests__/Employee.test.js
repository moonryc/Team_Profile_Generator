const Employee = require("../lib/Employee.js");

const employeeName = "Billy"
const employeedId = "0123456789abcdefghijk"
const employeeEmail = `${employeeName}@company.com`

test("Tests Employee creation",()=>{
    const newEmployee = new Employee(employeeName,employeedId,employeeEmail)
    expect(newEmployee).toEqual(expect.any(Object))
})

test("Tests Employee name",()=>{
    const newEmployee = new Employee(employeeName,employeedId,employeeEmail)
    expect(newEmployee.getName()).toEqual(employeeName)
})

test("Tests Employee ID",()=>{
    const newEmployee = new Employee(employeeName,employeedId,employeeEmail)
    expect(newEmployee.getId()).toEqual(employeedId)
})

test("Tests Employee Email",()=>{
    const newEmployee = new Employee(employeeName,employeedId,employeeEmail)
    expect(newEmployee.getEmail()).toEqual(employeeEmail)
})

test("Tests Employee Role",()=>{
    const newEmployee = new Employee(employeeName,employeedId,employeeEmail)
    expect(newEmployee.getRole()).toEqual("Employee")
})