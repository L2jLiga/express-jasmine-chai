'use strict';
const {createLogger, transports} = require('winston');
const {format} = require('logform');

/** @type winston.Logger */
const logger = createLogger({
    format: format.combine(
        format.splat(),
        format.simple()
    ),
    transports: [
        new transports.Console({
            stderrLevels: ['error'],
            consoleWarnLevels: ['warn', 'debug']
        })
    ]
});

exports = module.exports = logger;
