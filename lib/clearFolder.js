/**
 * @function clearFolders
 * @description This simply clear the content a folder.
 * @category {file}
 * @param path {string} path of folder to delete content
 * @returns {object} All files found, deleted, and pending or not Deleted.
 * @version 0.1.13
 */

const fs = require('fs');

module.exports = function (path) {
    let dir = fs.readdirSync(path);
    (dir.length > 0) && dir.forEach(file => fs.unlinkSync(path + '/' + file));
    return {'files': dir, 'deleted' : dir.length , 'pending' : fs.readdirSync(path).length};
};