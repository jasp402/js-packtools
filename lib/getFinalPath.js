/**
 * @function getFinalPath
 * @augments Path/Files
 * @returns {string} relative path of folder.
 * @version 1.0.0
 * @description Create structure of folders with parameters in constructor.
 */
module.exports = function(){
    let folderDate = (this.folderWithDate) ? this.customDate(null,this.folderFormatDate, 0, false)+'/' : '';
    return this.folderName+'/'+folderDate;
};
