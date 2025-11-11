/* ============================================================================== 
   SQL String Functions
-------------------------------------------------------------------------------
   This document provides an overview of SQL string functions, which allow 
   manipulation, transformation, and extraction of text data efficiently.

   Table of Contents:
     1. Manipulations
        - CONCAT
        - LOWER
        - UPPER
	- TRIM
	- REPLACE
     2. Calculation
        - LEN
     3. Substring Extraction
        - LEFT
        - RIGHT
        - SUBSTRING
=================================================================================
*/

use myDatabase;
show tables;

desc customers;

select 
	concat(id, '-', first_name , '-', country, '-', score) as info
    from customers;
    
/* ============================================================================== 
   LOWER() & UPPER() - Case Transformation
=============================================================================== */

select lower(first_name) as lower_first_name from customers;

select upper(first_name) as lower_first_name from customers;

/* ============================================================================== 
   TRIM() - Remove White Spaces
=============================================================================== */

select trim(first_name) as trimmed_first_name from customers;

-- Find customers whose first name contains leading or trailing spaces
SELECT 
    first_name,
	length(first_name) len_name,
	length(TRIM(first_name)) len_trim_name,
	length(first_name) - length(TRIM(first_name)) flag
FROM customers
WHERE length(first_name)  != length(TRIM(first_name));
-- WHERE first_name != TRIM(first_name)

/* ============================================================================== 
   REPLACE() - Replace or Remove old value with new one
=============================================================================== */
-- Remove dashes (-) from a phone number

SELECT
'123-456-7890' AS phone,
REPLACE('123-456-7890', '-', '') AS clean_phone;

SELECT
'123-456-7890' AS phone,
REPLACE('123-456-7890', '-', '/') AS clean_phone;

-- Replace File Extence from txt to csv
SELECT
'report.txt' AS old_filename,
REPLACE('report.txt', '.txt', '.csv') AS new_filename;

/* ============================================================================== 
   length() - String Length & Trimming
=============================================================================== */

-- Calculate the length of each customer's first name
SELECT 
    first_name, 
    length(first_name) AS name_length
FROM customers;

/* ============================================================================== 
   LEFT() & RIGHT() - Substring Extraction
=============================================================================== */

-- Retrieve the first two characters of each first name

select left(first_name, 2) as left_2 from customers;

-- OR

-- NOT CONSIDERING WHITESPACES
SELECT 
    first_name,
    LEFT(TRIM(first_name), 2) AS first_2_chars
FROM customers;

SELECT 
    first_name,
    RIGHT(first_name, 2) AS last_2_chars
FROM customers;

/* ============================================================================== 
   SUBSTRING() - Extracting Substrings
=============================================================================== */

-- Retrieve a list of customers' first names after removing the first character
SELECT 
    first_name,
    SUBSTRING(TRIM(first_name), 2, LENGTH(first_name)) AS trimmed_name
FROM customers;

/* ==============================================================================
   NESTING FUNCTIONS
===============================================================================*/

-- Nesting
SELECT
first_name, 
UPPER(LOWER(first_name)) AS nesting
FROM customers;
