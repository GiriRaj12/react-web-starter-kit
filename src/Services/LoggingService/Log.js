
const logger = require('logdown')('React App');

logger.state.isEnabled = process.env.NODE_ENV === "development";

export class Log {

    static info(message) {
        logger.info(message);
    }

    static warn(message) {
        logger.warn(message);
    }

    static error(message) {
        logger.error(message);
    }

}   