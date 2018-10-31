
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
The ORM is Object Relational Mapper. The ORM in Rails is a way to use SQL without using SQL statements. Essentially, an ORM allows you to use objects to connect to tables in a relational database. ActiveRecord is the most popular Rails ORM.

- Active Records - allows you to write sequel as Ruby objects. It represents Ruby objects converted from SQL. Active Record, properly defined, is a design pattern where an object is represented as a record on a table in a relational database

- CRUD
- MVC
- RESTful protocol - representational state transfer
	A primary benefit of using REST, both from a client and server's perspective, is REST-based interactions happen using constructs that are familiar to anyone who is accustomed to using the internet's Hypertext Transfer Protocol (HTTP). Representational State Transfer (REST) is an architectural style that defines a set of constraints and properties based on HTTP. Web Services that conform to the REST architectural style, or RESTful web services, provide interoperability between computer systems on the Internet. 
	Communication between server and web application.


- primary key
- foreign key

- adding column to an exising table in Sinatra:
- change_table :blogs do |t|
  		t.column :user_id, :integer
  	end



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