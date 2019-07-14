/**
 * @function customDate - Using a sting and a format transform the string in date.
 * @param _sDate {string} date in string.
 * @param _sFormat {string} define the format to date.
 * @param _bType {boolean} Type to return date. string or object date.
 * @returns {string} or {object}
 * @since 0.7.4
 */
const _        = require('lodash');
module.exports = function(_sDate, _sFormat, _bType=true) {
    if(!_sDate)
        throw new Error(`the parameters '_sDate' is required.`);

    if(!_sFormat)
        throw new Error(`the parameters '_sFormat' is required.`);

    let _date = _sDate;
    if(_date.length !== _sFormat.length) {
        if (_sFormat.split('/')[0].length === 2)
            if (_date.split('/')[0].length === 1)
                _date = _date.replace(/\/?^[0-9]/g, _.padStart(_date.split('/')[0], 2, "0"));

        if (_sFormat.split(' ')[1].split(':')[0].length === 2)
            if (_date.split(' ')[1].split(':')[0].length === 1)
                _date = _date.replace(/ .*\:/g, ' '+_.padStart(_date.split(' ')[1].split(':')[0], 2, "0")+':');
    }

    let days        = [];
    let month       = [];
    let year        = [];
    let hour        = [];
    let minute      = [];
    let second      = [];
    let meridian    = [];
    let parseDate   = [];
    let parseTime   = [];
    let date        = _date.split('');
    let format      = _sFormat.split('');
    let needAdjust  = false;
    let result;
    let resultDate;
    let resultTime;



    //throw new Error('long beteewn date and format not is equal');

    format.map((x, i) => {
        if (x === 'D')
            days.push(date[i]);
        if (x === 'M')
            month.push(date[i]);
        if (x === 'Y')
            year.push(date[i]);
        if (x === 'h')
            hour.push(date[i]);
        if (x === 'm')
            minute.push(date[i]);
        if (x === 's')
            second.push(date[i]);
        if (x === 'x')
            meridian.push(date[i]);
    });

    if(meridian.length > 0) {
        switch (meridian.join('')) {
            case 'pm':
                needAdjust = true;
                break;
            case 'p':
                needAdjust = true;
                break
        }
    }

    parseDate.push((month.length > 0) && month.join(''));
    parseDate.push((days.length > 0) && +days.join(''));
    parseDate.push((year.length > 0) && +year.join(''));
    resultDate = parseDate.join('/');

    if(needAdjust)
        parseTime.push((hour.length > 1) ? eval(12 + Number(hour.join(''))) : eval(12 + Number(_.padStart(hour, 2, "0"))));
    else
        parseTime.push((hour.length > 1) ? hour.join('') : _.padStart(hour, 2, "0"));

    parseTime.push((minute.length > 1) ? ':'+minute.join('') : ':'+_.padStart(minute, 2, "0"));
    parseTime.push((second.length > 1) ? ':'+second.join('') : ':'+_.padStart(second, 2, "0"));
    resultTime = parseTime.length > 0 ? ' '+parseTime.join('') : '';

    result = resultDate+resultTime+' GMT+00:00';

    if(_bType)
        return new Date(result);
    else
        return result
};