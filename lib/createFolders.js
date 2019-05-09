module.exports = function() {
    this.folderAutoDate
        ? this.validateDir(constant.GENERAL_PATH_FULL(this.folderName, this.folderFromatDate))
        : this.validateDir(constant.GENERAL_PATH(this.folderName));

    //ToDo - Return anything (true, false, success, fails or path)
};