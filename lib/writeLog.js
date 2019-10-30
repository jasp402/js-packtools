/**
 * @function writeLog - write file .log in folder default of class.
 * @param msg {string} message
 * @param color {string} color for text
 * @returns {void}
 * @since 1.0.0
 */
module.exports = function(msg, color=this.constant.COLOR.dkgray) {
    this._log(msg, this.nameWriteLog, color);
};