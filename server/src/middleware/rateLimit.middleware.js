const rateLimit = require('express-rate-limit');

const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,

    skip: (req) => req.method === "OPTIONS",

    message: {
        success: false,
        message: "Too many requests, try again later",
    }
});

module.exports = Limiter;