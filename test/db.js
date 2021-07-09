const { PrismaClient } = require("@prisma/client");

const config = require("../config/env.json");

const prisma = new PrismaClient({
  datasources: config.employees,
});
// const prisma = new PrismaClient({
//   datasources: {
//     employee: {
//       url: "mysql://root:passw@rd@127.0.0.1:3306/employees",
//     },
//   },
// });

async function main() {
  const employees = await prisma.employees.findUnique({
    where: { emp_no: 10001 },
    include: {
      salaries: true,
    },
  });
  // console.log(departments);
  console.log(employees);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// model employees {
//   emp_no       Int              @id
//   birth_date   DateTime         @db.Date
//   first_name   String           @db.VarChar(14)
//   last_name    String           @db.VarChar(16)
//   gender       employees_gender
//   hire_date    DateTime         @db.Date
//   dept_emp     dept_emp[]
//   dept_manager dept_manager[]
//   salaries     salaries[]
//   titles       titles[]
// }
