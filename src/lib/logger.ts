/// <reference path="../typings/tsd.d.ts" />

import winston = require('winston');

/**
 * Logger bootstrap.
 *
 * @module Logger
 */
var logger: winston.LoggerInstance = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      prettyPrint: true,
      handleExceptions: true
    })
  ]
});
logger.cli();

export = logger;
