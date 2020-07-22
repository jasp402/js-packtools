const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

const PATH     = jsPackTools.getFinalPath();
const FILE_LOG = 'logExecution.log';
let file       = '';

describe('SUITE - writeLog()', () => {
    before('Create logs', () => {
        jsPackTools.writeLog('string');
        jsPackTools.writeLog('string with color', jsPackTools.constant.COLOR.red);
        jsPackTools.writeLog(123);
        jsPackTools.writeLog(['a', 'b', 1, true]);
        jsPackTools.writeLog({key: 'value'});

        file = fs.readFileSync(`${PATH}/${FILE_LOG}`, 'utf-8');
    });

    after('delete folders and files', () => {
        fs.unlinkSync(`${PATH}/${FILE_LOG}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/').slice(0, -1).join('/')}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/')[0]}`);
    });

    it('TEST # 1, type string', () => {
        // Logic: create un new file
        assert.strictEqual(file.split('\n')[0].split(' - ')[1].trim(), '[Str] | string');
    });

    it('TEST # 2, type string with color red', () => {
        // Logic: create un new file
        assert.strictEqual(file.split('\n')[1].split(' - ')[1].trim(), '[Str] | string with color');
    });

    it('TEST # 3, type number', () => {
        // Logic: create un new file
        assert.strictEqual(file.split('\n')[2].split(' - ')[1].trim(), '[Num] | 123');
    });

    it('TEST # 4, type array', () => {
        // Logic: create un new file
        assert.strictEqual(file.split('\n')[3].split(' - ')[1].trim(), '[Arr] | ["a","b",1,true]');
    });

    it('TEST # 5, type Object', () => {
        // Logic: create un new file
        assert.strictEqual(file.split('\n')[4].split(' - ')[1].trim(), '[obj] | {"key":"value"}');
    });

});