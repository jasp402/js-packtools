/**
 * @function createFolders - This create a folder whit sub-folder of date by default.
 * @param path {string} this path for create folders
 * @param _auto {boolean} by default true. see config -> constructor
 * @returns {void}
 * @since 0.1.13
 */

const constant = require('../constants');
const fs       = require('fs');

module.exports = function(path, _auto = this.folderAutoDate) {
    path
        ? this.validateDir(path)
        :
    _auto
        ? this.validateDir(constant.GENERAL_PATH_FULL(this.folderName, this.folderFromatDate))
        : this.validateDir(constant.GENERAL_PATH(this.folderName));

    return fs.existsSync(path);
};