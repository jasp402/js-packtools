/**
 * @function deleteFile - Check if the file exists before deleting
 * @param path {string} Path of file to delete.
 * @returns {boolean}
 * @since 0.1.19
 */
const fs = require('fs');
module.exports = function (path) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    } else {
        return false;
    }
};