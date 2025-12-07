/* SQL Constraints 	
	1. NOT NULL: Ensures that a column cannot have a NULL value.
	2. UNIQUE: Ensures all values in a column or a set of columns are distinct across the table.
	3. PRIMARY KEY: A combination of NOT NULL and UNIQUE, uniquely identifying each row in the table.
	4. FOREIGN KEY: Ensures that a value in one table matches a value in another table, maintaining referential integrity.
	5. CHECK: Ensures that all values in a column satisfy a specific condition.
	6. DEFAULT: Assigns a default value to a column when no value is specified.
	7. INDEX: Improves the speed of data retrieval operations on a table by creating a data structure based on one or more columns.
*/

show databases;
use batch_2021;
show tables;

-- NOT NULL and UNIQUE constraint
create table Employee1 (
	Empid int UNIQUE NOT NULL,
	EmpName varchar(20) NOT NULL,
	EmpDpt varchar(20) NOT NULL,
	Salary bigint NOT NULL
);

INSERT INTO Employee1 values(1,'A','HR',1234);

-- inserting duplicate entry for EmpId which is a column with unique constraint
INSERT INTO Employee1 values(1,'A','HR',1234); -- Error Code: 1062. Duplicate entry '1' for key 'employee1.Empid' 0.000 sec

INSERT INTO Employee1 values(3,'','',3456); -- doesn't show an error because these are emplty entries but not null.

-- inserting null value in EmpName and EmpDept columns
INSERT INTO Employee1 values(4,null,null,456); -- Error Code: 1048. Column 'EmpName' cannot be null	0.000 sec

SELECT * FROM Employee1;

-- PRIMARY KEY CONSTRAINT
create table voter_list(
	Voter_id int PRIMARY KEY,
	Voter_Name varchar(50) NOT NULL,
	Voter_Age int NOT NULL
);

insert into voter_list values (1, 'Shreya', 21);
-- i cannot execute this line again because of the PK constraint
insert into voter_list values (2, 'Naman', 22);
insert into voter_list values (3, 'Vanshika', 23);
insert into voter_list values (4, 'Pritam', 21);
insert into voter_list values (5, 'Dhruv', 26);

select * from voter_list;

-- CHECK CONSTRAINT

create table voter_list_1(
	Voter_id int PRIMARY KEY,
	Voter_Name varchar(50) NOT NULL,
	Voter_Age int NOT NULL
	CHECK (Voter_Age >= 18)  -- HERE CHECK WILL VALIDATE THAT THE VOTER AGE COLUMN SHOULD HAVE A VALUE GREATER OR EQUAL TO 18.
);

insert into voter_list_1 values (1, 'Narendra', 21);

-- Giving age less than 18 in voter_age column
insert into voter_list_1 values (2, 'Amit', 17); -- Check constraint 'voter_list_1_chk_1' is violated.	0.016 sec

create table voter_list_2(
	Voter_id int PRIMARY KEY,
	Voter_Name varchar(50) NOT NULL,
	Voter_Age int NOT NULL,
	CHECK (Voter_Age >= 18),
    Country varchar(50) DEFAULT "INDIA" -- default value is set to INDIA if no value is given
);

-- FOREIGN KEY USAGE 
create table customer(
	c_id int primary key auto_increment,
    c_name varchar(50) not null,
    c_contact bigint not null
);

insert into customer values 
(2, 'Naman', 22234),
(3, 'Vanshika', 24533),
(1, 'Pritam', 223451);

create table orders (
	order_id int primary key auto_increment,
    order_items varchar(50) not null,
    order_value int not null,
    c_id int,
    FOREIGN KEY(c_id) REFERENCES customer(c_id)
);
-- foreign key is not unique like PK 
-- Now here a customer cannot place a order until his record his present in the customer table which maintains referential integrity

-- now here a c_id value 4 doesn;t exist in customer table thats why we cannot put it in orders table 
insert into orders values (5, 'Processor', 800, 4); 
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`batch_2021`.`orders`, CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `customer` (`c_id`))	0.015 sec

-- Now lets insert this in customer table first and then execute it
insert into customer values (4,"Nimit",43567);
-- Now its working properly
insert into orders values (5, 'Processor', 800, 4); 

select * from orders;