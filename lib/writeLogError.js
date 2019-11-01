/**
 * @function writeLogError
 * @augments global
 * @param  {string} msg - message
 * @param  {string} color - color for text (by Default darkRed)
 * @returns {void}
 * @version 1.0.0
 * @description write file .log in folder default of class.
 */
module.exports = function(msg, color=this.constant.COLOR.dkred) {
    this._log(msg, this.nameWriteLogError, color);
};