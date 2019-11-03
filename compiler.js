/**
 * @function compiler - It's a utilitary for create dynamically structure of class for JS-PackTools.
 * @returns {void}
 * @since 1.0.0
 */
var pjson  = require('./package.json');
const fs   = require('fs');
let header = (version, date)=>'/**\n' +
    ' * JS-PackTools. Is a little toolBox for developer specifically with webScraping and format date and text\n' +
    ' * @module JS-PackTools | API Doc\n' +
    ' * @author Jesús A. Pérez S.\n' +
    ' * {@version '+version+' | last Update: '+date+' \n' +
    ' * {@link https://github.com/jasp402/js-packtools}\n' +
    ' */\n' +
    'const constant \t\t\t = require(__dirname+\'/constants\');\n' +
    'const assert \t\t\t = require(\'assert\');\n';
let params     = 'class parameters {\n' +
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
    '}\n';
let classBuild = `class jsPackTools extends parameters { \n`;
let importMod  = '';
let arMethods  = [];

let arTest = {};
fs.readdirSync(__dirname+'/test').forEach(modules => {
    let module   = modules.split('.').shift().split('_')[1];
    arTest[module] = './test/'+modules;
});

//console.log(arTest);

fs.readdirSync(__dirname+'/lib').forEach(modules => {
    let module   = modules.split('.').shift();
    let space    = module.length <= 4 ? "\t\t\t\t" : module.length <= 8 ? "\t\t\t" : module.length < 13 ? "\t\t" : "\t";
    importMod   += `const ${module} ${space} = require('./lib/${module}');\n`;
    classBuild  += `get ${module}() { return ${module}.bind(this) }\n` ;

    const data = fs.readFileSync(`./lib/${module}.js`, 'UTF-8');
    arMethods.push({
     name:        data.match(/@function.*/g) ? data.match(/@function.*/g)[0].replace(/@function |\n/g,''):null,
     category:    data.match(/@augments.*/g) ? data.match(/@augments.*/g)[0].replace('@augments ',''):null,
     description: data.match(/@description.*/g) ? data.match(/@description.*/g)[0].replace('@description ',''):null,
     version:     data.match(/@version.*/g) ? data.match(/@version.*/g)[0].replace('@version ',''):null,
     test:        arTest[module.replace('_','')]||null//arTest.filter(value=>!!value[module])[0]
    });

});
classBuild += 'info() {\n' +
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
    '    }\n';
classBuild += '}\n';



//console.log(header(pjson.version, new Date()));
//console.log(importMod);
//console.log('const sourceLib \t\t = '+JSON.stringify(arMethods)+'\n');
//console.log(params);
//console.log(classBuild);
//console.log('module.exports = jsPackTools;\n');

let index = '';
index += header(pjson.version, new Date());
index += importMod;
index += 'const sourceLib \t\t = '+JSON.stringify(arMethods)+';\n';
index += params;
index += classBuild;
index += 'module.exports = jsPackTools;\n';

fs.writeFile("./index.js", index, function(err) {
    if(err) return console.log(err);
    console.log("Generate index.js!");
});