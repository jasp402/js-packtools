/**
* @function getFinalPath - Create structure of folders with parameters in constructor.
* @returns {string} relative path of folder.
* @since 1.0.0
*/

module.exports = function(){
    let folderDate = (this.folderWithDate) ? this.customDate(null,this.folderFormatDate, 0, false) : '';
    console.log(folderDate);
    return this.folderName+'/'+folderDate+'/';
};
