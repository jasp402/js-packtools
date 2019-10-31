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
const everyOrNone = require('./lib/everyOrNone');
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
    get everyOrNone() { return everyOrNone.bind(this) }
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

    info() {
        let arMethods = [ { name: 'clearFolders',
            type: '{file}',
            description: 'This simply clear the content a folder.',
            version: '0.1.13' },
            { name:
                    'createFolders - This create a folder whit sub-folder of date by default.',
                type: null,
                description: null,
                version: '0.1.13' },
            { name:
                    'csvToJson - This read a document CSV and convert in a Object Javascript (JSON)',
                type: null,
                description: null,
                version: '0.1.13' },
            { name:
                    'customDate - It\'s a date control. Without parameters give the current date, use the parameters to customize its functionality.',
                type: null,
                description: null,
                version: '0.1.3' },
            { name: 'deleteFile - Check if the file exists before deleting',
                type: null,
                description: null,
                version: '0.1.19' },
            { name:
                    'differenceDay - It\'s Return the number of days between 2 dates.',
                type: null,
                description: null,
                version: '0.1.3' },
            { name:
                    'everyOrNone (all) - This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise.',
                type: null,
                description: null,
                version: '1.0.0' },
            { name: 'formatSeconds - This only format a value float',
                type: null,
                description: null,
                version: '0.1.20' },
            { name: null, type: null, description: null, version: null },
            { name: null, type: null, description: null, version: null },
            { name:
                    'getFinalPath - Create structure of folders with parameters in constructor.',
                type: null,
                description: null,
                version: '1.0.0' },
            { name: null, type: null, description: null, version: null },
            { name: null, type: null, description: null, version: null },
            { name: 'objectToDate - Generate a object with date details',
                type: null,
                description: null,
                version: '0.1.11' },
            { name:
                    'customDate - Using a sting and a format transform the string in date.',
                type: null,
                description: null,
                version: '0.7.4' },
            { name: null, type: null, description: null, version: null },
            { name: null, type: null, description: null, version: null },
            { name:
                    'validateYear - Can be current year or spend the year to validate',
                type: null,
                description: null,
                version: '0.1.11' },
            { name: null, type: null, description: null, version: null },
            { name: 'writeLog - write file .log in folder default of class.',
                type: null,
                description: null,
                version: '1.0.0' },
            { name: null, type: null, description: null, version: null },
            { name:
                    'log - It integrates the functions registry of errors and registry of execution for the document of registry in his project.',
                type: null,
                description: null,
                version: '0.1.13' } ];
        return new Proxy(arMethods,
            {
                get: function(obj, prop) {
                    // The default behavior to return the value; prop is usually an integer
                    if (prop in obj) {
                        return obj[prop];
                    }

                    // Get the number of products; an alias of products.length
                    if (prop === 'number') {
                        return obj.length;
                    }

                    let result, types = {};

                    for (let product of obj) {
                        if (product.name === prop) {
                            result = product;
                        }
                        if (types[product.type]) {
                            types[product.type].push(product);
                        } else {
                            types[product.type] = [product];
                        }
                    }

                    // Get a product by name
                    if (result) {
                        return result;
                    }

                    if (prop === 'names') {
                        return Object.keys(obj).map(items=>obj[items].name).filter(Boolean);
                    }

                    // Get products by type
                    if (prop in types) {
                        return types[prop];
                    }

                    // Get product types
                    if (prop === 'types') {
                        return Object.keys(types);
                    }

                    return undefined;
                }
            });
    }



}

// let u  = new jsPackTools().info();

// console.log(u.names); // { name: 'Firefox', type: 'browser' }
//console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
//console.log(products['Chrome']); // undefined
//console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
//console.log(products.types); // ['browser', 'mailer']
//console.log(products.number); // 3


module.exports = jsPackTools;