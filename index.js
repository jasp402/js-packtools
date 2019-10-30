/**
 * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text
 * @module JS-PackTools | API Doc
 * @author Jesús A. Pérez S.
 * {@link https://github.com/jasp402/js-packtools}
 */

//-- Static modules requires.
const constant         = require(__dirname+'/constants');
const assert           = require('assert');

//--- Dynamic modules requieres.
const clearFolder = require('./lib/clearFolder');
const createFolders = require('./lib/createFolders');
const csvToJson = require('./lib/csvToJson');
const customDate = require('./lib/customDate');
const deleteFile = require('./lib/deleteFile');
const differenceDay = require('./lib/differenceDay');
const formatSeconds = require('./lib/formatSeconds');
const generateRageDate = require('./lib/generateRageDate');
const getCookies = require('./lib/getCookies');
const getFinalPath = require('./lib/getFinalPath');
const groupBy = require('./lib/groupBy');
const increaseDays = require('./lib/increaseDays');
const objectToDate = require('./lib/objectToDate');
const parseDate = require('./lib/parseDate');
const saveProgressData = require('./lib/saveProgressData');
const validateDir = require('./lib/validateDir');
const validateYear = require('./lib/validateYear');
const waitForExistPDF = require('./lib/waitForExistPDF');
const writeLog = require('./lib/writeLog');
const writeLogError = require('./lib/writeLogError');
const _log = require('./lib/_log');

class parameters {
    constructor(config={}){
        assert.ok(typeof config === 'object', constant.ERROR_CONSTRUCTOR);
        this.constant           = constant;
        this.folderName         = ("folderName"        in config) ? config.folderName               : 'DATA';               //=> data_audit, data_download, docs, pdfs, trash...
        this.folderWithDate     = ("folderAutoDate"    in config) ? config.folderWithDate           : true;                 //=> true => /2019_01_01/
        this.folderFormatDate   = ("folderFormatDate"  in config) ? config.folderFormatDate         : 'yyyy~_~mm~_~dd';     //=> 'yyyy_mm_dd';
        this.nameWriteLog       = ("nameWriteLog"      in config) ? config.nameWriteLog+'.log'      : 'logExecution.log';
        this.nameWriteLogError  = ("nameWriteLogError" in config) ? config.nameWriteLogError+'.log' : 'logError.log';
        this.logFormatDate      = ("logFormatDate"     in config) ? config.logFormatDate            : 'yyyy-mm-dd ~h:m:i';  //=> yyyy-mm-dd | hh:mm:sss
    }
}
class jsPackTools extends parameters {
    get clearFolder() { return clearFolder.bind(this) }
    get createFolders() { return createFolders.bind(this) }
    get csvToJson() { return csvToJson.bind(this) }
    get customDate() { return customDate.bind(this) }
    get deleteFile() { return deleteFile.bind(this) }
    get differenceDay() { return differenceDay.bind(this) }
    get formatSeconds() { return formatSeconds.bind(this) }
    get generateRageDate() { return generateRageDate.bind(this) }
    get getCookies() { return getCookies.bind(this) }
    get getFinalPath() { return getFinalPath.bind(this) }
    get groupBy() { return groupBy.bind(this) }
    get increaseDays() { return increaseDays.bind(this) }
    get objectToDate() { return objectToDate.bind(this) }
    get parseDate() { return parseDate.bind(this) }
    get saveProgressData() { return saveProgressData.bind(this) }
    get validateDir() { return validateDir.bind(this) }
    get validateYear() { return validateYear.bind(this) }
    get waitForExistPDF() { return waitForExistPDF.bind(this) }
    get writeLog() { return writeLog.bind(this) }
    get writeLogError() { return writeLogError.bind(this) }
    get _log() { return _log.bind(this) }
}

module.exports = jsPackTools;