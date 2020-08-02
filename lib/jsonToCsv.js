
const fs = require('fs')
module.exports =  (dataJson=[],dirPath ,delimiter = ',')=>{
	let csv =''
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
			msg='Some error occured - file either not saved or corrupted file saved.'
		} else{
			msg='It\'s saved!'
		}
   });

	return msg
};

