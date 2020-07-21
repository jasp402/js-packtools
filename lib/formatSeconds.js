/**
 * @function formatSeconds
 * @augments Time/Date
 * @param {number} time - this path for create folders
 * @returns {string}
 * @version 1.0.0
 * @description This only format a value float
 */
module.exports = function(time){
    const _ = require('lodash');
    let sec = Number(time).toFixed(3).split('.');
    return _.padStart(sec[0], 3, "0")+'.'+sec[1];
};