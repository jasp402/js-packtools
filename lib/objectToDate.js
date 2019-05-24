/**
 * @function objectToDate - Generate a object with date details
 * @param strTime {string} date or UNIX date
 * @returns {object} with details of date
 * @since 0.1.11
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