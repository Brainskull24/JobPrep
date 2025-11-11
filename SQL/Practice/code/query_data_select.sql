select * from customers;
select * from orders;

-- Select specific columns

select country, score from customers;

-- Retrieve customers with a score not equal to 0

select * from customers where score != 0; 

-- Retrieve customers from Germany

select * from customers where country = 'Germany';
select * from customers where country = "Germany";

/* Retrieve all customers and 
   sort the results by the highest score first. */
   
select * from customers order by score desc;

/* Retrieve all customers and 
   sort the results by the country and then by the highest score. */
   
SELECT *
FROM customers
ORDER BY country ASC, score DESC;

-- Find the total score for each country

select country, sum(score) from customers group by country;

/* This will not work because 'first_name' is neither part of the GROUP BY 
   nor wrapped in an aggregate function. SQL doesn't know how to handle this column. */
   
SELECT 
    country,
    first_name,
    SUM(score) AS total_score
FROM customers
GROUP BY country;

-- Find the total score and total number of customers for each country

select sum(score), count(*), country from customers group by country;

/* Find the average score for each country
   and return only those countries with an average score greater than 430 */

select avg(score) as avg_score, country from customers group by country having avg_score > 430;

/* Find the average score for each country
   considering only customers with a score not equal to 0
   and return only those countries with an average score greater than 430 */
SELECT
    country,
    AVG(score) AS avg_score
FROM customers
WHERE score != 0
GROUP BY country
HAVING AVG(score) > 430;

-- Return Unique list of all countries
SELECT DISTINCT country
FROM customers;

-- Retrieve only 3 Customers
SELECT *
FROM customers limit 3;

-- Retrieve the Top 3 Customers with the Highest Scores
SELECT *
FROM customers
ORDER BY score DESC limit 3;

-- Retrieve the Lowest 2 Customers based on the score
SELECT *
FROM customers
ORDER BY score ASC limit 3;

-- Get the Two Most Recent Orders
SELECT *
FROM orders
ORDER BY order_date DESC limit 2;


/* Calculate the average score for each country 
   considering only customers with a score not equal to 0
   and return only those countries with an average score greater than 430
   and sort the results by the highest average score first. */
   
select avg(score), country from customers where score != 0  group by country having avg(score) > 430 order by avg(score) DESC;

/* Selecting Static Data */
-- Select a static or constant value without accessing any table

SELECT 123 AS static_number;

SELECT 'Hello' AS static_string;

-- Assign a constant value to a column in a query
SELECT
    id,
    first_name,
    'New Customer' AS customer_type
FROM customers;













