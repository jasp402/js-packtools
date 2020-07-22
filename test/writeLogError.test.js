const jsPackTools = require('../index')();
const assert = require('assert');

describe('SUITE - logError()', function () {
    it('TEST # 1, Create throw exception', function () {
        assert.throws(
            () => {
                jsPackTools.writeLogError('Title Error', 'Message of error with details');
            },
            Error
        );
    });
});