-- AGGREGATE FUNCTIONS (It return only a single value every time.)
-- SUM(), MAX(), MIN(), AVG(), COUNT()
use batch_2021;

CREATE TABLE Employee_Info (
    Id INT PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    Gender VARCHAR(10),
    Salary DECIMAL(10, 2),
    City VARCHAR(50)
);

INSERT INTO Employee_Info (Name, Gender, Salary, City)
VALUES
('Alok', 'Male', 50000.00, 'Delhi'),
('Priya', 'Male', 60000.00, 'Mumbai'),
('Rajesh', 'Female', 45000.00, 'Bangalore'),
('Sneha', 'Male', 55000.00, 'Chennai'),
('Anil', 'Male', 52000.00, 'Hyderabad'),
('Sunita', 'Female', 48000.00, 'Kolkata'),
('Vijay', 'Male', 47000.00, 'Pune'),
('Ritu', 'Male', 62000.00, 'Ahmedabad'),
('Amit', 'Female', 51000.00, 'Jaipur');

Select SUM(Salary) as Total_Salary from Employee_Info;
Select MAX(Salary) as Max_Salary from Employee_Info;
Select MIN(Salary) as Min_Salary from Employee_Info;
Select AVG(Salary) as Avg_Salary from Employee_Info;
Select COUNT(Salary) as No_of_Salaries from Employee_Info;

Select * from Employee_Info;