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

function addEmployee( first_name, last_name, department_id, manager_id ){
    return db.query( `INSERT INTO employees (first_name, last_name, department_id, manager_id) VALUES (${first_name}, ${last_name}, ${department_id}, ${manager_id})` )
}

function addDepartment( dept_name ){
    return db.query( `INSERT INTO employees (dept_name) VALUES (${dept_name})` )
}

function addRole( title, salary, department_id ){
    return db.query( `INSERT INTO employees (first_name, last_name, department_id, manager_id) VALUES (${title}, ${salary}, ${department_id})` )
}

function updateEmployeeRole ( first_name, last_name, department_id, manager_id ){
    return db.query( `INSERT INTO employees (first_name, last_name, department_id, manager_id) VALUES (${first_name}, ${last_name}, ${department_id}, ${manager_id})` )
}

function closeORM(){
    return db.close()
}

module.exports = {
    viewEmployees, viewDepartments, viewRoles, addEmployee, addDepartment, addRole, updateEmployeeRole, closeORM
} 