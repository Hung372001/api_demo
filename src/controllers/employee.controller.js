const EmployeeModel = require("../models/employee.model");
exports.getEmployeeList = (req, res) => {
  EmployeeModel.getAllEmployees((err, employees) => {
    console.log("we are here");
    if (err) res.send(err);
    console.log(`Employees`, employees);
    res.send(employees);
  });
};

//get empoloyee by Id
exports.getEmployeeByID = (req, res) => {
  // console.log('get emp by id');
  EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
    if (err) res.send(err);
    console.log(`single employee data`, employee);
    res.send(employee);
  });
};
