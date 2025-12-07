create database Batch_2021;
use Batch_2021; 

-- primary key is used as a unique identifier -- 
create table student(
Name varchar(30),
UID int primary key, 
Section varchar(30),
Contact int
);

-- desc is used for table structure --
desc student;

insert into student values ('A',1,21,8765432);
insert into student values ('B',2,22,8234321);
insert into student values ('C',3,21,8122232);
insert into student values ('D',4,22,8321131);

SELECT * FROM student;

-- auto_increment enables a value to start from 1 and go on by incrementing 1 to its value each time a new row is created --
Create table Employee(
	Empid int auto_increment primary key,
	EmpName varchar(50),
	EmpDpt varchar(50),
	Salary bigint
);

INSERT INTO Employee (EmpName, EmpDpt, Salary)
VALUES 
('Alice Johnson', 'Marketing', 55000),
('Bob Brown', 'Finance', 75000),
('Charlie Davis', 'Engineering', 85000);

SELECT * FROM Employee;

-- update command is used to update the table and SET is used to set the value of the attribute --
update Employee SET EmpName = "Ashish" where Empid = 2;
delete from Employee where EmpName = 'Alice Johnson';

SELECT * from Employee;

-- truncate deletes the data of the table but not structure --
truncate table student;
desc student;