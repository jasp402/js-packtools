/**
 * @function timeToDate
 * @augments Time/Date
 * @param {string|date} _toDate - new Date() ~ target date
 * @param {string|date} _sDate - new Date() ~ start date (default: now)
 * @returns {string}
 * @version 1.0.1
 * @description return the time between two dates, or a date and now
 */

module.exports = function (_toDate, _sDate) {
    if (!_toDate) throw new Error(`the parameter '_toDate' is required.`);

    let targetDate;
    if (typeof _toDate === "string") {
        targetDate = Date.parse(new Date(_toDate));
    } else {
        targetDate = Date.parse(_toDate)
    }

    let currentDate;
    if (typeof _sDate === "string") {
        currentDate = Date.parse(new Date(_sDate));
    } else if (_sDate) {
        currentDate = Date.parse(_sDate);
    } else {
        currentDate = Date.now();
    }

    if (isNaN(targetDate)) throw new Error(`the parameter '_toDate' is invalid as Date.`)
    if (isNaN(currentDate)) throw new Error(`the parameter '_toDate' is invalid as Date.`)
    if (currentDate < targetDate) throw new Error(`the parameters '_sDate' is greater than '_toDate'.`);


    const diference = currentDate - targetDate;

    const totalHours = ((diference / 1000) / 3600);
    const toDays     = totalHours / 24;
    const toHours    = getRest(toDays) * 24;
    const toMinutes  = getRest(toHours) * 60;
    const toSeconds  = getRest(toMinutes) * 60;

    // Other formats
    const toWeeks = toDays / 7;
    const toMonth = toWeeks / 4.25;
    const toYear  = toMonth / 12;

    function trunc(n) {
        return Math.trunc(n);
    }

    function getRest(n) {
        return n - Math.floor(n);
    }

    function preformat(date, str) {
        const tDate = trunc(date);
        return `${tDate} ${str}${tDate > 1 ? 's' : ''}`;
    }


    if (toDays >= 1) {
        if (toDays >= 30) {
            if (toMonth > 12) {
                return preformat(toYear, 'year')
            } else {
                return preformat(toMonth, 'month')
            }
        } else if (toDays >= 7) {
            return preformat(toWeeks, 'week')
        } else {
            return preformat(toDays, 'day')
        }

    } else {

        if (toHours >= 1) {
            return preformat(toHours, 'hour')
        } else if (toMinutes >= 1) {
            return preformat(toMinutes, 'minute')
        } else {
            return preformat(toSeconds, 'second')
        }

    }

};
