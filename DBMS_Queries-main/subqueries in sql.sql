-- sub queries in sql 
/* A subquery or inner or nested query is a query within another SQL query
and embedded within where clause. A subquery works as a condition for outer query. */

use batch_2021;

-- The column used with WHERE clause, should have to be used in SQ.
-- We can only have single column inside a SQ

select * from MyEmployees;
insert into MyEmployees values (1,"a","male",23432,"sdf",3);
insert into MyEmployees values
(2,"b","female",12343,"sdd",5),
(3,"c","male",53442,"avc",2),
(4,"d","female",236432,"afd",7),
(5,"e","male",63413,"fhbhb",1);

select * from MyEmployees 
where EmpId in 
(Select EmpId from MyEmployees where salary>50000);