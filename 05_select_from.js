//Require  DB connection
const dbConnection = require('./require.dbconn');
var con = dbConnection();

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
	Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.id+' '+row.name);
    });
	
  });
});