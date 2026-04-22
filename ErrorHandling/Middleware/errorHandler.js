const errorHandler = (err, req, res, next) => {
    console.error("X-Error",err.message);
    console.error(err.stack);

    err.status = err.statusCode || 500;
    err.status = err.status || "Error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
}

module.exports = errorHandler;