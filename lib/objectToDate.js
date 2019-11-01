/**
 * @function objectToDate
 * @augments Time/Date
 * @param {string} strTime
 * @returns {object}
 * @version 1.0.0
 * @description Generate a object with date details.
 */
module.exports = function(strTime){
    let date = new Date(Number(strTime) || strTime);
    return (date instanceof Date && !isNaN(date)) ? {
        year    :date.getFullYear(),
        month   :(date.getMonth() + 1),
        day     :date.getDate(),
        hour    :date.getHours(),
        minute  :date.getMinutes(),
        second  :date.getSeconds(),
        mlSecond:date.getMilliseconds()
    }: date.toString() };