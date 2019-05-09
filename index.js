/**
 * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text
 * @module JS-PackTools | API Doc
 * @version 0.1.9
 */
const constant = require(__dirname+'/constants');
const _        = require('lodash');
const fs       = require('fs');
const assert   = require('assert');


/** utils*/
class jsPackTools {
    constructor(config){
        if(config) assert.ok(typeof config === 'object', constant.ERROR_CONSTRUCTOR);

        this.c                = constant;
        this.fs               = fs;
        this.folderName       = config ? config.folderName : 'DATA';      //=> data_audit, data_download, docs, pdfs, trash...
        this.folderAutoDate   = config ? config.folderAutoDate : true;        //=> true => /2019_01_01/
        this.folderFromatDate = this.customDate('', config ? config.folderFormatDate : 'yyyy~_~mm~_~dd', 0, false); //=> 'yyyy_mm_dd';
        this.logFormatDate    = this.customDate('', config ? config.logFormatDate : 'yyyy-mm-dd ~h:m:i', 0, false); //=> yyyy-mm-dd | hh:mm:sss
        this.finalPath        = this.folderName+'/'+this.folderFromatDate

    }
}

jsPackTools.prototype.log               = require(__dirname+'/lib/log');
jsPackTools.prototype.logError          = require(__dirname+'/lib/logError');
jsPackTools.prototype.logExecution      = require(__dirname+'/lib/logExecution');
jsPackTools.prototype.customDate        = require(__dirname+'/lib/customDate');
jsPackTools.prototype.differenceDay     = require(__dirname+'/lib/differenceDay');
jsPackTools.prototype.objectToDate      = require(__dirname+'/lib/objectToDate');
jsPackTools.prototype.validateYear      = require(__dirname+'/lib/validateYear');
jsPackTools.prototype.formatSeconds     = require(__dirname+'/lib/formatSeconds');
jsPackTools.prototype.createFolders     = require(__dirname+'/lib/createFolders');
jsPackTools.prototype.clearFolder       = require(__dirname+'/lib/clearFolder');
jsPackTools.prototype.validateDir       = require(__dirname+'/lib/validateDir');
jsPackTools.prototype.generateRageDate  = require(__dirname+'/lib/generateRageDate');
jsPackTools.prototype.groupBy           = require(__dirname+'/lib/groupBy');
jsPackTools.prototype.increaseDays      = require(__dirname+'/lib/increaseDays');
jsPackTools.prototype.saveProgressData  = require(__dirname+'/lib/saveProgressData');
jsPackTools.prototype.deleteScriptClone = require(__dirname+'/lib/deleteScriptClone');
jsPackTools.prototype.getCookies        = require(__dirname+'/lib/getCookies');
jsPackTools.prototype.waitForExistPDF   = require(__dirname+'/lib/waitForExistPDF');
jsPackTools.prototype.csvToJson         = require(__dirname+'/lib/csvToJson');

module.exports = jsPackTools;

let u = new jsPackTools();



console.log(u.customDate('01/05/2011'))
u.logError('test');