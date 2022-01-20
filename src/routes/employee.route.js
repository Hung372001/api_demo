const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/employee.controller");
router.get("/", EmployeeController.getEmployeeList);
router.get("/:id", EmployeeController.getEmployeeByID);
module.exports = router;
