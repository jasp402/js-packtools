const jsPackTools = require('../index')();
const assert      = require('assert');


describe('SUITE - validateYear()', function () {
    it('TEST # 1 , Validate the year', function () {
        //logic:A date is checked last year.
        assert.ok(jsPackTools.validateYear('05/22/2019', '2019'));
    })
});