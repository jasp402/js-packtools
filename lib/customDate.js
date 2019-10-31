/**
 * @function customDate - It's a date control. Without parameters give the current date, use the parameters to customize its functionality.
 * @param _date {string} [date={Object}] date or Object Date by Default is current date.
 * @param _format {string} [format=mm/dd/yyyy] define the format that want to return.
 * @param _addDay {int} [addDay=0] count of days that add to date o current date
 * @param _type {boolean} [type=false] method to return {string} or {Object Date}
 * @returns {string} if {type} is true
 * @returns {Object} if {type} is false. Return {Object Date}
 * @version 0.1.3
 */
module.exports = function(_date, _format, _addDay, _type=false) {
    let date      = _date   ? new Date(_date + " 12:00:00") : new Date();
    let format    = _format || "mm/dd/yyyy";
    let addDay    = _addDay || 0;
    let optReturn = _type   || false;

    date.setDate(date.getDate() + addDay);

    let month     = String(date.getMonth() + 1);
    let day       = String(date.getDate());
    let year      = String(date.getFullYear());

    let result;

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day     = '0' + day;

    if(format === 'TIMESTAMP_X'){
        result  = new Date(date).getTime()
    }else{
        result = format.replace(/[a-zA-z]+/gi, (str) => {
            switch (str) {
                case "mm":
                    return month;
                case "dd":
                    return day;
                case "yyyy":
                    return year;
                case "yy":
                    return year.substr(-2);
                case "H":
                    return (date.getHours() + 24) % 12 || 12;
                case "h":
                    return date.getHours().toString().length < 2 ? '0' + date.getHours() : date.getHours();
                case "m":
                    return date.getMinutes().toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes();
                case "i":
                    return date.getSeconds().toString().length < 2 ? '0' + date.getSeconds() : date.getSeconds();
                default:
                    return str;
            }
        });
        result = result.replace(/~/g, '');
    }

    return optReturn ? new Date(result + " 12:00:00") : result;
};