/**
 * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text
 * @module JS-PackTools | API Doc
 * @author Jesús A. Pérez S.
 * {@version 2.3.5 | last Update: Tue Aug 04 2020 14:09:50 GMT-0500 (GMT-05:00)
 * {@link https://github.com/jasp402/js-packtools}
 */
const constant 			   = require(__dirname+'/constants');
const assert 			   = require('assert');
const allEqual             = require('./lib/allEqual');
const capitalLetter        = require('./lib/capitalLetter');
const clearFolder          = require('./lib/clearFolder');
const createFolders        = require('./lib/createFolders');
const csvToJson            = require('./lib/csvToJson');
const customDate           = require('./lib/customDate');
const dayOfYear            = require('./lib/dayOfYear');
const deleteFile           = require('./lib/deleteFile');
const differenceDay        = require('./lib/differenceDay');
const everyOrNone          = require('./lib/everyOrNone');
const formatSeconds        = require('./lib/formatSeconds');
const generateRageDate     = require('./lib/generateRageDate');
const getFinalPath         = require('./lib/getFinalPath');
const groupBy              = require('./lib/groupBy');
const increaseDays         = require('./lib/increaseDays');
const is                   = require('./lib/is');
const jsonToCsv            = require('./lib/jsonToCsv');
const modEnd               = require('./lib/modEnd');
const modStart             = require('./lib/modStart');
const objectFilter         = require('./lib/objectFilter');
const objectToDate         = require('./lib/objectToDate');
const parseDate            = require('./lib/parseDate');
const renameFiles          = require('./lib/renameFiles');
const timeToDate           = require('./lib/timeToDate');
const validateDir          = require('./lib/validateDir');
const validateYear         = require('./lib/validateYear');
const writeLog             = require('./lib/writeLog');
const writeLogError        = require('./lib/writeLogError');
const _log                 = require('./lib/_log');
const sourceLib 		 = [
 {
  "name": "allEqual",
  "category": "Arrays/Object",
  "description": "This snippet checks whether all elements of the array are equal.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "arr",
    "type": "array",
    "description": "",
    "default": ""
   }
  ],
  "returns": "boolean"
 },
 {
  "name": "capitalLetter",
  "category": "String",
  "description": "capitalize the first letter of a sentence.",
  "version": "1.1.1",
  "example": "https://gist.githubusercontent.com/jasp402/baad045d810c9c22450ff33bec3e8217/raw/674c7135f93dec30cfbef482a6def3b62576a7cd/capitalLetter.js",
  "arParams": [
   {
    "name": "str",
    "type": "string",
    "description": "any word or sentence",
    "default": " "
   },
   {
    "name": "all",
    "type": "boolean",
    "description": "if true, capitalize all words.",
    "default": " false "
   }
  ],
  "returns": "string "
 },
 {
  "name": "clearFolders",
  "category": "Path/Files",
  "description": "This simply clear the content a folder.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "path",
    "type": "string",
    "description": "",
    "default": " "
   }
  ],
  "returns": "object "
 },
 {
  "name": "createFolders",
  "category": "Path/Files",
  "description": "This create a folder whit sub-folder of date by default if param `withDate` is True.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "path",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "withDate",
    "type": "boolean",
    "description": "",
    "default": ""
   }
  ],
  "returns": "boolean"
 },
 {
  "name": "csvToJson",
  "category": "convert",
  "description": "This read a document CSV and convert in a Object Javascript (JSON).",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "_csv",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "string"
 },
 {
  "name": "customDate",
  "category": "Time/Date",
  "description": "It's a date control. Without parameters give the current date, use the parameters to customize its functionality.",
  "version": "1.0.0",
  "example": "var jsPackTools = require(\"js-packtools\"); \\n let u = new jsPackTools(); \\n u.customDate('05/01/2019', 'yyyy-mm-dd', 15, false);  // => 2019-05-15",
  "arParams": [
   {
    "name": "_date",
    "type": "string",
    "description": "date or Object Date by Default is current date.",
    "default": " new Date() "
   },
   {
    "name": "_format",
    "type": "string",
    "description": "define the format that want to return.",
    "default": " mm/dd/yyyy "
   },
   {
    "name": "_addDay",
    "type": "int",
    "description": "count of days that add to date o current date",
    "default": " 0 "
   },
   {
    "name": "_type",
    "type": "boolean",
    "description": "method to return `string` or `Object Date`",
    "default": " false "
   }
  ],
  "returns": "string|Object "
 },
 {
  "name": "dayOfYear",
  "category": "Time/Date",
  "description": "This snippet gets the day of the year from a Date object.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "date",
    "type": "string/date",
    "description": "",
    "default": ""
   }
  ],
  "returns": "number "
 },
 {
  "name": "deleteFile",
  "category": "Path/Files",
  "description": "Check if the file exists before deleting",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "path",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "string "
 },
 {
  "name": "differenceDay",
  "category": "Time/Date",
  "description": "This simply clear the content a folder.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "_startDate",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "_endDate",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "_initDate",
    "type": "boolean",
    "description": "",
    "default": ""
   }
  ],
  "returns": "object "
 },
 {
  "name": "everyOrNone",
  "category": "Arrays/Object",
  "description": "This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. \\n You can omit the second argument fn if you want to use Boolean as a default value.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "arr",
    "type": "array",
    "description": "",
    "default": ""
   },
   {
    "name": "fn",
    "type": "function/boolean",
    "description": "",
    "default": ""
   }
  ],
  "returns": "boolean"
 },
 {
  "name": "formatSeconds",
  "category": "Time/Date",
  "description": "This only format a value float",
  "version": "1.0.1",
  "example": "@example",
  "arParams": [
   {
    "name": "time",
    "type": "number",
    "description": "",
    "default": ""
   }
  ],
  "returns": "string"
 },
 {
  "name": "generateRageDate",
  "category": "Time/Date",
  "description": "This function allows you to separate a given date in the number of days assigned to it.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "lastDate",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "splitDay",
    "type": "number",
    "description": "",
    "default": ""
   },
   {
    "name": "endDate",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "array"
 },
 {
  "name": "getFinalPath",
  "category": "Path/Files",
  "description": "Create structure of folders with parameters in constructor.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "",
    "type": "empty",
    "description": "",
    "default": ""
   }
  ],
  "returns": "string "
 },
 {
  "name": "groupBy",
  "category": "Arrays/Object",
  "description": "Sort the object by placing the value of the assigned property as key",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "obj",
    "type": "object",
    "description": "",
    "default": ""
   },
   {
    "name": "key",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "object"
 },
 {
  "name": "increaseDays",
  "category": "Time/Date",
  "description": "Add days to date, can defined a maxDate.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "startDate",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "days",
    "type": "number",
    "description": "",
    "default": ""
   },
   {
    "name": "maxDate",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "object "
 },
 {
  "name": "is",
  "category": "validate",
  "description": "Is a function for evaluate to type of element",
  "version": "1.0.1",
  "example": "const {is} = require(\"js-packtools\");\\nis('array', [1]); //true \\nis('object', [1]); //false",
  "arParams": [
   {
    "name": "type",
    "type": "string",
    "description": "Define type of element that want evaluate.",
    "default": " array/object/number/string/boolean "
   },
   {
    "name": "value",
    "type": "any",
    "description": "Element to evaluate.",
    "default": " "
   }
  ],
  "returns": "boolean "
 },
 {
  "name": "jsonToCsv",
  "category": "convert",
  "description": "Function for convert JSON to CSV",
  "version": "1.0.1",
  "example": "@example",
  "arParams": [
   {
    "name": "dataJson",
    "type": "array",
    "description": "Array with dataSet.",
    "default": " [] "
   },
   {
    "name": "dirPath",
    "type": "string",
    "description": "Dir path for out file csv.",
    "default": " "
   },
   {
    "name": "delimiter",
    "type": "string",
    "description": "Character delimiter .",
    "default": " , "
   }
  ],
  "returns": "string "
 },
 {
  "name": "modEnd",
  "category": "String",
  "description": "Using a string to create a new string with new size inverse to modStart.",
  "version": "1.0.1",
  "example": "@example",
  "arParams": [
   {
    "name": "str",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "size",
    "type": "number",
    "description": "",
    "default": ""
   },
   {
    "name": "_str",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "string"
 },
 {
  "name": "modStart",
  "category": "String",
  "description": "Using a string to create a new string with new size.",
  "version": "1.0.1",
  "example": "@example",
  "arParams": [
   {
    "name": "str",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "size",
    "type": "number",
    "description": "",
    "default": ""
   },
   {
    "name": "_str",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "string"
 },
 {
  "name": "objectFilter",
  "category": "Arrays/Object",
  "description": "This fragment allows you to filter an object and return the key and its corresponding value",
  "version": "1.1.0",
  "example": "@example",
  "arParams": [
   {
    "name": "dataSet",
    "type": "array/object",
    "description": "Object or array to object with dataSet",
    "default": "  "
   },
   {
    "name": "array",
    "type": "array",
    "description": "Array of the key names you want to get in the filter",
    "default": "  "
   }
  ],
  "returns": "array|object"
 },
 {
  "name": "objectToDate",
  "category": "Time/Date",
  "description": "Generate a object with date details.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "strTime",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "object"
 },
 {
  "name": "parseDate",
  "category": "Time/Date",
  "description": "Using a string and a format transform the string in date.",
  "version": "1.0.1",
  "example": "@example",
  "arParams": [
   {
    "name": "_sDate",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "_sFormat",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "_bType",
    "type": "boolean",
    "description": "",
    "default": ""
   }
  ],
  "returns": "object"
 },
 {
  "name": "renameFiles",
  "category": "Path/Files",
  "description": "This function rename a batch of files with current date or token unique.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "path",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "name",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "opts",
    "type": "number",
    "description": "Unique identifier for each file in the folder null = self increasing",
    "default": " date `or` token `or` null "
   },
   {
    "name": "rand",
    "type": "number",
    "description": "1 = Suffix or 2 = Prefix",
    "default": " 1 `or` 2 "
   }
  ],
  "returns": "void"
 },
 {
  "name": "timeToDate",
  "category": "Time/Date",
  "description": "return the time between two dates, or a date and now",
  "version": "1.0.1",
  "example": "@example",
  "arParams": [
   {
    "name": "_toDate",
    "type": "string/date",
    "description": "target date",
    "default": " new Date() "
   },
   {
    "name": "_sDate",
    "type": "string/date",
    "description": "start date (default: now)",
    "default": " new Date() "
   }
  ],
  "returns": "string"
 },
 {
  "name": "validateDir",
  "category": "Path/Files",
  "description": "Validate if there is a route. if not, create this route.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "path",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "boolean"
 },
 {
  "name": "validateYear",
  "category": "Time/Date",
  "description": "Can be current year or spend the year to validate",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "date",
    "type": "string/object",
    "description": "",
    "default": ""
   },
   {
    "name": "yearCompare",
    "type": "string/object",
    "description": "",
    "default": ""
   },
   {
    "name": "operator",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "boolean"
 },
 {
  "name": "writeLog",
  "category": "global",
  "description": "write file .log in folder default of class.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "msg",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "color",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "void"
 },
 {
  "name": "writeLogError",
  "category": "global",
  "description": "write file .log in folder default of class.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "title",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "msg",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "color",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "void"
 },
 {
  "name": "log",
  "category": "global",
  "description": "It integrates the functions registry of errors and registry of execution for the document of registry in his project.",
  "version": "1.0.0",
  "example": "@example",
  "arParams": [
   {
    "name": "_message",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "_fileName",
    "type": "string",
    "description": "",
    "default": ""
   },
   {
    "name": "_color",
    "type": "string",
    "description": "",
    "default": ""
   }
  ],
  "returns": "string "
 }
];
class parameters {
    constructor(config = {})
    {
        assert.ok(typeof config === 'object', constant.ERROR_CONSTRUCTOR);
        this.constant          = constant;
        this.folderName        = ("folderName" in config)           ? config.folderName                 : 'DATA';                 //=> data_audit, data_download, docs, pdfs, trash...
        this.folderWithDate    = ("folderWithDate" in config)       ? Boolean(config.folderWithDate)    : true;                   //=> true => /2019_01_01/
        this.folderFormatDate  = ("folderFormatDate" in config)     ? config.folderFormatDate           : 'yyyy~_~mm~_~dd';       //=> 'yyyy_mm_dd';
        this.nameWriteLog      = ("nameWriteLog" in config)         ? config.nameWriteLog + '.log'      : 'logExecution.log';
        this.nameWriteLogError = ("nameWriteLogError" in config)    ? config.nameWriteLogError + '.log' : 'logError.log';
        this.logFormatDate     = ("logFormatDate" in config)        ? config.logFormatDate              : 'yyyy-mm-dd ~h:m:i';    //=> yyyy-mm-dd | hh:mm:sss
    }
}
class jsPackTools extends parameters { 
get allEqual() { return allEqual.bind(this) }
get capitalLetter() { return capitalLetter.bind(this) }
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
get is() { return is.bind(this) }
get jsonToCsv() { return jsonToCsv.bind(this) }
get modEnd() { return modEnd.bind(this) }
get modStart() { return modStart.bind(this) }
get objectFilter() { return objectFilter.bind(this) }
get objectToDate() { return objectToDate.bind(this) }
get parseDate() { return parseDate.bind(this) }
get renameFiles() { return renameFiles.bind(this) }
get timeToDate() { return timeToDate.bind(this) }
get validateDir() { return validateDir.bind(this) }
get validateYear() { return validateYear.bind(this) }
get writeLog() { return writeLog.bind(this) }
get writeLogError() { return writeLogError.bind(this) }
get _log() { return _log.bind(this) }
 info() {
    let arMethods = sourceLib;
    return new Proxy(arMethods, {
        get: function (obj, prop) {
            let result, categories = {};
            if (prop in obj) {
                return obj[prop]
            }
            if (prop === 'number') {
                return obj.length
            }
            for (let product of obj) {
                if (product.name === prop) {
                    result = product
                }
                if (categories[product.category]) {
                    categories[product.category].push(product)
                } else {
                    categories[product.category] = [product]
                }
            }
            if (result) {
                return result
            }
            if (prop === 'names') {
                return Object.keys(obj).map(items => obj[items].name).filter(Boolean)
            }
            if (prop === 'tests') {
                return Object.keys(obj).map(items => obj[items].test).filter(Boolean)
            }
            if (prop in categories) {
                return categories[prop]
            }
            if (prop === 'categories') {
                return Object.keys(categories)
            }
            return undefined;
        }
    });
}}
module.exports = (params) => new jsPackTools(params);
