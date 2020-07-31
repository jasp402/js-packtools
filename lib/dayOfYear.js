/**
 * @function dayOfYear
 * @augments Time/Date
 * @param  {string|date} date
 * @returns {number} - number of day.
 * @version 1.0.0
 * @description This snippet gets the day of the year from a Date object.
 * @link https://gist.github.com/fatosmorina/9e879f34f3c76cacbe31d188db50db4d/raw/43e9f616ddf3100ebc5d21c9b4889bb7478b10c8/day_of_year.js
 */
module.exports = function(date){
    if(typeof date === 'string'){
        date = new Date(date);

    }else if(typeof date === "undefined"){
        date = new Date("01/01/"+new Date().getFullYear());
    }
    return Math.floor(( new Date().getTime() - date.getTime()) / 86400000);
};