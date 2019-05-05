'use strict';
module.exports = Object.freeze({
    //global
    PATH_LOG                : date => `${__dirname}/../data_donwload/${date}/`,

    //Errors
    ERROR_INVALID_DATE          : date => `Error with Date, this invalid date or unknown format. ${date}`,

    //Utility
        COLOR: {
            black: '\x1b[0;30m',
            dkgray: '\x1b[1;30m',
            brick: '\x1b[0;31m',
            red: '\x1b[1;31m',
            dkred: '\x1b[31m',
            green: '\x1b[0;32m',
            lime: '\x1b[1;32m',
            brown: '\x1b[0;33m',
            yellow: '\x1b[1;33m',
            navy: '\x1b[0;34m',
            blue: '\x1b[1;34m',
            violet: '\x1b[0;35m',
            magenta: '\x1b[1;35m',
            teal: '\x1b[0;36m',
            cyan: '\x1b[1;36m',
            ltgray: '\x1b[0;37m',
            white: '\x1b[1;37m',
            reset: '\x1b[0m'
        }
});