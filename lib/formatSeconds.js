/**
 * @function formatSeconds
 * @augments Time/Date
 * @param {number} time - this path for create folders
 * @returns {string}
 * @version 1.0.1
 * @description This only format a value float
 * @example
 */
module.exports = function(time){
    let sec = Number(time).toFixed(3).split('.');
    return this.modStart(sec[0], 3, "0")+'.'+sec[1];
};