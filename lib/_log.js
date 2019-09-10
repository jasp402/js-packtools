/**
 * @function log - It integrates the functions registry of errors and registry of execution for the document of registry in his project.
 * @param _message {string} Message to save in log
 * @param _fileName {string} Name of file for store log
 * @param _color {string} color for show in console or terminal
 * @returns {string} Show to message with console.log() after to save
 * @since 0.1.13
 */
const assert   = require('assert');
const fs       = require('fs');

module.exports = function(_message, _fileName, _color = this.c.COLOR.reset){

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
    let file = this.finalPath + '/' + _fileName;

    let header = typeof _message !== 'object'
        ? `${this.customDate(null, date)} - [${convertType(typeof _message)}] | `
        : `${this.customDate(null, date)} - [${Array.isArray(_message) ? convertType('array') : convertType('object')}] | `;

    let message = typeof _message !== 'object'
        ? `${_message.toString().trim().replace(/\s+/g, ' ')}`
        : `${JSON.stringify(_message)}`;

    this.validateDir(this.finalPath);

    fs.existsSync(file)
        ? fs.appendFileSync(file, "\r\n" + header+message)
        : fs.writeFileSync(file, header+message);

    console.log(this.c.COLOR.dkgray, header, _color, message);
};