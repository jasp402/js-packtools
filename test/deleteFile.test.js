const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

const PATH = jsPackTools.getFinalPath()+'logExecution.log';

describe('SUITE - deleteFile()',  () => {
    before('create file with writeLog.log', () => {
        jsPackTools.writeLog('testing');
    });

    after('delete folders', () => {
        fs.rmdirSync(`${__dirname}/../${PATH.split('/').slice(0, -1).join('/')}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/')[0]}`);
    });

    it('TEST # 1, Delete a file from the given route',  () => {
        // Logic: just delete the contents of a folder without deleting the container folder
        jsPackTools.deleteFile(`${__dirname}/../${PATH}`);
        assert.strictEqual(fs.existsSync(PATH), false);
    });

});