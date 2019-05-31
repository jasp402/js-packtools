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

    let date = this.logFormatDate;
    let file = this.finalPath + '/' + _fileName;

    let message = typeof _message === 'string'
        ? `${this.customDate(null, date)} | (${typeof _message}) | ${_message.toString().trim().replace(/\s+/g, ' ')}`
        : `${this.customDate(null, date)} | (${typeof _message}) | ${JSON.stringify(_message)}`;

    this.validateDir(this.finalPath);

    fs.existsSync(file)
        ? fs.appendFileSync(file, "\r\n" + message)
        : fs.writeFileSync(file, message);

    typeof msg === 'string'
        ? console.log(color, message, _color)
        : console.table(message);
};