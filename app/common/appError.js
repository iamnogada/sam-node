class AppError extends Error {
  constructor(statusCode, status, errorCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    this.errorCode = errorCode;
    this.message = message;
  }
}

module.exports = AppError;
