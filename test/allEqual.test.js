const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();
describe('SUITE - allEqual()', function () {
    it('TEST # 1, All value is equal', function () {
        assert.ok(u.allEqual([1,1,1,1,1,1,1,1]));
    });
    it('TEST # 2, At least one value is different', function () {
        assert.ok(!u.allEqual([1,1,1,1,2,1,1,1]));
    });
});