/**
 * Validate router parameter for String/Character type
 */
const validator = require("validator");

const { AbstractValidator } = require("./validateRouter");

module.exports = (rule) => {
  return new _Email(rule);
};
class _Email extends AbstractValidator {
  constructor({
    path,
    required = false,
    // eslint-disable-next-line no-useless-escape
    msg = "`Should be email`",
  }) {
    super(path, required, eval(msg));

    // this.msg = ; //util.format(msg, min, max);
  }
  validate(values) {
    if (0 == values.length) return;

    values.forEach((element) => {
      if (typeof element != "string") {
        throw new Error("Must be string format");
      }
      if (validator.isEmail(element)) return;
      throw new Error(this.msg);
    });
  }
}
