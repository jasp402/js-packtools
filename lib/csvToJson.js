/**
 * @function csvToJson - This read a document CSV and convert in a Object Javascript (JSON)
 * @param _csv {string}
 * @returns {void}
 * @version 0.1.13
 */

//ToDo - Improvement: Could can read file from path
module.exports = function(_csv){
    var i;
    var j;
    //this could be changed to replace with just "'"

    var input = _csv.replace(/%/g,'~').replace(/\"\"/g, encodeURIComponent('"'));
    //split on " to create an odds in quotes
    var quotesAndValues = input.split(/\"/g);
    var escapedInput;

    var quotesAndValuesLength = quotesAndValues.length;
    //encode the odd positions as these should be treated as one value
    //and need to ignore ,
    for (i = 1; i < quotesAndValuesLength; i = i + 2) {
        console.log();
        quotesAndValues[i] = encodeURIComponent(quotesAndValues[i]);
    }
    //join together the newly escaped values with no gaps
    escapedInput = quotesAndValues.join("");
    //split at new lines to get each row
    var lines = escapedInput.split(/\r\n|\n/g);

    var result = [];
    //split index 0 at , to get headers
    var headers = lines[0].split(/,/g);
    var headersLength = headers.length;
    for (i = 0; i < headersLength; i++) {
        //Headers will be JS objects so replace special char with safe _
        headers[i] = headers[i].replace(/\W/g, '_');
    }

    for (i = 1; i < lines.length; i++) {

        var obj = {};
        //splitat , to get values
        var currentline = lines[i].split(/,/g);
        var headersLength = headers.length;
        for (j = 0; j < headersLength; j++) {
            //double decode
            //first: decodes the quoted values , % etc
            //second: decodes the double quotes that were escaped at the start as %22 (%2522)
            //this may not be performant
            obj[headers[j]] = decodeURIComponent(decodeURIComponent(currentline[j])).replace(/~/g,'%');
        }

        result.push(obj);

    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
};