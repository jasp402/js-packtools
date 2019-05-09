module.exports = function(data,  multiTaxID = false, folders = false) {
    if(!data) return false;
    let fileName = '';
    let path     = this.path;
    if(multiTaxID){
        if(folders) path = this.path +  data[0].client_NPI+'/';
        fileName = path + 'dataToServer_' +  data[0].client_NPI + '_' + time.TIMESTAMP_X + '.json'
    }else{
        path     = this.path;
        fileName = path + 'dataToServer_' + time.TIMESTAMP_X + '.json';
    }
    this.validateDir(path);
    let backupData = JSON.stringify(data);
    this.logExecution('[fn] : saveProgressData() | Path BackUp: '+fileName.split('../')[1], constant.COLOR.lime);
    fs.writeFileSync(fileName, backupData);
    return fileName;
};