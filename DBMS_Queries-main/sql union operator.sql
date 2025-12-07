-- UNION and UNION ALL --
-- RULE - To apply UNION and UNION ALL -> No. of columns and data types of columns should be same and identical.
-- UNION - it doesn't include the repeated values.
-- UNION ALL - it includes the repeated values. Also, it does not give the data in sorted order

use batch_2021;
show tables;
CREATE TABLE FootballParticipants (
    ID INT PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE HockeyParticipants (
    ID INT PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    Email VARCHAR(100)
);

drop table FootballParticipants;


INSERT INTO FootballParticipants (Name, Email)
VALUES
('John', 'john.doe@example.com'),
('Jane', 'jane.smith@example.com'),
('Michael', 'michael.brown@example.com'),
('Emily', 'emily.davis@example.com'),
('David', 'david.wilson@example.com');


INSERT INTO HockeyParticipants (Name, Email)
VALUES
('John', 'john.doe@example.com'),
('Patricia', 'patricia.taylor@example.com'),
('Michael', 'michael.brown@example.com'),
('Emily', 'emily.davis@example.com'),
('Kevin', 'kevin.martinez@example.com');

 

-- [UNION OPERATOR]
select * from FootballParticipants
UNION
select * from HockeyParticipants;


-- Error case for UNION
-- All queries combined using a UNION, INTERSECT or EXCEPT operator must have an equal number of expressions in their target lists.
select id, name from FootballParticipants
UNION
select id, name, email from HockeyParticipants;


-- [UNION ALL OPERATOR]
select * from FootballParticipants
UNION ALL
select * from HockeyParticipants;
