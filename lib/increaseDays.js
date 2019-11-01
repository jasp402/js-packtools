/**
 * @function increaseDays
 * @augments Time/Date
 * @param {string} startDate
 * @param {number} days
 * @param {string} maxDate
 * @returns
 * @version 1.0.0
 * @description Add days to date, can defined a maxDate.
 */
module.exports = function(startDate, days = 0, maxDate='') {
    let endDate = maxDate || this.customDate();
    let dayDiffer = this.differenceDay(startDate, endDate, false);
    return (dayDiffer > days) ? this.customDate(startDate, '', days) : this.customDate(startDate, '', Number(dayDiffer));
};