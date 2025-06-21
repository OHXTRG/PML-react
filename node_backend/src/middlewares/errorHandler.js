const { CustomAPIError } = require("../utils/customError");

exports.errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      success: false,
      message: err.message,
    });
  }
  return res.status(500).json({
    status: 500,
    success: false,
    message: "Internal Server error " + err.message,
  });
};
