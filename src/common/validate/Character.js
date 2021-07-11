/**
 * Validate router parameter for String/Character type
 */
// const validator = require("validator");

const { AbstractValidator } = require("./validateRouter");

module.exports = (rule) => {
  return new _Character(rule);
};
class _Character extends AbstractValidator {
  constructor({
    path,
    required = false,
    min = 0,
    max = 255,
    // eslint-disable-next-line no-useless-escape
    msg = "`String length of [${path}] must be between ${min} and ${max}`",
  }) {
    super(path, required, eval(msg));
    this.min = min;
    this.max = max;

    // this.msg = ; //util.format(msg, min, max);
  }
  validate(values) {
    if (0 == values.length) return;

    values.forEach((element) => {
      if (typeof element != "string") {
        throw new Error("Must be string");
      }
      let length = element.length;

      if (length >= this.min && length <= this.max) return;
      throw new Error(this.msg);
    });
  }
}
