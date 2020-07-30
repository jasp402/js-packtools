/**
 * @function is
 * @augments validate
 * @param {constructor} _date - new Date() ~ date or Object Date by Default is current date.
 * @param {constructor} _format - mm/dd/yyyy ~ define the format that want to return.
 * @returns {string|Object} if {type} is false. Return {Object Date}
 * @version 1.0.0
 * @description It's a date control. Without parameters give the current date, use the parameters to customize its functionality.
 * @example var jsPackTools = require("js-packtools"); \n let u = new jsPackTools(); \n u.customDate('05/01/2019', 'yyyy-mm-dd', 15, false);  // => 2019-05-15
 */
    module.exports = function (type, val) {
        return ![, null].includes(val) && val.constructor === type
    };