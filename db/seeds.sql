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
        /*1*/ ('Head Manager', 100000, 1),
        /*2*/ ('General Manager', 70000, 1),
        /*3*/ ('Assistant Manager', 65000, 1),

        /*Curbside Valet Team*/
        /*4*/ ('Valet Supervisor', 55000, 2),
        /*5*/ ('Valet Team Lead', 60000, 2),
        /*6*/ ('Valet Crew', 35000, 2),


        /*Rover Team*/
        /*7*/ ('Rover Supervisor', 60000, 3),
        /*8*/ ('Rover Dispatcher',50000, 3 ),
        /*9*/ ('Rover Driver', 45000, 3),

        /*Shuttle Team*/
        /*10*/ ('Shuttle Supervisor', 60000, 4),
        /*11*/ ('Shuttle Dispatcher', 50000, 4),
        /*12*/ ('Shuttle Driver', 45000, 4),

        /*Traffic Control*/ 
        /*13*/ ('Traffic Control Supervisor', 45000, 5),
        /*14*/ ('Traffic Control Crew', 25000, 5),

        /*Keyroom*/
        /*15*/ ('Keyroom Supervisor', 65000, 6),
        /*16*/ ('Keyroom Cashier', 55000, 6);


INSERT INTO employees (first_name, last_name, role_id, manager_id, salary)
VALUES ('George', 'Foreman', 1, NULL, 100000),
       ('Joe', 'Frazier', 2, NULL, 70000),
       ('Earnie', 'Shavers', 3, NULL, 65000);
        
INSERT INTO employees (first_name, last_name, role_id, manager_id, salary)
VALUES  ('John', 'Marston', 4, 1, 55000),
        ('Micah', 'Bell', 6, 3, 35000),
        ('Frank', 'Gallagher', 13, 2, 25000),
        ('Veronica', 'Fisher', 15, 2, 65000);




/*REMINDER: MANAGER ID'S REFER TO THE ORDER IN WHICH MANAGERS ARE INSERTED*/
        