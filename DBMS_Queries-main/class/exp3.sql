use class_queries;

create table flights(
flightid int primary key,
airline varchar(50),
departure varchar(50),
arrival varchar(50),
seatsAvailable int);

insert into flights(flightid, airline, departure, arrival, seatsAvailable)
values(101,'A','cityA','cityB',150),
(102,'B','cityB','cityC',149),
(103,'C','cityC','cityA',240);

start transaction;
lock tables flights read;
select * from flights;

unlock tables;
commit;