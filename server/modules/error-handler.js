'use strict';
const logger = require('../utils/logger');

exports = module.exports = app => app.use(errorHandler);

function errorHandler(err, req, res, next) {
    if (req.headersSent) {
        logger.error('Headers was already sent!');
        return next(err);
    }

    logger.error('Error happens due %s request to %s:\n%O', req.method, req.originalUrl, err);
    res.status(500).json({message: 'An error occurred while processing request'});
}
