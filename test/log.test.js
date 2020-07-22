const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

const PATH     = jsPackTools.getFinalPath();
const FILE_LOG = 'constructor.log';

describe('SUITE - _log()',  () => {
    after('delete folders', () => {
        fs.unlinkSync(`${PATH}/${FILE_LOG}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/').slice(0, -1).join('/')}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/')[0]}`);
    });

    it('TEST # 1, create file log from contructor _log()',  () => {
       // jsPackTools.createFolders(path);
        jsPackTools._log("message", FILE_LOG);
        assert.ok(fs.existsSync(`${PATH}/${FILE_LOG}`))
    });
});