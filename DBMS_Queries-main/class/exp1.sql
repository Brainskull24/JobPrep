show databases;
create database class_queries;
use class_queries;

create table if not exists employees2(
empid int primary key auto_increment,
firstname varchar(20),
lastname varchar(20),
emprole varchar(20),
salary int(20)
);

start transaction;
insert into employees2(firstname, lastname, emprole,salary)
values('John','Doe','Software engineer',60000);
savepoint afterJohn;

insert into employees2(firstname, lastname, emprole,salary)
values('Joe','Biden','Analyst',40000);
savepoint afterBiden;

Rollback to savepoint AfterJohn;

insert into employees2(firstname, lastname, emprole,salary)
values('kamala','harris','ministry',140000);
savepoint afterKamala;

commit;

select * from employees2;