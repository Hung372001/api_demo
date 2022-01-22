const mysql = require("mysql");
const dbConn = mysql.createConnection({
  host: "mysql-testapi01.alwaysdata.net",
  user: "testapi01_abc",
  password: "apidemo",
  database: "testapi01_node_js",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected Success");
});
module.exports = dbConn;
