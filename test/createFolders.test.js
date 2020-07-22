const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

const FOLDER_NAME = 'TestFolder';

describe('SUITE - createFolders()',  ()=> {
    after('delete folders', () => {
        fs.rmdirSync(`${__dirname}/../${FOLDER_NAME}`);
    });

    it('TEST # 1, create folder simple',  () => {
        // Logic: create a folder {see: config at constructor}
        jsPackTools.createFolders(FOLDER_NAME);
        assert.ok(fs.existsSync(FOLDER_NAME));
    });

});