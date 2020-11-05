USE employee_trackerDB;

INSERT INTO departments (id, dept_name)
VALUES (1, "Project Management");
INSERT INTO departments (id, dept_name)
VALUES (2, "Sales");
INSERT INTO departments (id, dept_name)
VALUES (3, "IT");
INSERT INTO departments (id, dept_name)
VALUES (4, "Human Resources");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Jr Project Manager", 40.5, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES (2, "Sr Project Manager", 61.7, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES (3, "Jr Sales Rep", 62.1, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES (4, "Sales Manager", 85, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES (5, "Software Developer", 72.6, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES (6, "Sr Software Developer", 95, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES (7, "Recruiter", 67.9, 4);
INSERT INTO roles (id, title, salary, department_id)
VALUES (8, "HR Manager", 75.2, 4);

INSERT INTO employees (id, first_name, last_name, department_id, manager_id)
VALUES (1, "John", "Doe", 1, 1);
INSERT INTO employees (id, first_name, last_name, department_id, manager_id)
VALUES (2, "Jane", "Thorton", 1, 1);
INSERT INTO employees (id, first_name, last_name, department_id, manager_id)
VALUES (3, "Chris", "Dallas", 2, 2);
INSERT INTO employees (id, first_name, last_name, department_id, manager_id)
VALUES (4, "Susan", "Seymour", 3, 3);
INSERT INTO employees (id, first_name, last_name, department_id, manager_id)
VALUES (5, "Karen", "Thompson", 4, 4);
INSERT INTO employees (id, first_name, last_name, department_id, manager_id)
VALUES (6, "Tim", "Black", 4, 4);
