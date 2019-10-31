/**
 * @function formatSeconds - This only format a value float
 * @param time {number} this path for create folders
 * @returns {string}
 * @version 0.1.20
 */

const _        = require('lodash');
module.exports = function(time){
    let sec = Number(time).toFixed(3).split('.');
    return _.padStart(sec[0], 3, "0")+'.'+sec[1];
};