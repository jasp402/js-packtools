
const fs = require('fs')
const jsonToCsv = (dataJson=[],delimiter = ',')=>{
	let csv =''
	let msg = "";
	for (var i = 0; i < dataJson.length; i++) {
		var line = '';
		for (var index in dataJson[i]) {

			if (line != ''){
				line += ','
			}
				line += dataJson[i][index] ;
				console.log(line);

		}

		csv += line + '\r\n';
	}
	let hoy = new Date()
	fs.writeFile('./formList.csv', csv, 'utf8', function (err) {
		if (err) {
			msg='Some error occured - file either not saved or corrupted file saved.'
		} else{
			msg='It\'s saved!'
		}
   });

	return msg
};
