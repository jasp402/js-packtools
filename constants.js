'use strict';
module.exports = Object.freeze({
    //global
    GENERAL_PATH_FULL           : (name,date) => `${__dirname}/${name}/${date}/`,
    GENERAL_PATH                : name => `${__dirname}/${name}/`,

    //Compiler
    TITLE_CLASS                 :`class jsPackTools extends parameters { \n`,
    HEADER_CLASS                : (version, date)=>'/**\n' +
        ' * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text\n' +
        ' * @module JS-PackTools | API Doc\n' +
        ' * @author Jesús A. Pérez S.\n' +
        ' * {@version '+version+' | last Update: '+date+' \n' +
        ' * {@link https://github.com/jasp402/js-packtools}\n' +
        ' */\n' +
        'const constant \t\t\t = require(__dirname+\'/constants\');\n' +
        'const assert \t\t\t = require(\'assert\');\n',

    PARAMS_CLASS                : 'class parameters {\n' +
        '    constructor(config={}){\n' +
        '        assert.ok(typeof config === \'object\', constant.ERROR_CONSTRUCTOR);\n' +
        '        this.constant           = constant;\n' +
        '        this.folderName         = ("folderName"        in config) ? config.folderName                  : \'DATA\';                 //=> data_audit, data_download, docs, pdfs, trash...\n' +
        '        this.folderWithDate     = ("folderWithDate"    in config) ? Boolean(config.folderWithDate)     : true;                     //=> true => /2019_01_01/\n' +
        '        this.folderFormatDate   = ("folderFormatDate"  in config) ? config.folderFormatDate            : \'yyyy~_~mm~_~dd\';       //=> \'yyyy_mm_dd\';\n' +
        '        this.nameWriteLog       = ("nameWriteLog"      in config) ? config.nameWriteLog+\'.log\'       : \'logExecution.log\';\n' +
        '        this.nameWriteLogError  = ("nameWriteLogError" in config) ? config.nameWriteLogError+\'.log\'  : \'logError.log\';\n' +
        '        this.logFormatDate      = ("logFormatDate"     in config) ? config.logFormatDate               : \'yyyy-mm-dd ~h:m:i\';    //=> yyyy-mm-dd | hh:mm:sss\n' +
        '    }\n' +
        '}\n',
    PROXY_CLASS                 :'info() {\n' +
    '        let arMethods = sourceLib;\n' +
    '        return new Proxy(arMethods,{\n' +
    '                get: function(obj, prop) {\n' +
    '                    let result, categories = {};\n' +
    '                    if (prop in obj) { return obj[prop] }\n' +
    '                    if (prop === \'number\') { return obj.length }\n' +
    '                    for (let product of obj) {\n' +
    '                        if (product.name === prop) { result = product }\n' +
    '                        if (categories[product.category]) { categories[product.category].push(product) } \n' +
    '                        else { categories[product.category] = [product]}\n' +
    '                    }\n' +
    '                    if (result) { return result }\n' +
    '                    if (prop === \'names\') { return Object.keys(obj).map(items=>obj[items].name).filter(Boolean) }\n' +
    '                    if (prop === \'tests\') { return Object.keys(obj).map(items=>obj[items].test).filter(Boolean) }\n' +
    '                    if (prop in categories) { return categories[prop] }\n' +
    '                    if (prop === \'categories\') { return Object.keys(categories) }\n' +
    '                    return undefined;\n' +
    '                }\n' +
    '            });\n' +
    '    }\n',
    //Errors
    ERROR_CONSTRUCTOR           : `Unexpected error, the constructor expected an object as a parameter`,
    ERROR_INVALID_DATE          : date => `Error with Date, this invalid date or unknown format. ${date}`,


    //Utility
        COLOR: {
            black: '\x1b[0;30m',
            dkgray: '\x1b[1;30m',
            brick: '\x1b[0;31m',
            red: '\x1b[1;31m',
            dkred: '\x1b[31m',
            green: '\x1b[0;32m',
            lime: '\x1b[1;32m',
            brown: '\x1b[0;33m',
            yellow: '\x1b[1;33m',
            navy: '\x1b[0;34m',
            blue: '\x1b[1;34m',
            violet: '\x1b[0;35m',
            magenta: '\x1b[1;35m',
            teal: '\x1b[0;36m',
            cyan: '\x1b[1;36m',
            ltgray: '\x1b[0;37m',
            white: '\x1b[1;37m',
            reset: '\x1b[0m'
        }
});