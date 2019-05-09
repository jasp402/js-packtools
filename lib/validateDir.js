const fs = require('fs');

module.exports = function(path){
    !fs.existsSync(path) && fs.mkdirSync(path, { recursive: true });
};