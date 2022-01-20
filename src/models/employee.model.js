var dbConn = require("../config/db.config");

var Employee = (employee) => {
  this.firtst_name = employee.firtst_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.organization = employee.organization;
  this.description = employee.description;
  this.salary = employee.salary;
  this.status = employee.status ? employee.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Employee.getAllEmployees = (result) => {
  dbConn.query("SELECT* FROM employees", (err, res) => {
    if (err) {
      console.log("Error while feching employee", err);
      result(null, err);
    } else {
      console.log("Employee feching success");
      result(null, res);
    }
  });
};
//get employee by ID form DB
Employee.getEmployeeByID = (id,result) => {
    dbConn.query("SELECT * FROM employees WHERE id =?", id,(err,res) => {
        if(err){
            console.log("Error while fetching employee", err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
module.exports = Employee;
