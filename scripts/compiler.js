const pjson   = require('../package.json');
const docs    = require('./template/documentation');
const groupBy = require('../lib/groupBy');
const modEnd  = require('../lib/modEnd');
const fs      = require('fs');

const PATH_LIB     = `${__dirname}/../lib`;
const PATH_DOC     = `${__dirname}/../docs`;
const PATH_INDEX   = `${__dirname}/../index.js`;
const PATH_README  = `${__dirname}/../README.md`;
const PATH_API_DOC = `${__dirname}/../docs/en/api.md`;

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
    PARAMS_CLASS     : fs.readFileSync(`${__dirname}/template/constructor.js`, 'utf-8')+'\n',
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
function generateDoc(arMethods){
    arMethods.forEach(doc=>{
        fs.writeFile(`${PATH_DOC}/en/api/v1/${doc.name}.md`, docs(doc, constant), function(err) {
            if(err) return console.log(err);
        });
    });
}
function generateIndex(arMethods, functions, modules){
    let index = '';
    index += constant.HEADER_CLASS(pjson.version, new Date());
    index += constant.CLASS_CONSTANT;
    index += constant.CLASS_ASSERT;
    index += functions;
    index += constant.CLASS_SOURCE_LIB(arMethods);
    index += constant.PARAMS_CLASS;
    index += constant.CLASS_TITLE;
    index += modules;
    index += constant.PROXY_CLASS;
    index += '}\n';
    index += 'module.exports = (params) => new jsPackTools(params);\n';
    fs.writeFile(PATH_INDEX, index, function(err) {
        if(err) return console.log(err);
        console.log("Generate index.js!");
    });
}
function generateListOfContent(arMethods){
    let categories = groupBy(arMethods,"category");
    let write = '';

    Object.keys(categories).map(categoryKey=>{
        write += `>## ${constant.EMOJI_LIST[categoryKey]} ${categoryKey} \n\n`;
        write += `| Functions Name | version | Category | Description |\n`;
        write += `|---|---|---|---|\n`;
        categories[categoryKey].map(fn=>{
            let suspensive = fn.description.length > 70 ? "..." : "";
            write += `|🌱  [**${fn.name}**](https://jasp402.github.io/js-packtools/#/en/api/v1/${fn.name}) | ${fn.version} | ${fn.category} | <sub>${fn.description.slice(0,70)}${suspensive}</sub> |\n`;
        });
    });

    let readme = fs.readFileSync(PATH_README, 'utf-8').split('___');
    let apiDoc = fs.readFileSync(PATH_API_DOC, 'utf-8').split('___');

    // --- Embed in Readme.md
    let newReadme = '';
    newReadme += readme[0];
    newReadme += `___\n${write}\n___`;
    newReadme += readme[2];
    fs.writeFile(PATH_README, newReadme, function(err) {
        if(err) return console.log(err);
        console.log('Update List of Content in Readme.md file');
    });

    // --- Embed in api.md
    let newApiDoc = '';
    newApiDoc += apiDoc[0];
    newApiDoc += `___\n${write}\n___`;
    newApiDoc += apiDoc[2];
    fs.writeFile(PATH_API_DOC, newApiDoc, function(err) {
        if(err) return console.log(err);
        console.log('Update List of Content in api.md file');
    });

}

function _build() {
    console.log('Processing _build()');

    let arMethods  = [];
    let functions  = '';
    let getModules = '';

    fs.readdirSync(PATH_LIB).forEach(modules => {
        let module  = modules.split('.').shift();
        let space   = modEnd(module, 20);
        const data  = fs.readFileSync(`${PATH_LIB}/${module}.js`, 'utf-8').split('module.exports')[0];
        functions  += constant.CLASS_FUNCTIONS(space, module);
        getModules += constant.CLASS_GET_MODULE(module);

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

    // CREATE DOCUMENTATION
    generateDoc(arMethods);

    // CREATE INDEX.JS
    generateIndex(arMethods, functions, getModules);

    // CREATE LIST OF CONTENT
    generateListOfContent(arMethods);

    console.log('Completed _build()');

    return true;
}
_build();
