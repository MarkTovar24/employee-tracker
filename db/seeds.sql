USE employees_db;

INSERT INTO department (department_name)
VALUES ('Management Team'),
        ('Curbside Valet'),
        ('Rover Team'),
        ('Shuttle Team'),
        ('Traffic Control'),
        ('Keyroom');

INSERT INTO role (title, salary, department_id)
VALUES 
        /* Management Team*/
        ('Head Manager', 100000, 1),
        ('General Manager', 70000, 1),
        ('Assistant Manager', 65000, 1),

        /*Curbside Valet Team*/
        ('Valet Supervisor', 55000, 2),
        ('Valet Team Lead', 60000, 2),
        ('Valet Crew', 35000, 2),


        /*Rover Team*/
        ('Rover Supervisor', 60000, 3),
        ('Rover Dispatcher',50000, 3 ),
        ('Rover Driver', 45000, 3),

        /*Shuttle Team*/
        ('Shuttle Supervisor', 60000, 4),
        ('Shuttle Dispatcher', 50000, 4),
        ('Shuttle Driver', 45000, 4),

        /*Traffic Control*/ 
        ('Traffic Control Supervisor', 45000, 5),
        ('Traffic Control Crew', 25000, 5),

        /*Keyroom*/
        ('Keyroom Supervisor', 65000, 6),
        ('Keyroom Cashier', 55000, 6);


INSERT INTO employees (first_name, last_name, role_id, salary, manager_id)
VALUES 
        ('Micah', 'Bell', 1, 100000, NULL), 
        ('John', 'Marston', 5, 55000, NULL),
        ('Frank', 'Gallagher', 14, 25000, NULL),
        ('George', 'Foreman', 6, 35000, 2),
        ('Stuart', 'Mackenzie', 8, 50000, NULL);
        