INSERT INTO department
    (name)
VALUES
    ("IT"),
    ("Customer Service"),
    ("Sales");


INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Manager",28.5,1),
    ("Manager",25.5,2),
    ("Manager",25.5,3),
    ("IT1",26.5,1),
    ("IT2",24.5,1),
    ("CS1",18.5,2),
    ("CS2",18.5,2),
    ("SA1",18.7,3),
    ("SA2",17.5,3);

INSERT INTO employee
    (first_name, last_name,role_id,manager_id)
VALUES
    ('James', 'Fraser', 1, NULL),
    ('Jack', 'London', 2, NULL),
    ('Robert', 'Bruce', 3, NULL),
    ('Peter', 'Greenaway', 4, 1),
    ('Derek', 'Jarman', 5, 1),
    ('Paolo', 'Pasolini', 6, 2),
    ('Heathcote', 'Williams', 7, 2),
    ('Sandy', 'Powell', 8, 3),
    ('Emil', 'Zola', 9, 3);
