/**
 * @function writeLogError
 * @augments global
 * @param  {string} title - Title for exception
 * @param  {string} msg - Message
 * @param  {string} color - color for text (by Default darkRed)
 * @returns {void}
 * @version 1.0.0
 * @description write file .log in folder default of class.
 */
module.exports = function(title, msg, /*optional*/color=this.constant.COLOR.dkred) {
    let error = {
        title: title,
        message: msg || 'Exception custom',
        stack: (new Error()).stack
    };
    this._log(error, this.nameWriteLogError, color);
    Error.prototype.name = title;
    throw new Error(msg);
};