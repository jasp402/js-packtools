/**
 * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text
 * @module JS-PackTools | API Doc
 * @version 0.1.9
 */
const constant = require(__dirname+'/constants');
const _        = require('lodash');
const fs       = require('fs');
/** utils*/
class utils {
    /**
     * @function customDate
     *
     * ?> It's a date control. Without parameters give the current date, use the parameters to customize its functionality.
     * @param _date {string} [date={Object}] date or Object Date by Default is current date.
     * @param _format {string} [format=mm/dd/yyyy] define the format that want to return.
     * @param _addDay {int} [addDay=0] count of days that add to date o current date
     * @param _type {boolean} [type=false] method to return {string} or {Object Date}
     * @returns {string} if {type} is true
     * @returns {Object} if {type} is false. Return {Object Date}
     *
     * @since 0.1.3
     *
     * @example
     * customDate('05/01/2019', 'YYYY-mm-dd', 15, false); // => 2019-05-15
     *
     */
    customDate(_date, _format, _addDay, _type) {
        let date      = _date   ? new Date(_date + " 12:00:00") : new Date();
        let format    = _format || "mm/dd/yyyy";
        let addDay    = _addDay || 0;
        let optReturn = _type   || false;

        date.setDate(date.getDate() + addDay);

        let month     = String(date.getMonth() + 1);
        let day       = String(date.getDate());
        let year      = String(date.getFullYear());
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day     = '0' + day;

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

    /**
     * @function differenceDay
     *
     * ?> It's Return the number of days between 2 dates.
     * @param _startDate {string} [date={Object}] date init.
     * @param _endDate {string} [format=mm/dd/yyyy] date end.
     * @param _initDate {boolean} [boolean=true] include init date.
     * @returns {string} if {type} is true
     * @returns {Object} if {type} is false. Return {Object Date}
     *
     * @since 0.1.3
     *
     * @example
     * customDate('05/01/2019', 'YYYY-mm-dd', 15, false); // => 2019-05-15
     *
     */
    differenceDay(_startDate, _endDate, _initDate=true) {
        let dStart = new Date(_startDate);
        let dEnd   = new Date(_endDate);
        let dInit  = _initDate ? 1 : 0;

        if(isNaN(dStart) || isNaN(dEnd)) return false;

        let fDate1 = Date.UTC(dStart.getFullYear(), dStart.getMonth() + 1, dStart.getDate() - dInit);
        let fDate2 = Date.UTC(dEnd.getFullYear(), dEnd.getMonth() + 1,   dEnd.getDate());
        let dif    = fDate2 - fDate1;

        return Math.floor(dif / (1000 * 60 * 60 * 24));
    }

    /**
     * @function objectToDate
     *
     * ?> Generate a object with date details
     * @param strTime {string} date or UNIX date
     * @returns {object} with details of date
     *
     * @since 0.1.11
     *
     * @example
     * objectToDate('10/03/2019');
     * // => {  year: 2019,
     *          month: 10,
     *          day: 3,
     *          hour: 0,
     *          minute: 0,
     *          second: 0,
     *          mlSecond: 0 }
     *
     */
    objectToDate(strTime){
        let date = new Date(Number(strTime) || strTime);
        return (date instanceof Date && !isNaN(date)) ? {
            year    :date.getFullYear(),
            month   :(date.getMonth() + 1),
            day     :date.getDate(),
            hour    :date.getHours(),
            minute  :date.getMinutes(),
            second  :date.getSeconds(),
            mlSecond:date.getMilliseconds()
        }: date.toString() }

    /**
     * @function validateYear
     *
     * ?> Can be current year or spend the year to validate
     * @param date {string | object} current date
     * @param yearCompare  {string | object} year to compare or current year
     * @param operator  {string} operator to compare
     * @returns {boolean}
     *
     * @since 0.1.11
     *
     * @example
     * validateYear('10/03/2019', 2019); //=> true
     *
     */
    validateYear(date, yearCompare = new Date().getFullYear(), operator = '='){
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
    }

    /*
    clearFolder(pathScript){
        let dirScript = fs.readdirSync(pathScript);
        (dirScript.length > 0) && dirScript.forEach(file=>fs.unlinkSync(pathScript+'/'+file));
        return fs.readdirSync(pathScript).length;
    }
    groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }
    endDate(startDate) {
        let dayDiffer = this.lessDate(startDate,this.customDate(false,false));
        return (dayDiffer > 15) ? this.customDate(startDate, false, 15) : this.customDate(startDate, false, dayDiffer);
    }
    saveProgressData(data,  multiTaxID = false, folders = false) {
        if(!data) return false;
        let fileName = '';
        let path     = this.path;
        if(multiTaxID){
            if(folders) path = this.path +  data[0].client_NPI+'/';
            fileName = path + 'dataToServer_' +  data[0].client_NPI + '_' + time.TIMESTAMP_X + '.json'
        }else{
            path     = this.path;
            fileName = path + 'dataToServer_' + time.TIMESTAMP_X + '.json';
        }
        this.validateDir(path);
        let backupData = JSON.stringify(data);
        this.logExecution('[fn] : saveProgressData() | Path BackUp: '+fileName.split('../')[1], c.COLOR.lime);
        fs.writeFileSync(fileName, backupData);
        return fileName;
    }
    deleteScriptClone(path){
        if(fs.existsSync(path))
            fs.unlinkSync(path);
    }
    log(msg, nameFile, color = c.COLOR.reset){
        assert.isOk(nameFile && msg, 'Error, log() - variables undefined.');

        let date = this.formatLogDate;
        let file = this.path + nameFile;

        let message = typeof msg === 'string'
            ? `${date} | (${typeof msg}) | ${msg.toString().trim().replace(/\s+/g, ' ')}`
            : `${date} | (${typeof msg}) | ${JSON.stringify(msg)}`;

        this.validateDir(this.path);

        fs.existsSync(file)
            ? fs.appendFileSync(file, "\r\n" + message)
            : fs.writeFileSync(file, message);

        typeof msg === 'string'
            ? console.log(color, message, c.COLOR.reset)
            : console.table(message);
    }
    logError(msg, color=c.COLOR.dkred) {
        this.log(msg, 'logError.log', color);
    }
    logExecution(msg, color=c.COLOR.green) {
        this.log(msg, 'logExecution.log', color);
    }
    getCookies(){
        return browser.getCookie().map(cookie=>{return cookie.name + '=' + cookie.value}).join(';');
    }
    waitForExistPDF(path, id=0, attempts = 10, sec = 2000) {
        let loop = 0;
        let fails = 0;
        while (loop < attempts) {
            browser.pause(sec);
            if (fs.existsSync(path)) {
                this.logExecution(id+' | '+path);
                loop = attempts;
            }else{
                fails++;
            }
            loop++;
        }
        if(fails >= attempts){
            this.logError('File not found! '+ path)
        }
    }
    csvToJson(csv){
        const [firstLine, ...lines] = csv.split(/\r|\n/g);
        return lines.map(line => firstLine.replace(/\s+/g,'_').split(',').reduce((curr, next, index) => ({
            ...curr,
            [next]: line.split('",')[index].replace(/\"/g,''),
        }), {}));
    };
    */
}


module.exports = utils;
