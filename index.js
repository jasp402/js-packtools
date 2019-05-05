constant = require(__dirname+'/constants');
class utils {
    customDate(_date, _format, _addDay, _type) {
        let date      = _date   ? new Date(_date + " 12:00:00") : new Date();
        let format    = _format || "mm/dd/yyyy";
        let addDay    = _addDay || 0;
        let optReturn = _type   || false;

        date.setDate(date.getDate() + addDay);

        let month = String(date.getMonth() + 1);
        let day = String(date.getDate());
        let year = String(date.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        let result = format.replace(/[a-zA-z]+/gi, (str) => {
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
        return optReturn ? new Date(result + " 12:00:00") : result;
    }
    differenceDay(_startDate, _endDate){
        let aDate1 = _startDate.split('/');
        let aDate2 = _endDate.split('/');
        let fDate1 = Date.UTC(aDate1[2],aDate1[0],aDate1[1]-1);
        let fDate2 = Date.UTC(aDate2[2],aDate2[0],aDate2[1]-1);
        let dif = fDate2 - fDate1;
        return Math.floor(dif / (1000 * 60 * 60 * 24));
    }
}
module.exports = utils;