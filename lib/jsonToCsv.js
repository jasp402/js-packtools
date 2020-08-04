/**
 * @function jsonToCsv
 * @augments convert
 * @param {array} dataJson - [] ~ Array with dataSet.
 * @param {string} dirPath - ~ Dir path for out file csv.
 * @param {string} delimiter - , ~ Character delimiter .
 * @returns {string} - message with confirmation of operation
 * @version 1.0.1
 * @description Function for convert JSON to CSV
 * @example
 */
module.exports =  (dataJson=[],dirPath ,delimiter = ',')=>{
	const fs = require('fs');
	let csv = '';
	let msg = "";
	for (var i = 0; i < dataJson.length; i++) {
		var line = '';
		for (var index in dataJson[i]) {
			if (line != ''){
				line += ','
			}
				line += dataJson[i][index] ;
		}

		csv += line + '\r\n';
	}
		fs.writeFile(dirPath, csv, 'utf8', function (err) {
		if (err) {
			msg='Some error occurred - file either not saved or corrupted file saved.'
		} else{
			msg='It\'s saved!'
		}
   });

	return msg
};

