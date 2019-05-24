/**
 * @function clearFolders - This simply clear the content a folder.
 * @param path {string} path of folder to delete content
 * @returns {object} All files found, deleted, and pending or not Deleted.
 * @since 0.1.13
 */

const fs = require('fs');

module.exports = function (path) {
    let dir = fs.readdirSync(path);
    (dir.length > 0) && dir.forEach(file => fs.unlinkSync(path + '/' + file));
    return {'files': dir, 'deleted' : dir.length , 'pending' : fs.readdirSync(path).length};
};