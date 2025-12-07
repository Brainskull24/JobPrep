-- views are used to create a specific instance of a table to provide restricted data to a user..
use batch_2021;

-- create view
create view vw_high_scorers
as select id, age, marks
from student_data 
where marks > 85;

-- selecting view
select * from vw_high_scorers;

CREATE TABLE student_info (
    id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES student_data(id)
);

INSERT INTO student_info (id, first_name, last_name) VALUES
(1, 'John', 'Doe'),
(2, 'Jane', 'Smith'),
(3, 'Alice', 'Johnson'),
(4, 'Bob', 'Brown'),
(5, 'Charlie', 'Doe');

-- creating view using joins 
create view student_complete_details as
select s.id,s.age,s.marks,i.first_name,i.last_name
from student_data s
join student_info i 
where s.id = i.id;

select * from student_complete_details;

-- updating a view 
create or REPLACE VIEW vw_high_scorers as 
select * from student_data
where marks > 90;

select * from vw_high_scorers;

-- dropping a view 
drop view vw_high_scorers;

-- we have studied till now that when we change our data in views it has no effect on original table but its not true..
-- if we do DML operations on views it also reflects in the original table

select * from student_complete_details;

CREATE TABLE studentinfo (
    id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    marks int
);

insert into studentinfo values
(1,"A","B",122),(2,"C","D",220),(3,"P","Q",120);

create view vw_studentinfo
as 
select * from studentinfo; 

insert into vw_studentinfo values (4,"X","Y",233);
select * from vw_studentinfo;
select * from studentinfo;