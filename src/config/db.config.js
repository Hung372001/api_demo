const mysql = require("mysql");
const dbConn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "node_mysql_crud_db",
  port: "3306",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected Success");
});
module.exports = dbConn;
