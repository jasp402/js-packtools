const jsPackTools = require('../index')();
const assert      = require('assert');

describe('SUITE - increaseDays()', function () {
    it('TEST # 1, increase days a date', function () {
        assert.strictEqual(jsPackTools.increaseDays('01/31/2019', 12),'02/12/2019');
    });
});