/* global config */
// service for employee entity in database

const { PrismaClient } = require("@prisma/client");

const employeeDB = config.datasource.employee;
const prisma = new PrismaClient({
  datasources: employeeDB,
});

/**
 *
 * @param {int} empNo
 * @returns
 */
exports.findUniqueEmployee = async (empNo) => {
  const result = await prisma.employees.findUnique({
    where: { emp_no: empNo },
    include: {
      dept_manager: true,
    },
  });
  return result;
};
