/**
 * @function differenceDay
 * @augments Time/Date
 * @param  {string} _startDate
 * @param  {string} _endDate - [format=mm/dd/yyyy] date end.
 * @param  {boolean} _initDate - [boolean=true] include init date.
 * @returns {object} - All files found, deleted, and pending or not Deleted.
 * @version 1.0.0
 * @description This simply clear the content a folder.
 * @example
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