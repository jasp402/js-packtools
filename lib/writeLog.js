/**
 * @function writeLog
 * @augments global
 * @param  {string} msg - message
 * @param  {string} color - color for text
 * @returns {void}
 * @version 1.0.0
 * @description write file .log in folder default of class.
 * @example
 */
module.exports = function(msg, color=this.constant.COLOR.dkgray) {
    this._log(msg, this.nameWriteLog, color);
};