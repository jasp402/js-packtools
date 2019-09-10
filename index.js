/**
 * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text
 * @module JS-PackTools | API Doc
 * @author Jesús A. Pérez S.
 * {@link https://github.com/jasp402/js-packtools}
 */
const constant = require(__dirname+'/constants');
const _        = require('lodash');
const fs       = require('fs');
const assert   = require('assert');


class jsPackTools {
    constructor(config={}){
        assert.ok(typeof config === 'object', constant.ERROR_CONSTRUCTOR);
        this.c                  = constant;
        this.folderName         = ("folderName"        in config) ? config.folderName               : 'DATA';       //=> data_audit, data_download, docs, pdfs, trash...
        this.logFormatDate      = ("logFormatDate"     in config) ? config.logFormatDate            : 'yyyy-mm-dd ~h:m:i'; //=> yyyy-mm-dd | hh:mm:sss
        this.folderAutoDate     = ("folderAutoDate"    in config) ? config.folderAutoDate           : true; //=> true => /2019_01_01/
        this.nameWriteLog       = ("nameWriteLog"      in config) ? config.nameWriteLog+'.log'      : 'logExecution.log';
        this.nameWriteLogError  = ("nameWriteLogError" in config) ? config.nameWriteLogError+'.log' : 'logError.log';
        this.folderFromatDate   = ("folderFromatDate"  in config) ? this.customDate(null,config.folderFormatDate, 0, false) : this.customDate(null,'yyyy~_~mm~_~dd', 0, false); //=> 'yyyy_mm_dd';
        this.finalPath          = this.folderName+'/'+this.folderFromatDate
    }
}

fs.readdirSync(__dirname+'/lib').forEach(modules => {
    let module = modules.split('.').shift();
    jsPackTools.prototype[module] =require(`${__dirname}/lib/${module}`);
});

module.exports = jsPackTools;