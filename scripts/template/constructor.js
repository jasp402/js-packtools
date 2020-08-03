class parameters {
    constructor(config = {})
    {
        assert.ok(typeof config === 'object', constant.ERROR_CONSTRUCTOR);
        this.constant          = constant;
        this.folderName        = ("folderName" in config)           ? config.folderName                 : 'DATA';                 //=> data_audit, data_download, docs, pdfs, trash...
        this.folderWithDate    = ("folderWithDate" in config)       ? Boolean(config.folderWithDate)    : true;                   //=> true => /2019_01_01/
        this.folderFormatDate  = ("folderFormatDate" in config)     ? config.folderFormatDate           : 'yyyy~_~mm~_~dd';       //=> 'yyyy_mm_dd';
        this.nameWriteLog      = ("nameWriteLog" in config)         ? config.nameWriteLog + '.log'      : 'logExecution.log';
        this.nameWriteLogError = ("nameWriteLogError" in config)    ? config.nameWriteLogError + '.log' : 'logError.log';
        this.logFormatDate     = ("logFormatDate" in config)        ? config.logFormatDate              : 'yyyy-mm-dd ~h:m:i';    //=> yyyy-mm-dd | hh:mm:sss
    }
}