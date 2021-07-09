const jq = require("jsonpath");

exports.ValidateBody = (rules) => {
  return (req, _res, next) => {
    rules.forEach((rule) => {
      console.log("check body");
      rule.check(req.body);
    });
    next();
  };
};
exports.ValidateParam = (rules) => {
  return (req, _res, next) => {
    rules.forEach((rule) => {
      console.log("check param");
      rule.check(req.params);
    });
    next();
  };
};
exports.ValidateQuery = (rules) => {
  return (req, _res, next) => {
    rules.forEach((rule) => {
      console.log("check query");
      rule.check(req.query);
    });
    next();
  };
};

exports.AbstractValidator = class AbstractValidator {
  constructor(jsonpath, required, msg) {
    this.required = required;
    this.jsonpath = jsonpath; //jsonpath lib start with '$.'
    this.msg = msg;
  }

  check(target) {
    const results = this.query(target);
    if (results.length == 0) {
      if (this.required) {
        throw new Error(this.msg);
      }
      return;
    }
    this.validate(results);
    // sanitize();
  }

  validate(_targets) {
    throw new Error("Validate should implemented");
  }
  // sanitize() {}

  query(json) {
    if (undefined == json || null == json) return [];
    return jq.query(json, `$.${this.jsonpath}`);
  }
};
