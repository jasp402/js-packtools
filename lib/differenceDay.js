/**
 * @function differenceDay - It's Return the number of days between 2 dates.
 * @param _startDate {string} [date={Object}] date init.
 * @param _endDate {string} [format=mm/dd/yyyy] date end.
 * @param _initDate {boolean} [boolean=true] include init date.
 * @returns {string} if {type} is true*
 * @version 0.1.3
 */
module.exports = function(_startDate, _endDate, _initDate=true) {
    let dStart = new Date(_startDate);
    let dEnd   = new Date(_endDate);
    let dInit  = _initDate ? 1 : 0;

    if(isNaN(dStart) || isNaN(dEnd)) return false;

    let fDate1 = Date.UTC(dStart.getFullYear(), dStart.getMonth() + 1, dStart.getDate() - dInit);
    let fDate2 = Date.UTC(dEnd.getFullYear(), dEnd.getMonth() + 1,   dEnd.getDate());
    let dif    = fDate2 - fDate1;

    return Math.floor(dif / (1000 * 60 * 60 * 24));
};