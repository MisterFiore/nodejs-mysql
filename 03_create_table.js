//Require  DB connection
const dbConnection = require('./require.dbconn');
var con = dbConnection();

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users"+
			"("+
				"id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,"+
				"name VARCHAR(50),"+
				"recordtime DATETIME,"+
				"INDEX name_IND (name),"+
				"INDEX recordtime_IND (recordtime),"+
				"CONSTRAINT uc_row_unique UNIQUE(name,recordtime)"+
			")ENGINE=InnoDB";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});


