const inquirer = require ('inquirer')
const fs = require ('fs')
const path = require('path')
const orm = require( './orm' );

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
       ]).then(task => {
            switch(task.task) {
                case "View_E":
                    result = await orm.viewEmployees()
                    console.table( result )
                    break
                case "View_D":
                    break
                case "View_R":
                    break
                case "Add_E":
                    break
                case "Add_D":
                    break
                case "Add_R":
                    break
                case "Update_ER":
                    break
                default:      
            }
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
    await orm.closeORM()
   }