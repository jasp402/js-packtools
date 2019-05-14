const fs       = require('fs');
module.exports = function(path){
    if(fs.existsSync(path)){
        fs.unlinkSync(path);
    }else{
        return false;
    }
};