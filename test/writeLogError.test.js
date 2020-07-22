const jsPackTools = require('../index')();
const assert = require('assert');
const fs = require('fs');

const PATH = jsPackTools.getFinalPath();
const FILE_LOG = 'logError.log';

describe('SUITE - logError()', function () {

    after('delete folders', () => {
        fs.unlinkSync(`${PATH}/${FILE_LOG}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/').slice(0, -1).join('/')}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/')[0]}`);
    });

    it('TEST # 1, Create throw exception', function () {
        assert.throws(
            () => {
                jsPackTools.writeLogError('Title Error', 'Message of error with details');
            },
            Error
        );
    });
});