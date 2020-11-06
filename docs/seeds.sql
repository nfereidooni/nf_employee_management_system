USE employee_trackerDB;

INSERT INTO departments (dept_name)
VALUES ("Project Management");
INSERT INTO departments (dept_name)
VALUES ("Sales");
INSERT INTO departments (dept_name)
VALUES ("IT");
INSERT INTO departments (dept_name)
VALUES ("Human Resources");

INSERT INTO roles (title, salary, department_id)
VALUES ("Jr Project Manager", 41, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Sr Project Manager", 62, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Jr Sales Rep", 62, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Manager", 85, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Software Developer", 73, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Sr Software Developer", 95, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Recruiter", 68, 4);
INSERT INTO roles (title, salary, department_id)
VALUES ("HR Manager", 75, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Thorton", 2, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Dallas", 3, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Susan", "Seymour", 4, 5);
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Karen", "Thompson", 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tim", "Black", 7, 5);
