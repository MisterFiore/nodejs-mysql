//Different way to connection.
var con=require('./require.dbconn')();

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users WHERE name = 'UGUR COBAN' ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});