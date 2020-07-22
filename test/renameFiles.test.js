const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

const PATH = jsPackTools.getFinalPath();

describe('SUITE - renameFiles()', () => {
    after('delete folders', () => {
        fs.unlinkSync(`${PATH}/test_0.log`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/').slice(0, -1).join('/')}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/')[0]}`);
    });

    it('TEST # 1, Parse Date with correction day and hour', () => {
        // Logic: parse date with set meridian and convert 12 hours per 24 hours
        jsPackTools.writeLog('testing');
        jsPackTools.renameFiles(PATH, "test", null, 1);
        assert.strictEqual(JSON.stringify(fs.readdirSync(PATH)), JSON.stringify(['test_0.log']));
    });
});