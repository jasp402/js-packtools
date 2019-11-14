/**
 * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text
 * @module JS-PackTools | API Doc
 * @author Jesús A. Pérez S.
 * {@version 1.6.2 | last Update: Wed Nov 13 2019 23:45:53 GMT-0500 (GMT-05:00) 
 * {@link https://github.com/jasp402/js-packtools}
 */
const constant 			 = require(__dirname+'/constants');
const assert 			 = require('assert');
const allEqual 			 = require('./lib/allEqual');
const clearFolder 		 = require('./lib/clearFolder');
const createFolders 	 = require('./lib/createFolders');
const csvToJson 		 = require('./lib/csvToJson');
const customDate 		 = require('./lib/customDate');
const dayOfYear 		 = require('./lib/dayOfYear');
const deleteFile 		 = require('./lib/deleteFile');
const differenceDay 	 = require('./lib/differenceDay');
const everyOrNone 		 = require('./lib/everyOrNone');
const formatSeconds 	 = require('./lib/formatSeconds');
const generateRageDate 	 = require('./lib/generateRageDate');
const getFinalPath 		 = require('./lib/getFinalPath');
const groupBy 			 = require('./lib/groupBy');
const increaseDays 		 = require('./lib/increaseDays');
const objectToDate 		 = require('./lib/objectToDate');
const parseDate 		 = require('./lib/parseDate');
const renameFiles 		 = require('./lib/renameFiles');
const validateDir 		 = require('./lib/validateDir');
const validateYear 		 = require('./lib/validateYear');
const writeLog 			 = require('./lib/writeLog');
const writeLogError 	 = require('./lib/writeLogError');
const _log 				 = require('./lib/_log');
const sourceLib 		 = [{"name":"allEqual","category":"Arrays/Object","description":"This snippet checks whether all elements of the array are equal.","version":"1.0.0","test":"./test/test_allEqual.js"},{"name":"clearFolders","category":"Path/Files","description":"This simply clear the content a folder.","version":"1.0.0","test":"./test/test_clearFolder.js"},{"name":"createFolders","category":"Path/Files","description":"This create a folder whit sub-folder of date by default if param `withDate` is True.","version":"1.0.0","test":"./test/test_createFolders.js"},{"name":"csvToJson","category":"convert","description":"This read a document CSV and convert in a Object Javascript (JSON).","version":"1.0.0","test":"./test/test_csvToJson.js"},{"name":"customDate","category":"Time/Date","description":"It's a date control. Without parameters give the current date, use the parameters to customize its functionality.","version":"1.0.0","test":"./test/test_customDate.js"},{"name":"dayOfYear","category":"Time/Date","description":"This snippet gets the day of the year from a Date object.","version":"1.0.0","test":"./test/test_dayOfYear.js"},{"name":"deleteFile","category":"Path/Files","description":"Check if the file exists before deleting","version":"1.0.0","test":"./test/test_deleteFile.js"},{"name":"differenceDay","category":"Time/Date","description":"This simply clear the content a folder.","version":"1.0.0","test":"./test/test_differenceDay.js"},{"name":"everyOrNone","category":"Arrays/Object","description":"This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. \\n You can omit the second argument fn if you want to use Boolean as a default value.","version":"1.0.0","test":"./test/test_everyOrNone.js"},{"name":"formatSeconds","category":"Time/Date","description":"This only format a value float","version":"1.0.0","test":"./test/test_formatSeconds.js"},{"name":"generateRageDate","category":"Time/Date","description":"This function allows you to separate a given date in the number of days assigned to it.","version":"1.0.0","test":"./test/test_generateRageDate.js"},{"name":"getFinalPath","category":"Path/Files","description":"Create structure of folders with parameters in constructor.","version":"1.0.0","test":"./test/test_getFinalPath.js"},{"name":"groupBy","category":"Arrays/Object","description":"Sort the object by placing the value of the assigned property as key","version":"1.0.0","test":"./test/test_groupBy.js"},{"name":"increaseDays","category":"Time/Date","description":"Add days to date, can defined a maxDate.","version":"1.0.0","test":"./test/test_increaseDays.js"},{"name":"objectToDate","category":"Time/Date","description":"Generate a object with date details.","version":"1.0.0","test":"./test/test_objectToDate.js"},{"name":"parseDate","category":"Time/Date","description":"Using a string and a format transform the string in date.","version":"1.0.0","test":"./test/test_parseDate.js"},{"name":"renameFiles","category":"Path/Files","description":"This function rename a batch of files with current date or token unique.","version":"1.0.0","test":"./test/test_renameFiles.js"},{"name":"validateDir","category":"Path/Files","description":"Validate if there is a route. if not, create this route.","version":"1.0.0","test":"./test/test_validateDir.js"},{"name":"validateYear","category":"Time/Date","description":"Can be current year or spend the year to validate","version":"1.0.0","test":"./test/test_validateYear.js"},{"name":"writeLog","category":"global","description":"write file .log in folder default of class.","version":"1.0.0","test":"./test/test_writeLog.js"},{"name":"writeLogError","category":"global","description":"write file .log in folder default of class.","version":"1.0.0","test":"./test/test_writeLogError.js"},{"name":"log","category":"global","description":"It integrates the functions registry of errors and registry of execution for the document of registry in his project.","version":"1.0.0","test":"./test/test_log.js"}];
class parameters {
    constructor(config={}){
        assert.ok(typeof config === 'object', constant.ERROR_CONSTRUCTOR);
        this.constant           = constant;
        this.folderName         = ("folderName"        in config) ? config.folderName                  : 'DATA';                 //=> data_audit, data_download, docs, pdfs, trash...
        this.folderWithDate     = ("folderWithDate"    in config) ? Boolean(config.folderWithDate)     : true;                     //=> true => /2019_01_01/
        this.folderFormatDate   = ("folderFormatDate"  in config) ? config.folderFormatDate            : 'yyyy~_~mm~_~dd';       //=> 'yyyy_mm_dd';
        this.nameWriteLog       = ("nameWriteLog"      in config) ? config.nameWriteLog+'.log'       : 'logExecution.log';
        this.nameWriteLogError  = ("nameWriteLogError" in config) ? config.nameWriteLogError+'.log'  : 'logError.log';
        this.logFormatDate      = ("logFormatDate"     in config) ? config.logFormatDate               : 'yyyy-mm-dd ~h:m:i';    //=> yyyy-mm-dd | hh:mm:sss
    }
}
class jsPackTools extends parameters { 
get allEqual() { return allEqual.bind(this) }
get clearFolder() { return clearFolder.bind(this) }
get createFolders() { return createFolders.bind(this) }
get csvToJson() { return csvToJson.bind(this) }
get customDate() { return customDate.bind(this) }
get dayOfYear() { return dayOfYear.bind(this) }
get deleteFile() { return deleteFile.bind(this) }
get differenceDay() { return differenceDay.bind(this) }
get everyOrNone() { return everyOrNone.bind(this) }
get formatSeconds() { return formatSeconds.bind(this) }
get generateRageDate() { return generateRageDate.bind(this) }
get getFinalPath() { return getFinalPath.bind(this) }
get groupBy() { return groupBy.bind(this) }
get increaseDays() { return increaseDays.bind(this) }
get objectToDate() { return objectToDate.bind(this) }
get parseDate() { return parseDate.bind(this) }
get renameFiles() { return renameFiles.bind(this) }
get validateDir() { return validateDir.bind(this) }
get validateYear() { return validateYear.bind(this) }
get writeLog() { return writeLog.bind(this) }
get writeLogError() { return writeLogError.bind(this) }
get _log() { return _log.bind(this) }
info() {
        let arMethods = sourceLib;
        return new Proxy(arMethods,{
                get: function(obj, prop) {
                    let result, categories = {};
                    if (prop in obj) { return obj[prop] }
                    if (prop === 'number') { return obj.length }
                    for (let product of obj) {
                        if (product.name === prop) { result = product }
                        if (categories[product.category]) { categories[product.category].push(product) } 
                        else { categories[product.category] = [product]}
                    }
                    if (result) { return result }
                    if (prop === 'names') { return Object.keys(obj).map(items=>obj[items].name).filter(Boolean) }
                    if (prop === 'tests') { return Object.keys(obj).map(items=>obj[items].test).filter(Boolean) }
                    if (prop in categories) { return categories[prop] }
                    if (prop === 'categories') { return Object.keys(categories) }
                    return undefined;
                }
            });
    }
}
module.exports = jsPackTools;
