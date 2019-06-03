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
    constructor(config){
        if(config) assert.ok(typeof config === 'object', constant.ERROR_CONSTRUCTOR);
        this.c                = constant;

        //=> data_audit, data_download, docs, pdfs, trash...
        this.folderName       = config
            ? (config.folderName !== undefined)
                ? config.folderName
                : 'DATA'
            : 'DATA';

        //=> true => /2019_01_01/
        this.folderAutoDate   = config
            ? (config.folderAutoDate !== undefined)
                ? config.folderAutoDate
                : true
            : true;

        //=> 'yyyy_mm_dd';
        this.folderFromatDate = this.customDate('', config
            ? (config.folderFormatDate !== undefined)
                ?  config.folderFormatDate
                : 'yyyy~_~mm~_~dd'
            : 'yyyy~_~mm~_~dd', 0, false);

        //=> yyyy-mm-dd | hh:mm:sss
        this.logFormatDate    =  config ? (config.folderFormatDate !== undefined) ?  config.folderFormatDate : 'yyyy-mm-dd ~h:m:i' : 'yyyy-mm-dd ~h:m:i';

        this.finalPath        = this.folderName+'/'+this.folderFromatDate
    }
}

fs.readdirSync(__dirname+'/lib').forEach(modules => {
    let module = modules.split('.').shift();
    jsPackTools.prototype[module] =require(`${__dirname}/lib/${module}`);
});

module.exports = jsPackTools;