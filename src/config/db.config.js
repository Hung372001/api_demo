const mysql = require("mysql");
const dbConn = mysql.createConnection({
  host: "http://127.0.0.1/phpmyadmin/",
  user: "root",
  password: "",
  database: "node_mysql_crud_db",
  port: "3036",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected Success");
});
module.exports = dbConn;
