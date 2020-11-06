const inquirer = require ('inquirer')
const fs = require ('fs')
const path = require('path')
const orm = require( './orm' );

// Welcome user

console.log("Welcome to the Employee Management System.")

// Prompt user questions
async function promptUser() {
    let result;
    return inquirer.prompt([
        {
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
            {key: "View_E", value: "View All Employees"},
            {key: "View_D", value: "View All Departments"},
            {key: "View_R", value: "View All Roles"},
            {key: "Add_E", value: "Add Employee"},
            {key: "Add_D", value: "Add Department"},
            {key: "Add_R", value: "Add Role"},
            {key: "Update_ER", value: "Update Employee Role"}
            ]},
       ]).then(task  =>  {
            switch(task.task) {
                case "View_E":
                    result = await orm.viewEmployees()
                    console.table( result )
                    break
                case "View_D":
                    result = await orm.viewDepartments()
                    console.table( result )
                    break
                case "View_R":
                    result = await orm.viewRoles()
                    console.table( result )
                    break
                case "Add_E":
                    let rolesList = await orm.viewRoles()
                    let employeeList = await orm.viewEmployees()
                    return inquirer.prompt([
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
                            type: "input",
                            name: "first_name",
                            message: "What is the employee's first name?",
                        },
                        {
                            type: "list",
                            name: "role",
                            message: "What is the employee's role?",
                            choices: []
                        },
                        {
                            type: "list",
                            name: "manager",
                            message: "Who is the employee's manager?",
                            choices: []
                        }
                    ]).then(employeeInfo => {
                        result = await orm.addEmployee( first_name, last_name)
                        console.log( `Employee (${employeeInfo.last_name}, ${employeeInfo.first_name}) has been added.` )
                    })
                    break
                case "Add_D":
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "dept_name",
                            message: "What is the department name?",
                        }
                    ]).then(deptInfo => {
                        result = await orm.addDepartment( dept_name )
                        console.log( `Department (${deptInfo.dept_name}) has been added.` )
                    })
                    break
                case "Add_R":
                    let departmentList = await orm.viewDepartments()
                    return inquirer.prompt([
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
                            choices: []
                        }
                    ]).then(roleInfo => {
                        result = await orm.addRole( title )
                        console.log( `Role (${roleInfo.title}) has been added.` )
                    })
                    break
                case "Update_ER":
                    let rolesList = await orm.viewRoles()
                    let employeeList = await orm.viewEmployees()
                    return inquirer.prompt([
                    {
                        type: "list",
                        name: "employee",
                        message: "Which employee would you like to update?",
                        choices: []
                    },
                    {
                        type: "list",
                        name: "role",
                        message: "What is the employee's new role?",
                        choices: []
                    },
                    ]).then(employeeInfo => {
                        result = await orm.updateEmployeeRole()
                        console.log( `Employee's role has been updated.` )
                    })
                    break
                default:      
            }
            await orm.closeORM()
       })

            
    //         if (task.task == "View_E"){
    //            return inquirer.prompt([
    //                {
    //                 type: "list",
    //                 name: "task_item",
    //                 message: "What would you like to add?",
    //                 choices: ["Department","Role","Employee"] 
    //                }
    //            ])
    //         }
    //         else if (task.task == "View"){
    //            return inquirer.prompt([
    //                {
    //                 type: "list",
    //                 name: "task_item",
    //                 message: "What would you like to add?",
    //                 choices: ["Department","Role","Employee"] 
    //                }
    //            ])
    //         }
    //         else if (task.task == "Update"){
    //            return "Update to employee"
    //         }
    //    }) 
    
   }

promptUser()