/**
 * @function createFolders - This create a folder whit sub-folder of date by default.
 * @param path {string} this path for create folders
 * @param _auto {boolean} by default true. see config -> constructor
 * @returns {void}
 * @version 0.1.13
 */

const constant = require('../constants');
const fs       = require('fs');

module.exports = function(path, withDate = this.folderWithDate) {
    let date = this.customDate(null,config.folderFormatDate, 0, false);
    path
        ? this.validateDir(path)
        :
    withDate
        ? this.validateDir(constant.GENERAL_PATH_FULL(this.folderName, date))
        : this.validateDir(constant.GENERAL_PATH(this.folderName));

    return fs.existsSync(path);
};