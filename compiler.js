/**
 * @function compiler - It's a utilitary for create dynamically structure of class for JS-PackTools.
 * @returns {void}
 * @since 1.0.0
 */
const fs       = require('fs');

let classBuild = `class jsPackTools extends parameters { \n`;
let importMod  = '';

fs.readdirSync(__dirname+'/lib').forEach(modules => {
    let module   = modules.split('.').shift();
    importMod   += `const ${module} = require('./lib/${module}');\n`;
    classBuild  += `get ${module}() { return ${module}.bind(this) }\n` ;
});
classBuild += '}';

console.log(importMod);
console.log('\n');
console.log(classBuild);


