
const errorMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode || 500; // Use res.statusCode to check the status code
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null
    });
  };
  
  module.exports = errorMiddleware;