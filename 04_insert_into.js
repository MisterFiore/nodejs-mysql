//Require  DB connection
const dbConnection = require('./require.dbconn');
var con = dbConnection();


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (name, recordtime) VALUES ('UGUR COBAN', '2019-02-04 13:30')";
  con.query(sql, function (err, result) {
    if (err) throw err.message;
    console.log(result.affectedRows + " record inserted");
	console.log("Last id : " + result.insertId);
  });
});
