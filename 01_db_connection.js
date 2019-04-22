//C:\Users\Your Name>npm install mysql
var mysql = require('mysql');

//Download MySQL and create user : http://dev.mysql.com/downloads/mysql/
var con = mysql.createConnection({
  host: "localhost",
  user: "nodejs_user",
  password: "uqUYfgkUPL4TavWW"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});