//Importing mysql2 and inquirer
const inquirer = require('inquirer');
const mysql = require('mysql2');

//
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'LILYlu@1107',
        database: 'employees_db'
    }
);
// Function that runs the entire application, Starting with inquirer questions and running the corresponding functions based on your choice
function menu() {
    inquirer.prompt({
        name: 'action',
        message: 'What would you like to do?',
        choices: ['View Roles', 'View Department', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role'],
        type: 'list'
    }).then(res => {
        if (res.action === 'View Roles') {
            viewRoles()

        };

        if (res.action === 'View Department') {
            viewDept()

        };

        if (res.action === 'View Employees') {
            viewEmp()

        };

        if (res.action === 'Add Department') {
            addDept()

        };

        if (res.action === 'Add Role') {
            addRole()

        };

        if (res.action === 'Add Employee') {
            addEmp()

        };

        if (res.action === 'Update Employee Role') {
            updateRole()

        };

        
    });
};
//Function to view all roles, using sql dialect to automatically select all the needed tables/data to display in the terminal
    function viewRoles() {
        const sql = `SELECT id, title, salary, department_id AS department FROM roles`;

        db.query(sql,(err, rows) => {
            if(err) {
                console.log(err)
                return;
            }
                console.table(rows)
                menu();
        });
    }
//Function to view all Departments, using sql dialect to automatically select all the needed tables/data to display in the terminal
    function viewDept() {
        const sql = `SELECT id, title, salary, department_id AS department FROM roles`;

        db.query(sql,(err, rows) => {
            if(err) {
                console.log(err)
                return;
            }
            console.table(rows)
            menu();
        });
    }
//Function to view all Employees, using sql dialect to automatically select all the needed tables/data to display in the terminal
    function viewEmp() {
        const sql = `SELECT id, first_name, last_name, role_id FROM employees`;

        db.query(sql,(err, rows) => {
            if (err) {
                console.log(err)
                return
            }
            console.table(rows)
            menu();
        });
    }
//Add Department, Runs inquirer to fill out department info and inserts into the database
    async function addDept() {
        const res = await inquirer.prompt([
            {
                name: 'deptName',
                message: 'What is the name of the new department?',
                type: 'input'
            }
        ])

        let sql = `INSERT INTO department (department_name) VALUES (?)`
    }