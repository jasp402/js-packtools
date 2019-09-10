const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - writeLog()', function () {

    it('TEST # 1, type string', function () {
        // Logic: create un new file
        u.writeLog('string');
    });

    it('TEST # 2, type string with color red', function () {
        // Logic: create un new file
        u.writeLog('string with color', u.c.COLOR.red);
    });

    it('TEST # 3, type string with timeOut', function () {
        // Logic: create un new file
        setTimeout(function () {
            u.writeLog('string with delay to 3seg.');
        }, 3500);
    });

    it('TEST # 4, type number', function () {
        // Logic: create un new file
        u.writeLog(123);
    });

    it('TEST # 5, type array', function () {
        // Logic: create un new file
        u.writeLog(['a','b', 1, true]);
    });

    it('TEST # 6, type Object', function () {
        // Logic: create un new file
        u.writeLog({key:'value'});
    });

});