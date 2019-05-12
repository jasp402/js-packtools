const fs = require('fs');

module.exports = function(path){
    if(typeof path !== 'string') return false;
    if(fs.existsSync(path)) return false;

    arPath = path.split('/');

    if(typeof arPath === 'object' && arPath.length > 0){
        let last = '';
        arPath.forEach((nameFolder,i) =>{
            let current = nameFolder;
            last = last+current+'/';
            !fs.existsSync(last) && fs.mkdirSync(last);
        });
    };
};