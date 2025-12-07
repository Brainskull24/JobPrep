create database placement;
use placement;

create table student_table
( student_id int primary key auto_increment,
first_name varchar(20),
last_name varchar(20),
gpa decimal(20,2),
enrollment_date datetime,
major varchar(20));

insert into student_table (student_id, first_name,last_name,gpa,enrollment_date,major)
values
(201, 'Shivansh', 'Mahajan', 8.79, '2021-09-01 09:30:00', 'Computer Science'),
(202, 'Umesh', 'Sharma', 8.44, '2021-09-01 08:30:00', 'Mathematics'),
(203, 'Rakesh', 'Kumar', 5.60, '2021-09-01 10:00:00', 'Biology'),
(204, 'Radha', 'Sharma', 9.20, '2021-09-01 12:45:00', 'Chemistry'),
(205, 'Kush', 'Kumar', 7.85, '2021-09-01 08:30:00', 'Physics'),
(206, 'Prem', 'Chopra', 9.56, '2021-09-01 09:24:00', 'History'),
(207, 'Pankaj', 'Vats', 9.78, '2021-09-01 14:30:00', 'English'),
(208, 'Navleen', 'Kaur', 7.00, '2021-09-01 06:30:00', 'Mathematics');

select * from student_table;

CREATE TABLE Program_table(
    STUDENT_REF_ID INT,
    PROGRAM_NAME VARCHAR(100),
    PROGRAM_START_DATE DATETIME,
    PRIMARY KEY (STUDENT_REF_ID, PROGRAM_NAME),
    FOREIGN KEY (STUDENT_REF_ID) REFERENCES student_table(student_id)
);

CREATE TABLE Scholarship_table (
    STUDENT_REF_ID INT,
    SCHOLARSHIP_AMOUNT DECIMAL(10, 2),
    SCHOLARSHIP_DATE DATETIME,
    PRIMARY KEY (STUDENT_REF_ID, SCHOLARSHIP_DATE),
    FOREIGN KEY (STUDENT_REF_ID) REFERENCES student_table(student_id)
);

INSERT INTO Program_table (STUDENT_REF_ID, PROGRAM_NAME, PROGRAM_START_DATE)
VALUES
(201, 'Computer Science', '2021-09-01 00:00:00'),
(202, 'Mathematics', '2021-09-01 00:00:00'),
(208, 'Mathematics', '2021-09-01 00:00:00'),
(205, 'Physics', '2021-09-01 00:00:00'),
(204, 'Chemistry', '2021-09-01 00:00:00'),
(207, 'Psychology', '2021-09-01 00:00:00'),
(206, 'History', '2021-09-01 00:00:00'),
(203, 'Biology', '2021-09-01 00:00:00');

INSERT INTO Scholarship_table (STUDENT_REF_ID, SCHOLARSHIP_AMOUNT, SCHOLARSHIP_DATE)
VALUES
(201, 5000, '2021-10-15 00:00:00'),
(202, 4500, '2022-08-18 00:00:00'),
(203, 3000, '2022-01-25 00:00:00'),
(204, 4000, '2021-10-15 00:00:00');

-- Write a SQL query to fetch “FIRST_NAME” from the Student table in upper case and use ALIAS name as STUDENT_NAME.
select upper(first_name) as student_name from student_table;

-- Write a SQL query to fetch unique values of MAJOR Subjects from Student table.
select distinct major from student_table;
select major from student_table group by(major);

-- Write a SQL query to print the first 3 characters of FIRST_NAME from Student table.
select substring(first_name,1,3) from student_table;

-- Write a SQL query to find the position of alphabet (‘a’) int the first name column ‘Shivansh’ from Student table.
select instr(first_name,'a') from student_table where first_name = 'Shivansh';

-- Write a SQL query that fetches the unique values of MAJOR Subjects from Student table and print its length.
select distinct major , length(major) as major_length from student_table; 

-- Write a SQL query to print FIRST_NAME from the Student table after replacing ‘a’ with ‘A’.
select replace(first_name,'a','A') from student_table;

-- Write a SQL query to print the FIRST_NAME and LAST_NAME from Student table into single column COMPLETE_NAME.
select concat(first_name,' ',last_name) as complete_name from student_table;

-- Write a SQL query to print all Student details from Student table order by FIRST_NAME Ascending and MAJOR Subject descending .
select * from student_table
order by first_name asc,
major desc;

-- Write a SQL query to print details of the Students with the FIRST_NAME as ‘Prem’ and ‘Shivansh’ from Student table.
select * from student_table
where first_name = 'Prem' or first_name = 'Shivansh';

-- OR

select * from student_table
where first_name IN('Prem', 'Shivansh');

-- Write a SQL query to print details of the Students excluding FIRST_NAME as ‘Prem’ and ‘Shivansh’ from Student table.
select * from student_table
where first_name != 'Prem' AND first_name != 'Shivansh';

-- OR

select * from student_table
where first_name NOT IN('Prem', 'Shivansh');

-- Write a SQL query to print details of the Students whose FIRST_NAME ends with ‘a’.
SELECT * FROM student_table
where first_name like '%a';

-- Write an SQL query to fetch the no. of Students for each MAJOR subject in the descending order.
select major, count(student_id) from student_table
group by major
order by count(major) desc;

-- Display the details of students who have received scholarships, including their names, scholarship amounts, and scholarship dates.
select * from student_table s
inner join scholarship_table st
on s.student_id = st.student_ref_id;

-- Write an SQL query to show only odd rows from Student table.
select * from student_table 
where student_id % 2 != 0; 

-- Write an SQL query to show the top n (say 5) records of Student table order by descending GPA.
select * from student_table 
order by gpa desc
limit 5;

-- Write an SQL query to determine the nth (say n=5) highest GPA from a table.
select distinct(gpa) from student_table order by gpa desc limit 5,1;

-- OR

SELECT * FROM student_table s1 
WHERE 4 = (
    SELECT COUNT(DISTINCT (s2.GPA)) 
    FROM Student s2
    WHERE s2.GPA >= s1.GPA
);

select * from student_table;

-- Write an SQL query to fetch the list of Students with the same GPA.
select s1.* from student s1, student s2 
where s1.gpa = s2.gpa and s1.student_id != s2.student_id;

-- Write an SQL query to fetch the first 50% records from a table.
select * from student_table 
where student_id <= (select count(student_id)/2 from student_table);

-- Write an SQL query to fetch the MAJOR subject that have less than 4 people in it.
select major, count(student_id) from student_table
group by student_id
having count(student_id) < 4;

-- Write an SQL query to show the last record from a table.
select * from student_table where student_id = 
(Select max(student_id) from student_table);

-- Write an SQL query to fetch the last five records from a table.
select * from(
select * from student_table 
order by student_id desc
limit 5) as sub_query
order by student_id;

-- Write an SQL query to fetch three max GPA from a table using co-related subquery.
SELECT DISTINCT GPA FROM Student_TABLE S1 
WHERE 3 >= (SELECT COUNT(DISTINCT GPA) FROM Student_TABLE S2 WHERE S1.GPA <= S2.GPA) ORDER BY S1.GPA DESC;

-- Write an SQL query to fetch 5th max GPA from a table.
SELECT DISTINCT GPA FROM Student_TABLE S1 
WHERE 5 >= (SELECT COUNT(DISTINCT GPA) FROM Student_TABLE S2 WHERE S1.GPA <= S2.GPA) ORDER BY S1.GPA DESC;

-- Write an SQL query to show the current date and time.
SELECT CURDATE();
SELECT NOW();