/**
 * @function clearFolders
 * @augments Path/Files
 * @param  {string} path - ~
 * @returns {object} - All files found, deleted, and pending or not Deleted.
 * @version 1.0.0
 * @description This simply clear the content a folder.
 * @example
 */
module.exports = function(path) {
    const fs = require('fs');
    const dir = fs.readdirSync(path);
    (dir.length > 0) && dir.forEach(file => fs.unlinkSync(path + '/' + file));
    return {'files': dir, 'deleted' : dir.length , 'pending' : fs.readdirSync(path).length};
};