const mysql = require("mysql");
const dbConn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "node_mysql_crud_db",
  port: "3307",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected Success");
});
module.exports = dbConn;
