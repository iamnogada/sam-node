// controller using async
const employeeService = require("services/employee.service");

exports.getEmployeeById = async (req, res) => {
  const result = await employeeService.findUniqueEmployee(
    parseInt(req.params.id)
  );
  res.json(result);
};

exports.validatorTest = async (req, res) => {
  res.json({ status: "ok" });
};
