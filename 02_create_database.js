var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "nodejs_user",
  password: "uqUYfgkUPL4TavWW"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodejs_db", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});