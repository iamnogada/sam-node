// error handeler
const AppError = require("common/appError");

exports.global = (error, _req, res, _next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "unknown error";

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    // stack: NODE_ENV == "production" ? "" : error.stack,
  });
};

exports.notFoundErrorHandler = (req, res, next) => {
  const err = new AppError(404, "fail", "not found api ...");
  next(err, req, res, next);
};
