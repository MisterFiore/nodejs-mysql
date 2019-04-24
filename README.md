# Node.js - MYSQL Tutorials
Node.js - Basic Mysql functions and tutorials.

"You must create database and user for connection."


## Run node.js
```
C:\Users\Your Name>node file.js
```

## Load package for mysql
> You can delete "node_modules" folder. Then, install with this code.
```
C:\Users\Your Name>npm install mysql
```

## Create mysql user
> Open the mysql folder and login
```
C:\Users\Name>cd C:\Program Files\mysql\bin
C:\Program Files\mysql\bin>mysql -u root -p
```

> Let’s start by making a new user within the MySQL shell:
```
mysql> CREATE USER 'newuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

> Provide the user with access to the information they will need.
```
mysql> GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
```

> Reload all the privileges.
```
mysql> FLUSH PRIVILEGES;
```

## Documentation

* [Nodejs - Download](https://nodejs.org/)
* [MYSQL - Download](http://dev.mysql.com/downloads/mysql/)
* [Nodejs - W3Schools MYSQL Lessons](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
