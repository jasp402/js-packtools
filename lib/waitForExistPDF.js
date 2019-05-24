module.exports = function(path, id=0, attempts = 10, sec = 2000) {
    let loop = 0;
    let fails = 0;
    while (loop < attempts) {
        browser.pause(sec);
        if (fs.existsSync(path)) {
            this.logExecution(id+' | '+path);
            loop = attempts;
        }else{
            fails++;
        }
        loop++;
    }
    if(fails >= attempts){
        this.logError('File not found! '+ path)
    }
}