const pjson = require('../package.json');
const docs = require('./template/documentation');
const fs    = require('fs');

const PATH_TEST  = `${__dirname}/../test`;
const PATH_LIB   = `${__dirname}/../lib`;
const PATH_DOC   = `${__dirname}/../docs`;
const PATH_INDEX = `${__dirname}/../index.js`;

let constant = {
    HEADER_API_DOC   : fs.readFileSync(`${PATH_DOC}/components/_header_api_doc.md`, 'utf-8'),
    CLASS_TITLE      : `class jsPackTools extends parameters { \n`,
    CLASS_CONSTANT   : 'const constant \t\t\t   = require(__dirname+\'/constants\');\n',
    CLASS_ASSERT     : 'const assert \t\t\t   = require(\'assert\');\n',
    CLASS_FUNCTIONS  : (moduleSpace, module) => `const ${moduleSpace} = require('./lib/${module}');\n`,
    CLASS_GET_MODULE : module => `get ${module}() { return ${module}.bind(this) }\n`,
    CLASS_INFO_PARAMS: (data, type) => data.match(constant.REGX(type)) ? data.match(constant.REGX(type)) : ['empty'],
    CLASS_INFO_DATA  : (data, type) => data.match(constant.REGX(type)).length ? data.match(constant.REGX(type))[0].replace(`@${type} `, '') : null,
    CLASS_INFO_RETURN: (data, type) => data.match(constant.REGX(type)).length ? data.match(constant.REGX(type))[0].split('-')[0].replace(`@${type} `, '').replace(/\{|\}/g, '') : null,
    CLASS_SOURCE_LIB : arMethods => 'const sourceLib \t\t = ' + JSON.stringify(arMethods.map(data => delete data['params'] && data), null, ' ') + ';\n',
    HEADER_CLASS     : (version, date) => fs.readFileSync(`${__dirname}/template/header.js`, 'utf-8').replace('#version#', version).replace('#date#', date),
    PARAMS_CLASS     : fs.readFileSync(`${__dirname}/template/constructor.js`, 'utf-8'),
    PROXY_CLASS      : fs.readFileSync(`${__dirname}/template/fn_proxy.js`, 'utf-8').replace('function', ''),
    REGX             : type => new RegExp(`@${type}.*`, 'g'),
    EMOJI_LIST       : {
        'Arrays/Object': '🧾',
        'String'       : '✍',
        'Path/Files'   : '📁',
        'convert'      : '↔',
        'Time/Date'    : '⏰',
        'global'       : '🌐',
        'validate'     : '✔'
    }
};

function extractParams(param) {
    param           = param.replace('@param ', '');
    const typeParam = param.match(/\{(.*)\}/g) ? param.match(/\{(.*)\}/g)[0] : param;
    return {
        'name'       : param.split('-')[0].replace(typeParam, '').trim(),
        'type'       : typeParam.replace(/\{|\}/g, '').replace(/\|/g, '/').replace(/ /g, ''),
        'description': param.indexOf("~") > -1 ? param.split('~').pop().trim() : '',
        'default'    : param.indexOf("~") > -1 ? param.split('-').pop().split('~')[0] : ''
    };
}

function _renderClassMain() {
    console.log('Processing _renderClassMain()');
    const modEnd  = require('../lib/modEnd');

    let classBuild = '';
    let importMod  = '';
    let index      = '';
    let arMethods  = [];

    classBuild     = constant.CLASS_TITLE;
    importMod     += constant.CLASS_CONSTANT;
    importMod     += constant.CLASS_ASSERT;

    fs.readdirSync(PATH_LIB).forEach(modules => {
        let module  = modules.split('.').shift();
        let space   = modEnd(module, 20);
        const data  = fs.readFileSync(`${PATH_LIB}/${module}.js`, 'utf-8');
        importMod  += constant.CLASS_FUNCTIONS(space, module);
        classBuild += constant.CLASS_GET_MODULE(module);

        arMethods.push({
            name       : constant.CLASS_INFO_DATA(data, 'function'),
            category   : constant.CLASS_INFO_DATA(data, 'augments'),
            description: constant.CLASS_INFO_DATA(data, 'description'),
            version    : constant.CLASS_INFO_DATA(data, 'version'),
            example    : constant.CLASS_INFO_DATA(data, 'example'),
            arParams   : constant.CLASS_INFO_PARAMS(data, 'param').map(extractParams),
            returns    : constant.CLASS_INFO_RETURN(data, 'returns')
        });
    });

    // --- CREATE DOCUMENTATION ---
    arMethods.forEach(doc=>{
        fs.writeFile(`${PATH_DOC}/en/api/v1/${doc.name}.md`, docs(doc, constant), function(err) {
            if(err) return console.log(err);
        });
    });

    classBuild += constant.PROXY_CLASS;
    classBuild += '}\n';

    index += constant.HEADER_CLASS(pjson.version, new Date());
    index += importMod;
    index += constant.CLASS_SOURCE_LIB(arMethods);
    index += constant.PARAMS_CLASS;
    index += classBuild;
    index += 'module.exports = (params) => new jsPackTools(params);\n';

    fs.writeFile(PATH_INDEX, index, function(err) {
        if(err) return console.log(err);
        console.log("Generate index.js!");
    });

    console.log('Completed _renderClassMain()');

    return true;
}

