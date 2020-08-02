/**
 * @function createFolders
 * @augments Path/Files
 * @param  {string} path
 * @param  {boolean} withDate - by default true. see config -> constructor
 * @returns {boolean}
 * @version 1.0.0
 * @description This create a folder whit sub-folder of date by default if param `withDate` is True.
 * @example
 */
module.exports = function(path, withDate = this.folderWithDate) {
    const constant  = require('../constants');
    const fs        = require('fs');
    const date      = this.customDate(null,this.folderFormatDate, 0, false);
    path
        ? this.validateDir(path)
        :
    withDate
        ? this.validateDir(constant.GENERAL_PATH_FULL(this.folderName, date))
        : this.validateDir(constant.GENERAL_PATH(this.folderName));

    return fs.existsSync(path);
};
//ToDo - Review params 'withDate' not working