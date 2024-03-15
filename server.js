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
        choices: ['View Roles', 'View Department', 'View Employees', 'Add Department', 'Add Role', 'Add Employee'],
        type: 'list'
    }).then(res => {
        if (res.action === 'View Roles') {
            viewRoles();

        };

        if (res.action === 'View Department') {
            viewDept();

        };

        if (res.action === 'View Employees') {
            viewEmp();

        };

        if (res.action === 'Add Department') {
            addDept();

        };

        if (res.action === 'Add Role') {
            addRole();

        };

        if (res.action === 'Add Employee') {
            addEmp();

        };

        
    });
};
//Function to view all roles, using sql dialect to automatically select all the needed tables/data to display in the terminal
    function viewRoles() {

        db.query(`SELECT id, title, salary, department_id AS department FROM role`,(err, rows) => {
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

        db.query(`SELECT id, department_name FROM department`,(err, rows) => {
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

        db.query(`SELECT id, first_name, last_name, role_id FROM employees`,(err, rows) => {
            if (err) {
                console.log(err)
                return;
            }
            console.table(rows)
            menu();
        });
    }
//Add Department, Runs inquirer to fill out department info and inserts into the database with sql dialect
    async function addDept() {
        const res = await inquirer.prompt([
            {
                name: 'deptName',
                message: 'What is the name of the new department?',
                type: 'input'
            }
        ])

        let params = [res.deptName];

        db.query(`INSERT INTO department (department_name) VALUES (?)`, params,(err) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('Department Added!')
            menu();
        });
    }
//Add Roles, Asks inquirer questions and gets an HTTP response for the title, salary and dept id. then runs sql dialect to insert into database
async function addRole() {
     const res = await inquirer.prompt([
        {
            name: 'title',
            message: 'Input role title',
            type: 'input'
        },

        {
            name: 'salary',
            message: 'Input role salary',
            type: 'input'
        },

        {
            name: 'department_id',
            message: 'Enter the department ID',
            type: 'input'
        }
    ]);

    
    let params = [res.title, res.salary, res.department_id];
    db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, params, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Role added!')
        menu();
    });
};

async function addEmp() {
    const res = await inquirer.prompt([
        {
            name: 'first_name',
            message: "What is your employee's first name?",
            type: 'input'
        },

        {
            name: 'last_name',
            message: "Employee's last name?",
            type: 'input'
        },

        {
            name: 'role_id',
            message: "What is your employee's role ID?",
            type: 'input'
        },

        {
            name: 'salary',
            message: "What is your employee's salary?",
            type: 'input'
        },

        {
            name: 'manager_id',
            message: "Who does this employee answer to? (1 = Head manager, 2 = GM, 3 = Asst Manager)",
            type: 'input'
        }
    ])

    let sql = 'INSERT INTO employees (first_name, last_name, role_id, salary, manager_id) VALUES (?, ?, ?, ?, ?)';
    let params = Object.values(res)

    db.query(sql, params, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('employee has been added!')
        menu();
    })
}

//Figure out how to update roles
menu();