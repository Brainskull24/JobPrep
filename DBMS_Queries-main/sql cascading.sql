-- CASCADING REFERENTIAL INTEGRITY --
show databases;
use batch_2021;
show tables;


create table orderss(
	orderId int primary key,
    orderDate date
);

create table OrderDetails(
	orderDetailId int primary key,
    orderId int,
    productId int,
    quantity int,
    foreign key(orderId) references orderss(orderId)
		on delete cascade
        on update cascade
);

insert into orderss values
(1,'2024-07-22'),
(2,'2024-07-21'),
(3,'2024-07-23');

insert into OrderDetails values
(1, 1, 101, 2),
(2, 2, 102, 3),
(3, 3, 103, 1);

update orderss set orderId = 10 where orderId = 1;
delete from orderss where orderId = 2;

select * from orderss;
select * from orderDetails;

-- Lets say we want to delete something from the parent table but give it a default value in child table
-- we can use alter command to give it a default value and it will keep it 

alter table orderss add default 0 for orderId;
delete from orderDetails where orderId = 3;