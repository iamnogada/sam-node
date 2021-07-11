class AppError extends Error {
  constructor(statusCode, status, errorCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    this.errorCode = errorCode;
  }
}

module.exports = AppError;
