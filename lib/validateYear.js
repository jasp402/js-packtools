/**
 * @function validateYear - Can be current year or spend the year to validate
 * @param date {string | object} current date
 * @param yearCompare  {string | object} year to compare or current year
 * @param operator  {string} operator to compare
 * @returns {boolean}
 * @since 0.1.11
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