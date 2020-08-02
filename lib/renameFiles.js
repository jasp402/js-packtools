/**
 * @function renameFiles
 * @augments Path/Files
 * @param  {string} path - Dir of folder with all files
 * @param  {string} name - Generic name for all files
 * @param  {number} opts - date `or` token `or` null ~ Unique identifier for each file in the folder null = self increasing
 * @param  {number} rand - 1 `or` 2 ~ 1 = Suffix or 2 = Prefix
 * @returns {void}
 * @version 1.0.0
 * @description This function rename a batch of files with current date or token unique.
 * @example
 */
module.exports = function(path, name, opts= null|'date'|'token', rand=1) {
    const fs = require('fs');
    this.validateDir(path);
    let nameFile = (typeof name !== "string") ? String(name) : name;
    const ran=()=>Math.random(0).toString(36).substr(2);
    const token=(length)=>(ran()+ran()+ran()+ran()).substr(0,length);

    const files = fs.readdirSync(path);

    (files.length > 0) && files.forEach((file,index) => {
        let suffix = "";
        let prefix = "";
        let random = "";

        switch (opts){
            case "date":
                random = new Date().getTime();
                break;
            case "token":
                random = token(10);
                break;
            case null:
                random = index;
                break;
        }

        if(rand === 1){
            suffix = "_"+random;
        }else if(rand === 2){
            prefix = random+"_";
        }
        fs.renameSync(`${path}/${file}`, `${path}/${prefix}${nameFile}${suffix}.${file.split(".").pop()}`)
    });
};
