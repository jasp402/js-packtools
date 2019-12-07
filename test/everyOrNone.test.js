const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();
describe('SUITE - everyOrNone()', function () {
    it('TEST # 1, returns true if all elements fulfill the given function.', function () {
        assert.ok(u.everyOrNone([2,2,2,2,2,2,2,2], n=>n>1));
    });
    it('TEST # 1, returns false if at least one of the elements does not fulfill the given function.', function () {
        assert.ok(!u.everyOrNone([2,2,2,2,0,2,2,2], n=>n>1));
    });
});