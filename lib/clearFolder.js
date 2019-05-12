/**
 * @function clearFolders - This simply clear the content a folder.
 * @param path {string} path of folder to delete content
 * @returns {void}
 * @since 0.1.13
 */

const fs = require('fs');

module.exports = function (path) {
    let dir = fs.readdirSync(path);
    (dir.length > 0) && dir.forEach(file => fs.unlinkSync(path + '/' + file));
    return fs.readdirSync(path).length;
    //ToDo - This don't have return notify
};