// auth check middleware
const { ACCESS_TOKEN_KEY } = require("common/constants.json");

exports.checkAuth = async (req, res, next) => {
  const token = req.cookies[ACCESS_TOKEN_KEY];
  console.log("auth check handler middleware");

  next();
};
