/**
 * @function validateYear
 * @augments Time/Date
 * @param {string | object} date - current date
 * @param {string | object} yearCompare - year to compare or current year
 * @param {string} operator - operator to compare
 * @returns {boolean}
 * @version 1.0.0
 * @description Can be current year or spend the year to validate
 * @example
 */
module.exports = function(date, yearCompare = new Date().getFullYear(), operator = '='){
    let year;
    let compare = Number(yearCompare);
    let result = true;
    if(!date) return false;

    if(typeof date === 'string'){
        year = new Date(date).getFullYear();

    }else if(typeof date === 'object'){
        if(Object.keys(date).length === 0) return false;
        year = date.getFullYear();
    }

    switch (operator){
        case '=':
            result = year === compare;
            break;
        case '!=':
            result = year !== compare;
            break;
        case '<':
            result = year < compare;
            break;
        case '>':
            result = year > compare;
            break;

    }
    return result;
};