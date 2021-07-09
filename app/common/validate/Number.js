/**
 * Validate router parameter for NUmber type
 */
const validator = require("validator");

const { AbstractValidator } = require("./validateRouter");

exports.Number = (rule) => {
  return new _Number(rule);
};
class _Number extends AbstractValidator {
  constructor({
    path,
    required = false,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE,
    // eslint-disable-next-line no-useless-escape
    msg = "`Value of [${path}] must be between ${min} and ${max}`",
  }) {
    super(path, required, eval(msg));
    this.min = min;
    this.max = max;

    // this.msg = ; //util.format(msg, min, max);
  }
  validate(values) {
    if (0 == values.length) return;

    values.forEach((element) => {
      let newValue;
      if (typeof element == "string") {
        if (validator.isFloat(element)) {
          newValue = parseFloat(element);
        } else if (validator.isDecimal(element)) {
          newValue = parseInt(element);
        } else {
          throw new Error(this.msg);
        }
      } else if (typeof element == "number") {
        newValue = element;
      } else {
        throw new Error("Unknow type");
      }
      if (newValue >= this.min && newValue <= this.max) return;
      throw new Error(this.msg);
    });
  }
}
