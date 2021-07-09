const emp = {
  vInt: 10001, //number
  vDate: "1953-09-02T00:00:00.000Z", //string
  vString: "Georgi", //string
  vDate2: new Date(), //object, constructor != Object, Array
  vBoolean: false, //boolean
  vFloat: 10.3, //number
  salaries1: [
    {
      emp_no: 10001,
      salary: 60117,
      from_date: "1986-06-26T00:00:00.000Z",
      to_date: "1987-06-26T00:00:00.000Z",
    },
    {
      emp_no: 10001,
      salary: 62102,
      from_date: "1987-06-26T00:00:00.000Z",
      to_date: "1988-06-25T00:00:00.000Z",
      salaries: {
        emp_no: 13331,
        salary: 60117,
        from_date: "1986-06-26T00:00:00.000Z",
        to_date: "1987-06-26T00:00:00.000Z",
      },
    },
  ],
};
const jp = require("jsonpath");

const result = jp.query(undefined, "$.vInt");
console.log(result);
