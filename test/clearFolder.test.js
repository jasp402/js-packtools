const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

const finalPath = jsPackTools.getFinalPath();

describe('SUITE - clearFolder()', function () {
    before('create folder with sub-folder', () => {
        jsPackTools.writeLog("testing");
    });

    after('delete folders', () => {
        fs.rmdirSync(`${__dirname}/../${finalPath}`);
        fs.rmdirSync(`${__dirname}/../${finalPath.split('/')[0]}`);
    });

    it('TEST # 2, Delete content in a folder', () => {
        //Logic: create folder
        jsPackTools.clearFolder(finalPath);
        assert.strictEqual(fs.readdirSync(finalPath).length, 0);
    });



});