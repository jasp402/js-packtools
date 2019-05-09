/**
 * @function createFolders - This create a folder whit sub-folder of date by default.
 * @param _auto {boolean} by default true. see config -> constructor
 * @returns {void}
 * @since 0.1.13
 */

const constant = require('../constants');

module.exports = function(_auto = this.folderAutoDate) {
    _auto
        ? this.validateDir(constant.GENERAL_PATH_FULL(this.folderName, this.folderFromatDate))
        : this.validateDir(constant.GENERAL_PATH(this.folderName));

    //ToDo - should, Return anything (true, false, success, fails or path)
};