const mysql = require( 'mysql' );

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args=[] ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
  }

// at top INIT DB connection
const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1booleanbros",
    database: "employee_trackerDB"
  });

function viewEmployees(){
    return db.query( "SELECT * FROM employees" )
}

function viewDepartments(){
    return db.query( "SELECT * FROM departments" )
}

function viewRoles(){
    return db.query( "SELECT * FROM roles" )
}

async function addEmployee( first_name, last_name, role, manager ){
    let roleID = await db.query( `SELECT id FROM roles WHERE title = "${role}"` )
    let managerID = await db.query( `SELECT id FROM employees WHERE first_name = "${manager.split(" ")[0]}" AND last_name = "${manager.split(" ")[1]}"` )
    return db.query( `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", "${roleID.map(roles => roles.id)}", "${managerID.map(employees => employees.id)}")`)
}

function addDepartment( dept_name ){
    return db.query( `INSERT INTO departments (dept_name) VALUES ("${dept_name}")` )
}

async function addRole( title, salary, department ){
    let departmentID = await db.query( `SELECT id FROM departments WHERE dept_name = "${department}"`) 
    return db.query( `INSERT INTO roles (title, salary, department_id) VALUES ("${title}", "${salary}", "${departmentID.map(departments => departments.id)}")` )
}

async function updateEmployeeRole ( employee, role ){
    let roleID = await db.query( `SELECT id FROM roles WHERE title = "${role}"` )
    let employeeID = await db.query( `SELECT id FROM employees WHERE first_name = "${employee.split(" ")[0]}" AND last_name = "${employee.split(" ")[1]}"` )
    return db.query( `UPDATE employees SET role_id = "${roleID.map(roles => roles.id)}" WHERE id = "${employeeID.map(employees => employees.id)}"` )
}

function closeORM(){
    return db.close()
}

module.exports = {
    viewEmployees, viewDepartments, viewRoles, addEmployee, addDepartment, addRole, updateEmployeeRole, closeORM
} 