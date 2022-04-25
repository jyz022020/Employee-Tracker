const inquirer = require('inquirer');
//const express = require('express');
const db = require('./db/connection');
const logic = require('./lib/logic');
const fs = require('fs');
var createDB = fs.readFileSync('./db/db.sql').toString();
var createSchema = fs.readFileSync('./db/schema.sql').toString();
var inputData = fs.readFileSync('./db/seeds.sql').toString();
const cTable = require('console.table');



db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    promptManager();
});

db.query(createDB, (err, rows) => {
    if (err) {
        console.log(initialSql);
        console.log(err);
        console.log("please check your query");
    }
})

db.query(createSchema, (err, rows) => {
    if (err) {
        console.log(createSchema);
        console.log("please check your query");
    }
})

db.query(inputData, (err, rows) => {
    if (err) {
        console.log(inputData);
        console.log("please check your query");
    }
})

console.log(`
Welcome to Team Profile Generator.
Please enter your team members's information:
`);
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userAction',
            message: 'What would you like to do?',
            choices: ['View all departments',   'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then(action => {
        if (action.userAction === 'View all departments') {
            const seeAllDepartmentSql = `SELECT * FROM department`;
            db.query(seeAllDepartmentSql, (err, rows) => {
                if (err) {
                    console.log(err);
                    console.log("please check your query");
                }
                const resultTable = cTable.getTable(rows);
                console.log(resultTable);
                return promptManager();
            });
        } else if (action.userAction === 'View all roles') {
            const seeAllRoleSql = `SELECT * FROM role`;
            db.query(seeAllRoleSql, (err, rows) => {
                if (err) {
                    console.log(err);
                    console.log("please check your query");
                }
                const resultTable = cTable.getTable(rows);
                console.log(resultTable);
                return promptManager();
            })
        } else if (action.userAction === 'View all employees') {
            const seeAllEmployeeSql = `SELECT * FROM employee`;
            db.query(seeAllEmployeeSql, (err, rows) => {
                if (err) {
                    console.log(err);
                    console.log("please check your query");
                }
                const resultTable = cTable.getTable(rows);
                console.log(resultTable);
                return promptManager();
            })
        } else if (action.userAction === 'Add a department') {
            return addDepartment();
        } else if (action.userAction === 'Add a role') {
            return addRole();
        } else if (action.userAction === 'Add an employee') {
            return addEmployee();
        } else if (action.userAction === 'Update an employee role\n') {
            console.log("not implement yet");
            return promptManager();
        } 
    });
}

const addDepartment = departmentData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of department?",
        }   
    ])
    .then(departmentData => {
        // logic.addDepartmentToDatabase(departmentData);
        logic.addDepartmentToDatabase(departmentData);
        return promptManager();
    });
}

const addRole = roleData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: "What is the name of role?",
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary of role?",
        },
        {
            type: 'input',
            name: 'department',
            message: "Which department does the role belong to?",
        }   
    ])
    .then(roleData => {
        logic.addRoleToDatabase(roleData);
        return promptManager();
    });
}

const addEmployee = employeeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is the first name of employee?",
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the last name of employeee?",
        },
        {
            type: 'input',
            name: 'role',
            message: "What is the employee's role?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the employee's manager id?",
        }   
    ])
    .then(employeeData => {
        logic.addEmployeeToDatabase(employeeData);
        return promptManager();
    });
}