/* ==============================================================================
   SQL Data Manipulation Language (DML)
-------------------------------------------------------------------------------
   This guide covers the essential DML commands used for inserting, updating, 
   and deleting data in database tables.

   Table of Contents:
     1. INSERT - Adding Data to Tables
     2. UPDATE - Modifying Existing Data
     3. DELETE - Removing Data from Tables
=================================================================================
*/

/* ============================================================================== 
   INSERT
=============================================================================== */
/* #1 Method: Manual INSERT using VALUES */
-- Insert new records into the customers table
INSERT INTO customers (id, first_name, country, score)
VALUES 
    (6, 'Anna', 'USA', NULL),
    (7, 'Sam', NULL, 100);

-- Incorrect column order 
INSERT INTO customers (id, first_name, country, score)
VALUES 
    (8, 'Max', 'USA', NULL);
    
-- Incorrect data type in values
INSERT INTO customers (id, first_name, country, score)
VALUES 
	('Max', 9, 'Max', NULL);

-- Insert a new record with full column values
INSERT INTO customers (id, first_name, country, score)
VALUES (10, 'Max', 'USA', 368);

-- Insert a new record without specifying column names (not recommended)
INSERT INTO customers 
VALUES 
    (11, 'Andreas', 'Germany', NULL);
    
-- Insert a record with only id and first_name (other columns will be NULL or default values)
INSERT INTO customers (id, first_name)
VALUES 
    (12, 'Sahra');

/* #2 Method: INSERT DATA USING SELECT - Moving Data From One Table to Another */
-- Copy data from the 'customers' table into 'persons'

create table persons (
	id int primary key,
    person_name varchar(200) not null,
	birth_date varchar(50) null, 
    phone varchar(100) not null
);

INSERT INTO persons (id, person_name, birth_date, phone)
SELECT
    id,
    first_name,
    NULL,
    'Unknown'
FROM customers;

/* ============================================================================== 
   UPDATE
=============================================================================== */

-- Change the score of customer with ID 6 to 0
UPDATE customers
SET score = 0
WHERE id = 6;

-- Change the score of customer with ID 10 to 0 and update the country to 'UK'
UPDATE customers
SET score = 0,
    country = 'UK'
WHERE id = 10;

-- Update all customers with a NULL score by setting their score to 0
UPDATE customers
SET score = 0
WHERE score IS NULL;

-- Verify the update
SELECT *
FROM customers
WHERE score IS NULL;

/* ============================================================================== 
   DELETE
=============================================================================== */

-- Select customers with an ID greater than 5 before deleting
SELECT *
FROM customers
WHERE id > 5;

-- Delete all customers with an ID greater than 5
DELETE FROM customers
WHERE id > 5;

-- Delete all data from the persons table
DELETE FROM persons;

-- Faster method to delete all rows, especially useful for large tables
TRUNCATE TABLE persons;











