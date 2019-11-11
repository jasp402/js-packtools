/**
 * @function compiler - It's a utilitary for create dynamically structure of class for JS-PackTools.
 * @returns {void}
 * @since 1.0.0
 */

let pjson    = require('./package.json');
let constant = require('./constants');
const fs     = require('fs');

function _renderClassMain() {
    let classBuild = '';
    let importMod  = '';
    let index = '';
    let arTest = {};
    let arMethods  = [];
    classBuild = constant.TITLE_CLASS;
    fs.readdirSync(__dirname+'/test').forEach(modules => {
        let module   = modules.split('.').shift().split('_')[1];
        arTest[module] = './test/'+modules;
    });
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

    classBuild += constant.PROXY_CLASS;
    classBuild += '}\n';

    index += `${constant.HEADER_CLASS(pjson.version, new Date())}`;
    index += importMod;
    index += 'const sourceLib \t\t = '+JSON.stringify(arMethods)+';\n';
    index += constant.PARAMS_CLASS;
    index += classBuild;
    index += 'module.exports = jsPackTools;\n';

    fs.writeFile("./index.js", index, function(err) {
        if(err) return console.log(err);
        console.log("Generate index.js!");
    });
}
function _renderDocumentation(){
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

    docs.forEach(doc=>{
        const {name, version, arParams, returns, category, description, example} = doc;
        console.log(arParams);
        const _cd_ = '\`\`\`';
        let write = `## ${name} \n  `;
        write += `${_cd_}javascript\n ${name}(${arParams.map(param=>param.name).join(', ')}) ⇒ ${returns.type} \n${_cd_} \n\n `;
        write += `\` Version: ${version} \` \n`;
        write += `\` Category: ${category} \` \n\n`;
        write += `### Description \n\n`;
        write += `?> ${description} \n\n`;
        write += `### Implementation \n\n`;
        write += `| Param | Type | Default value | Description | \n`;
        write += `| --- | --- | --- | --- | \n`;
        write += arParams.map(param=>`| **${param.name}** | \`${param.type}\` | \`${param.default}\` | _${param.description}_ | `).join('\n');
        write += `\n\n`;
        write += `### Example \n\n`;
        write += ` \`\`\`javascript \n ${example ? example.replace(/\\n/g,"\n") : ""} \n \`\`\`  \n\n`;

        fs.writeFile(`./docs/en/api/v1/${name}.md`, write, function(err) {
            if(err) return console.log(err);
            //console.log("Generate Documentation.js!");
        });
    });

}

// _renderClassMain();
_renderDocumentation();
