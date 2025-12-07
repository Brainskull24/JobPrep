-- Alter commands

show databases;
use batch_2021;
show tables;

select * from orders;

-- add column
alter table orders add column c_name varchar(50);
desc orders;

-- modify column 
alter table orders modify column c_name char(50);
desc orders;

-- drop column 
alter table orders drop column c_name;

-- rename column 
alter table orders rename column order_value to value_of_order;

-- drop constraint
alter table orders drop primary key ;

-- add constraint 
alter table orders add constraint pk_order_id primary key (order_id);

-- alter tables
-- rename table
alter table orders rename to orderTable;

-- we can also perform multiple alterations in a single command like adding multiple columns or modifying multiple columns

-- alias in sql (They are used to get the columns using different names for better understanding..)
select * from orderTable;
select c_id as customer_id from orderTable;