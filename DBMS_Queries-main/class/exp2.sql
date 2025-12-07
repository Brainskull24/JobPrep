use class_queries;

create table employee(
empid int primary key,
name varchar(50),
position varchar(50),
salary decimal(10,2)
);

create user 'John'@'localhost' identified by 'password 123';
grant all privileges on class_queries.* to 'John'@'localhost';
revoke all privileges on class_queries.* from 'John'@'localhost';