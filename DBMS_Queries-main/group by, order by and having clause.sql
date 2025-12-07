-- GROUP BY , ORDER BY AND HAVING QUERIES

use batch_2021;

-- GROUP BY COMMAND IS USED TO GROUP ROWS WITH COMMON VALUES IN SPECIFIED COLUMNS
create table student_data(
	id int auto_increment primary key,
    age int,
	marks int
);

insert into student_data(age,marks) values
(14,89),
(15,78),
(14,80),(15,90),(13,99);

select age, count(id) as no_of_students
from student_data
group by age;

-- ORDER BY IS USED TO SORT OUT ALL THE RESULTS IN ASC OR DESC ORDER 
select age, count(id) as no_of_students
from student_data
group by age
order by age ASC;

-- HAVING CLAUSE IS USED TO FILTER RECORDS WITH SPECIFIC CONDITION SUMMARIZED ON GROUP BY COMMAND
select age, count(id) as no_of_students
from student_data
group by age
having age > 13; -- doesn't include age group 13 


-- queries based on these 3 clauses 

-- 1. Retrieve all records from the student_data table and sort them by marks in ascending order.
select * from student_data 
order by marks asc;

-- 2. Retrieve age groups that have more than one student in the student_data table.
select age, count(id) as no_of_students from student_data 
group by age
having no_of_students > 1;

-- 3. Retrieve the average marks for each age group in the student_data table.
select age, avg(marks) as avg_marks from student_data
group by age;

/* 4. Retrieve all records from the student_data table and sort them by age 
in ascending order and by marks in descending order within each age group. */

select * from student_data 
order by age ASC, marks DESC;

-- 5. Retrieve age groups with an average mark greater than 85 in the student_data
select age, avg(marks) as avg_marks from student_data
group by age
having avg_marks > 85; 

-- 6. Retrieve the total marks and the number of students for each age group, and then find the age group with the highest total marks.
select age, sum(marks) as total_marks, count(*) as no_of_students
from student_data
group by age
order by total_marks desc
limit 1; -- This is used to fetch only the first row 