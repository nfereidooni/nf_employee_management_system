const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const orm = require('./orm');

// Welcome user

console.log("Welcome to the Employee Management System.")

// Prompt user questions
async function promptUser() {
    let result;
    let startLoop = true;
    while (startLoop) {
        const menu = await inquirer.prompt([
            {
                type: "list",
                name: "task",
                message: "What would you like to do?",
                choices: [
                    { value: "View_E", name: "View All Employees" },
                    { value: "View_D", name: "View All Departments" },
                    { value: "View_R", name: "View All Roles" },
                    { value: "Add_E", name: "Add Employee" },
                    { value: "Add_D", name: "Add Department" },
                    { value: "Add_R", name: "Add Role" },
                    { value: "Update_ER", name: "Update Employee Role" },
                    { value: "Quit" }
                ]
            },
        ]).then(async task => {
            switch (task.task) {
                case "View_E":
                    result = await orm.viewEmployees()
                    console.table(result)
                    break
                case "View_D":
                    result = await orm.viewDepartments()
                    console.table(result)
                    break
                case "View_R":
                    result = await orm.viewRoles()
                    console.table(result)
                    break
                case "Add_E":
                    const rolesList = await orm.viewRoles()
                    const employeeList = await orm.viewEmployees()
                    console.log(rolesList.title)
                    // console.log(employeeList)
                    const newEmployee = await inquirer.prompt([
                        {
                            type: "input",
                            name: "first_name",
                            message: "What is the employee's first name?",
                        },
                        {
                            type: "input",
                            name: "last_name",
                            message: "What is the employee's last name?",
                        },
                        {
                            type: "list",
                            name: "role",
                            message: "What is the employee's role?",
                            choices: rolesList.map(roles => roles.title)
                        },
                        {
                            type: "list",
                            name: "manager",
                            message: "Who is the employee's manager?",
                            choices: employeeList.map(employees => employees.first_name + " " + employees.last_name)
                        }
                    ]).then(async employeeInfo => {
                        result = await orm.addEmployee(employeeInfo.first_name, employeeInfo.last_name, employeeInfo.role, employeeInfo.manager)
                        console.log(`Employee (${employeeInfo.first_name} ${employeeInfo.last_name}) has been added.`)
                    })
                    break
                case "Add_D":
                    const newDept = await inquirer.prompt([
                        {
                            type: "input",
                            name: "dept_name",
                            message: "What is the department name?",
                        }
                    ]).then(async deptInfo => {
                        result = await orm.addDepartment(deptInfo.dept_name)
                        console.log(`Department (${deptInfo.dept_name}) has been added.`)
                    })
                    break
                case "Add_R":
                    const departmentList = await orm.viewDepartments()
                    const newRole = await inquirer.prompt([
                        {
                            type: "input",
                            name: "title",
                            message: "What is the title of the role?",
                        },
                        {
                            type: "number",
                            name: "salary",
                            message: "What is the salary for this role?",
                        },
                        {
                            type: "list",
                            name: "department",
                            message: "Which department does this role belong to?",
                            choices: departmentList.map(departments => departments.dept_name)
                        }
                    ]).then(async roleInfo => {
                        result = await orm.addRole(roleInfo.title, roleInfo.salary, roleInfo.department)
                        console.log(`Role (${roleInfo.title}) has been added.`)
                    })
                    break
                case "Update_ER":
                    const rolesList2 = await orm.viewRoles()
                    const employeeList2 = await orm.viewEmployees()
                    const updateEmployeeRole = await inquirer.prompt([
                        {
                            type: "list",
                            name: "employee",
                            message: "Which employee would you like to update?",
                            choices: employeeList2.map(employees => employees.first_name + " " + employees.last_name)
                        },
                        {
                            type: "list",
                            name: "role",
                            message: "What is the employee's new role?",
                            choices: rolesList2.map(roles => roles.title)
                        }
                    ]).then(async employeeInfo => {
                        result = await orm.updateEmployeeRole(employeeInfo.employee, employeeInfo.role)
                        console.log(`Employee (${employeeInfo.employee}) role has been updated to ${employeeInfo.role}.`)
                    })
                    break
                case "Quit":
                    startLoop = false
                    break
                default:
            }
        })
    }
    await orm.closeORM()
}

promptUser()