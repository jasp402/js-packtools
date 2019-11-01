/**
 * @function log
 * @augments global
 * @param {string} _message - Message to save in log
 * @param {string} _fileName - Name of file for store log
 * @param {string} _color - color for show in console or terminal
 * @returns {string} Show to message with console.log() after to save
 * @version 1.0.0
 * @description It integrates the functions registry of errors and registry of execution for the document of registry in his project.
 */
module.exports = function(_message, _fileName, _color = this.constant.COLOR.reset){
    const assert   = require('assert');
    const fs       = require('fs');
    assert.ok(_fileName && _message, 'Error, log() - variables undefined.');

    const convertType = (type) => {
        switch (type) {
            case 'function':
                return 'Fun';
            case 'string':
                return 'Str';
            case 'number':
                return 'Num';
            case 'array':
                return 'Arr';
            case 'object':
                return 'obj';
        }
    };

    let date = this.logFormatDate;
    let file = this.getFinalPath() + _fileName;

    let header = typeof _message !== 'object'
        ? `${this.customDate(null, date)} - [${convertType(typeof _message)}] | `
        : `${this.customDate(null, date)} - [${Array.isArray(_message) ? convertType('array') : convertType('object')}] | `;

    let message = typeof _message !== 'object'
        ? `${_message.toString().trim().replace(/\s+/g, ' ')}`
        : `${JSON.stringify(_message)}`;

    this.validateDir(this.getFinalPath());

    fs.existsSync(file)
        ? fs.appendFileSync(file, "\r\n" + header+message)
        : fs.writeFileSync(file, header+message);

    console.log(this.constant.COLOR.dkgray, header, _color, message);
};