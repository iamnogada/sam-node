// Get router oject from express
const router = require("express").Router();
const {
  ValidateBody,
  ValidateParam,
  // ValidateQuery,
  Number,
  Character,
  Email,
} = require("common/validate");
// import middleware
// const authHandler = require("middlewares/authHandler");
// const validator = (req, res, next) => {
//   console.log("validator");
//   throw new Error("validator");
//   next();
// };
const bodyRule = [
  Number({
    path: "salary.amount",
    min: 333,
    max: 10000.5,
    required: true,
    msg: "`Input error: Body value of [${path}] must be required and between ${min} and ${max}`",
  }),
  Character({
    path: "name",
    min: 4,
    max: 255,
    required: true,
    msg: "`Input error: Length of [${path}] must be between ${min} and ${max}`",
  }),
  Email({
    path: "email",
    required: true,
    msg: "`Input error: must be email format`",
  }),
];
const empNoRule = [
  Number({
    path: "emp_no",
    min: 333,
    max: 90000.5,
    required: true,
    msg: "`Input error: Param value of [${path}] must be required and between ${min} and ${max}`",
  }),
];
// import controllers
const employeeController = require("controllers/employee.controller");

router.get("/:id(\\d+)", employeeController.getEmployeeById);

// router.get("/error/", validator("hello"), employeeController.validator);
router.post(
  "/body/:emp_no",
  ValidateBody(bodyRule),
  ValidateParam(empNoRule),
  employeeController.validatorTest
);

// router.get("/query", ValidateQuery(rule), employeeController.validatorTest);

// Must exports
module.exports = router;
