Coding challenge:

Write a function (try to use filter function in JS) that fiters only the positive odd numbers from an array. For example,
array = [1,2,3,-5,-6,-7,4] -> [1,3]

answer:

function odds(number){  
	result = []  
	number.filter(function(x){  
		if(x>0 && x % 2 !== 0){  
			result.push(x);  
		}  

	});  

return result;  

}  
_______________
- SQL - structured Query Language; relational database; stores data in tables, columns and rows
- NoSQL (MongoDB) - stores data without using tables. 


. A database is composed of tables
. Each table has columns and can be related to 
other tables in the database. Each column has a data type
. Each table also has rows of data which correspond to the column names and data types described in the schema


- sqlite3 - on the terminal gives you the ability to write sql; 
- brew install sqlite3
EXP:
CREATE TABLE movies (id INTEGER PRIMARY KEY, name TEXT, release_year INTEGER);   
INSERT INTO movies VALUES (1, "Avatar", 2009);  
SELECT * FROM movies;

-  relational database - Tables are related to one another, unlike in a NoSQL database, where entries do not   
http://guides.rubyonrails.org/active_record_basics.html

- Object-relational mapping - converting data between two different programs/languages  
- Active Records - allows you to write sequel as Ruby objects.
- CRUD


- primary key
- foreign key


Intro to Database
https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql

people.pluralize

Model - programatic representation of stuff that it is stored in the database. Database is not written in Ruby. Models say 'create this db in Ruby " so we can work with them easily.

		


 - Exercise:

- Create new app from scratch;		
- include two models - User and Post;  
- create 5 users and 5 posts from the terminal;  
- print all the users on the browser;
- create a method of creating users from the browser;  
- print all the posts on the browser;
- create a method of creating posts from the browser;

- add user_id to posts table;
- create two additional pages where you print the last user and post that you created;