/**
 * @function generateRageDate
 * @augments Time/Date
 * @param {string} lastDate - Start date.
 * @param {number} splitDay - split day range
 * @param {string} endDate - end date or current day by default.
 * @returns {array}
 * @version 1.0.0
 * @description This function allows you to separate a given date in the number of days assigned to it.
 * @example
 */
module.exports = function(lastDate, splitDay=15, endDate=this.customDate()){
    return (this.differenceDay(lastDate, endDate, false) / splitDay) > 1
        ? new Array(Math.ceil(this.differenceDay(lastDate,endDate, false)/splitDay)).fill(lastDate).map((x,i)=>this.customDate(x, false, splitDay*(i)))
        : [lastDate];

};