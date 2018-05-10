const mysql = require('mysql');

const con = mysql.createConnection({
  host			: "localhost",
  user			: "ftc",
  password		: "oceansid",
  database		: "ftc"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL");
}); 

module.exports = con;