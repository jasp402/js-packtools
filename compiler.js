/**
 * @function compiler - It's a utilitary for create dynamically structure of class for JS-PackTools.
 * @returns {void}
 * @since 1.0.0
 */
const fs       = require('fs');

/*const fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync('file.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        console.log(line);
    });
} catch (err) {
    console.error(err);
}*/


let classBuild = `class jsPackTools extends parameters { \n`;
let importMod  = '';
let arMethods  = [];
fs.readdirSync(__dirname+'/lib').forEach(modules => {
    let module   = modules.split('.').shift();
    importMod   += `const ${module} = require('./lib/${module}');\n`;
    classBuild  += `get ${module}() { return ${module}.bind(this) }\n` ;

    const data = fs.readFileSync(`./lib/${module}.js`, 'UTF-8');

    arMethods.push({
     name: data.match(/@function.*/g) ? data.match(/@function.*/g)[0].replace(/@function |\n/g,''):null,
     type: data.match(/@category.*/g) ? data.match(/@category.*/g)[0].replace('@category ',''):null,
     description: data.match(/@description.*/g) ? data.match(/@description.*/g)[0].replace('@description ',''):null,
     version: data.match(/@version.*/g) ? data.match(/@version.*/g)[0].replace('@version ',''):null,
    })

});
classBuild += '}';

console.log(importMod);
console.log('\n');
console.log(classBuild);
console.log('\n');
console.log(arMethods);


