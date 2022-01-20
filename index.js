const express = require("express");
const app = express();
const port = process.env.PORT || 44806;
const employee = require("./src/routes/employee.route.js");

app.get("/", (req, res) => {
  res.send("Hello world!");
});
const employeeRoutes = require("./src/routes/employee.route");
app.use("/api/v1/employee", employeeRoutes);
app.listen(port, () => {
  console.log(`express server is running at port${port}`);
});
