-- LIKE Operator in sql
use batch_2021;

CREATE TABLE employees_like (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50)
);

INSERT INTO employees_like (first_name, last_name, department) VALUES
('John', 'Doe', 'Engineering'),
('Jane', 'Smith', 'Marketing'),
('Alice', 'Johnson', 'Engineering'),
('Bob', 'Brown', 'Sales'),
('Charlie', 'Doe', 'Engineering'),
('Dave', 'Wilson', 'Marketing'),
('Eve', 'Davis', 'Sales'),
('Frank', 'Miller', 'Engineering');

/* categories of like operator queries
	1. prefix matching
	2. suffix matching
	3. substring matching
    4. single character matching
    5. exact length matching
    6. combined matching
*/

-- 1. prefix matching
	-- 1. select entries with first name starting  with 'J'
		select * from employees_like
        where first_name like 'J%';
	
    -- 2. select entries with last name starts with 'D'
		select * from employees_like
        where last_name like 'D%';
        
-- 2. suffix matching
	-- 1. select entries with first name ending with 'e'
		select * from employees_like
        where first_name like '%e';
        
	-- 2. select entries with last name ending with 'n'
		select * from employees_like
        where last_name like '%n';
        
-- 3. substring matching
	-- 1. select entries with department having 'ngi' substring
		select * from employees_like
        where department like '%ngi%';

-- 4. single character matching
	-- 1. find entries whose first name's second alphabet is 'o'
		select * from employees_like 
        where first_name like '_o%';
        
-- 5. exact length matching
	-- 1. find entries whose first name length is exactly '5'
		select * from employees_like
        where first_name like '_____';
        
-- 6. combined matching
	-- 1. find entries whose last_name starts with 'D' and have 'o' as the third character.
		select * from employees_like 
        where last_name like 'D_o%';
