-- Joins in SQL
-- 1.  SQL joins are used to combine two or more table data.
-- 2. for eg: table A -5 columns, table B - 4 columns. I want 3 columns from A and 2 from B collectively in single table.
-- 3.  INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN. (join is done on some common attribute)

use batch_2021;

create table Employee_tbl (
EmpId int UNIQUE NOT NULL,
EmpName varchar(50) NOT NULL,
Email varchar(50) NOT NULL,
Designation varchar(50) NOT NULL
);

insert into Employee_tbl values(11, 'Alok', 'alok@xyx', 'Manager'),
(12, 'Raman', 'raman@xyx', 'Assistant'),
(13, 'Nisha', 'nisha@xyx', 'IT Incharge'),
(14, 'Ashok', 'Ashok@xyx', 'Operator'),
(15, 'Naman', 'Naman@xyx', 'AD'),
(16, 'Ayush', 'Ayush@xyx', 'Professor');

select * from Employee_tbl;


create table department(
	DeptId int UNIQUE NOT NULL,
	DeptName varchar(50),
	Dept_salary bigint NOT NULL,
	EmpId int UNIQUE NOT NULL
);

insert into department values (111, 'Admin', 50000, 13),
(222, 'Accounts', 45000, 12),
(333, 'IT', 66000, 11),
(444, 'Academics', 40000, 14),
(555, 'ERP', 70000, 17),
(666, 'Management', 80000, 18);

select * from department;
select * from Employee_tbl;

-- inner join (It returns the common data from both the tables like in this case entries with common EmpId's will be fetched..) 
select * from Employee_tbl as A
INNER JOIN department as B
ON A.EmpId = B.EmpId;

-- lets say we only want EmpName from A and Designation from B 
select A.EmpName , B.DeptName from Employee_tbl as A
INNER JOIN department as B
on A.EmpId = B.EmpId;

/* LEFT JOIN 
(Returns left table + common data in both the tables for ex here it will take all the rows of Employee_tbl but not which are 
not common in both and are in department table) */
select * from Employee_tbl as A
LEFT JOIN department as B
on A.EmpId = B.EmpId;

/* RIGHT JOIN 
(Returns right table + common data in both the tables for ex here it will take all the rows of department table but not which are 
not common in both and are in Employee_tbl table) */
select * from Employee_tbl as A
RIGHT JOIN department as B
on A.EmpId = B.EmpId;

-- FULL OUTER JOIN (All Combined data)
select * from Employee_tbl as A
FULL OUTER JOIN department as B
on A.EmpId = B.EmpId;

-- SELF JOIN (it is a regular jo2in in which table is joined with itself)
create table Employee_Manager(
Empid int PRIMARY KEY,
EmpName varchar(50) NOT NULL,
ManagerId int
);

insert into Employee_Manager values (1, 'Manik',4),
(2, 'Ayush',4),
(3, 'Neha',5),
(4, 'Shreya',6),
(5, 'Piush',1),
(6, 'Anushka',1);

select * from Employee_Manager;

Select A.EmpName as Employee_Name, B.EmpName as Manager_Name from Employee_Manager as A
INNER JOIN Employee_Manager as B
on A.ManagerId = B.Empid;

