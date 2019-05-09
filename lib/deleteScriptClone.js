module.exports = function(path){
    if(fs.existsSync(path))
        fs.unlinkSync(path);
}