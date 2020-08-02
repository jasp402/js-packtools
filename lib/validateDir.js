/**
 * @function validateDir
 * @augments Path/Files
 * @param  {string} path
 * @returns {boolean}
 * @version 1.0.0
 * @description Validate if there is a route. if not, create this route.
 * @example
 */
module.exports = function(path){
    const fs = require('fs');
    if(typeof path !== 'string') return false;
    if(fs.existsSync(path)) return false;

    let arPath = path.split('/');

    if(typeof arPath === 'object' && arPath.length > 0){
        let last = '';
        arPath.forEach(nameFolder =>{
            last = last+nameFolder+'/';
            !fs.existsSync(last) && fs.mkdirSync(last);
        });
    }
};