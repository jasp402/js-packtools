/**
 * @function deleteFile
 * @augments Path/Files
 * @param {string} path - Message to save in log
 * @returns {string} Show to message with console.log() after to save
 * @version 1.0.0
 * @description Check if the file exists before deleting
 */
module.exports = function (path) {
    const fs = require('fs');
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    } else {
        return false;
    }
};