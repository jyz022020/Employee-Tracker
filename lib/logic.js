const db = require('../db/connection');

function addDepartmentToDatabase(data) {
    var insertData = `INSERT INTO department (name) VALUES (` + `"` + data.name + `")`;
    console.log(insertData);
    db.query(insertData, (err, rows) => {
        if (err) {
            console.log(err);
            console.log("please check your query");
        }
    });
}

function addRoleToDatabase(data) {
    var insertData = `INSERT INTO role (title, salary, department_id) VALUES (` + `"` + data.role + `",` + data.salary + `,` + data.department + `)`;
    console.log(insertData);
    db.query(insertData, (err, rows) => {
        if (err) {
            console.log(err);
            console.log("please check your query");
        }
    });
}

function addEmployeeToDatabase(data) {
    var insertData = `INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES (` + `"` + data.firstName + `",` + `"` + data.lastName + `",`+ data.role + `,` + data.managerId + `)`;
    console.log(insertData);
    db.query(insertData, (err, rows) => {
        if (err) {
            console.log(err);
            console.log("please check your query");
        }
    });
}

module.exports = {addDepartmentToDatabase, addRoleToDatabase, addEmployeeToDatabase};