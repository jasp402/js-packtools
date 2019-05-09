module.exports = function(pathScript){
    let dirScript = fs.readdirSync(pathScript);
    (dirScript.length > 0) && dirScript.forEach(file=>fs.unlinkSync(pathScript+'/'+file));
    return fs.readdirSync(pathScript).length;
};