function _renderCategory(){
    console.log('Proccesing _renderCategory()');
    const utils = require("../index")();
    const docs = fs.readdirSync(PATH_LIB).map(modules => {

        const getType = (str) =>  {
            let options = ['boolean', 'object', 'array', 'string', 'number', 'string|Object','void'];
            return options.filter(option=>(str.indexOf(`{${option}}`)>-1));
        };

        const data = fs.readFileSync(`${PATH_LIB}/${modules}`, 'UTF-8');
        const params = (data.match(/@param.*/g) ? data.match(/@param.*/g) : ['empty']).map(param => {
            let tmp = {};
            param = param.replace('@param', '');

            if (param.indexOf('{array}') > -1) {
                tmp['type'] = 'array';
                param = param.replace('{array}', '');
            }
            if (param.indexOf('{string}') > -1) {
                tmp['type'] = 'string';
                param = param.replace('{string}', '');
            }
            if (param.indexOf('{any}') > -1) {
                tmp['type'] = 'any';
                param = param.replace('{any}', '');
            }
            if (param.indexOf('{boolean}') > -1) {
                tmp['type'] = 'boolean';
                param = param.replace('{boolean}', '');
            }
            if (param.indexOf('{number}') > -1) {
                tmp['type'] = 'number';
                param = param.replace('{number}', '');
            }
            if (param.indexOf('{string | object}') > -1) {
                tmp['type'] = 'string | object';
                param = param.replace('{string | object}', '');
            }
            if (param.indexOf('{string|date}') > -1) {
                tmp['type'] = 'string | Date';
                param = param.replace('{string|date}', '');
            }
            if (param.indexOf('{object}') > -1) {
                tmp['type'] = 'object';
                param = param.replace('{object}', '');
            }
            if (param.indexOf('{function|boolean}') > -1) {
                tmp['type'] = 'function | boolean';
                param = param.replace('{function|boolean}', '');
            }
            if (param.indexOf('{array|object}') > -1) {
                tmp['type'] = 'array | object';
                param = param.replace('{array|object}', '');
            }
            if (param.indexOf('{int}') > -1) {
                tmp['type'] = 'int';
                param = param.replace('{int}', '');
            }

            tmp['name'] = param.split('-')[0].replace(/\s+/g, '');
            tmp['description'] = param.indexOf("~") > -1 ? param.split('~').pop().trim() : param.split('-').pop().trim();
            tmp['default'] = param.indexOf("~")>-1 ? param.split('-').pop().split('~')[0] : "";
            return tmp;
        });
        const returns = (data.match(/@returns.*/g) ? data.match(/@returns.*/g) : ['empty']).map(re=>{
            let tmp = {};
            re = re.replace('@returns', '');
            tmp['type'] = getType(re)[0];
            tmp['description'] = re.indexOf('-')>-1 ? re.split('-')[1] : '';
            return tmp;
        });

        return {
            name: modules.split('.').shift(),
            version: data.match(/@version.*/g) ? data.match(/@version.*/g)[0].replace('@version ', '') : null,
            category: data.match(/@augments.*/g) ? data.match(/@augments.*/g)[0].replace('@augments ', '') : null,
            description: data.match(/@description.*/g) ? data.match(/@description.*/g)[0].replace('@description ', '') : null,
            example: data.match(/@example.*/g) ? data.match(/@example.*/g)[0].replace('@example ', '') : null,
            arParams: params,
            returns: returns[0],
        }
    });
    let categories = utils.groupBy(docs,"category");

    let write = constant.HEADER_API_DOC+"\n\n";
    Object.keys(categories).map(categoryKey=>{
        write += `>## ${constant.EMOJI_LIST[categoryKey]} ${categoryKey} \n\n`;
        write += `| Functions Name | version | Category | Description |\n`;
        write += `|---|---|---|---|\n`;
        categories[categoryKey].map(fn=>{
            let suspensive = fn.description.length > 70 ? "..." : "";
            write += `|🌱  [**${fn.name}**](/en/api/v1/${fn.name}.md)  | ${fn.version} | ${fn.category} | <sub>${fn.description.slice(0,70)}${suspensive}</sub> |\n`;
        });
    });

    fs.writeFile(`${PATH_DOC}/en/api.md`, write, function(err) {
        if(err) return console.log(err);
        //console.log("Generate Documentation.js!");
    });
    console.log('Completed _renderCategory()');
    return true;
}
function _renderListOfContent(){
    console.log('Proccesing _renderListOfContent()');
    const {groupBy, capitalLetter} = require("./index")();

    const docs = fs.readdirSync(__dirname + '/lib').map(modules => {

        const getType = (str) =>  {
            let options = ['boolean', 'object', 'array', 'string', 'number', 'string|Object','void'];
            return options.filter(option=>(str.indexOf(`{${option}}`)>-1));
        };

        const data = fs.readFileSync(`./lib/${modules}`, 'UTF-8');
        const params = (data.match(/@param.*/g) ? data.match(/@param.*/g) : ['empty']).map(param => {
            let tmp = {};
            param = param.replace('@param', '');

            if (param.indexOf('{array}') > -1) {
                tmp['type'] = 'array';
                param = param.replace('{array}', '');
            }
            if (param.indexOf('{string}') > -1) {
                tmp['type'] = 'string';
                param = param.replace('{string}', '');
            }
            if (param.indexOf('{boolean}') > -1) {
                tmp['type'] = 'boolean';
                param = param.replace('{boolean}', '');
            }
            if (param.indexOf('{number}') > -1) {
                tmp['type'] = 'number';
                param = param.replace('{number}', '');
            }
            if (param.indexOf('{string | object}') > -1) {
                tmp['type'] = 'string | object';
                param = param.replace('{string | object}', '');
            }
            if (param.indexOf('{string|Date}') > -1) {
                tmp['type'] = 'string|Date';
                param = param.replace('{string|Date}', '');
            }
            if (param.indexOf('{object}') > -1) {
                tmp['type'] = 'object';
                param = param.replace('{object}', '');
            }
            if (param.indexOf('{function|boolean}') > -1) {
                tmp['type'] = 'function|boolean';
                param = param.replace('{function|boolean}', '');
            }
            if (param.indexOf('{int}') > -1) {
                tmp['type'] = 'int';
                param = param.replace('{int}', '');
            }

            tmp['name'] = param.split('-')[0].replace(/\s+/g, '');
            tmp['description'] = param.indexOf("~") > -1 ? param.split('~').pop().trim() : param.split('-').pop().trim();
            tmp['default'] = param.indexOf("~")>-1 ? param.split('-').pop().split('~')[0] : "";
            return tmp;
        });
        const returns = (data.match(/@returns.*/g) ? data.match(/@returns.*/g) : ['empty']).map(re=>{
            let tmp = {};
            re = re.replace('@returns', '');
            tmp['type'] = getType(re)[0];
            tmp['description'] = re.indexOf('-')>-1 ? re.split('-')[1] : '';
            return tmp;
        });

        return {
            name: modules.split('.').shift(),
            version: data.match(/@version.*/g) ? data.match(/@version.*/g)[0].replace('@version ', '') : null,
            category: data.match(/@augments.*/g) ? data.match(/@augments.*/g)[0].replace('@augments ', '') : null,
            description: data.match(/@description.*/g) ? data.match(/@description.*/g)[0].replace('@description ', '') : null,
            example: data.match(/@example.*/g) ? data.match(/@example.*/g)[0].replace('@example ', '') : null,
            arParams: params,
            returns: returns[0],
        }
    });
    let categories = groupBy(docs,"category");

    let write = ``;

    Object.keys(categories).map(categoryKey=>{
        write +=`\n>## ${constant.EMOJI_LIST[categoryKey.trim()]} ${capitalLetter(categoryKey)} \n`;
        write += `| Functions Name | version | Category | Description |\n`;
        write += `|---|---|---|---|\n`;
        categories[categoryKey].map(fn=>{
            let suspensive = fn.description.length > 70 ? "..." : "";
            write += `|🌱  [**${fn.name}**](https://jasp402.github.io/js-packtools/#/en/api/v1/${fn.name})  | ${fn.version} | ${fn.category} | <sub>${fn.description.slice(0,70)}${suspensive}</sub> |\n`;
        });
    });

    console.log(write);
    console.log('Completed _renderListOfContent()');
    return true;
}

_renderClassMain();     /* Compile index.js with new features added in the lib folder */
// _renderCategory();      /* Generate category in ./docs/en/api.md */
// _renderAPIDoc();        /* Update all documentation in /docs/en/api/v1/  */
// _renderListOfContent(); /* Generate list of content for README.md */
