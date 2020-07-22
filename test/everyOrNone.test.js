const jsPackTools = require('../index')();
const assert = require('assert');

describe('SUITE - everyOrNone()',  () => {
    it('TEST # 1, returns true if all elements fulfill the given function.',  () => {
        assert.strictEqual(jsPackTools.everyOrNone([2,2,2,2,2,2,2,2], n=>n>1), true);
    });
    it('TEST # 2, returns false if at least one of the elements does not fulfill the given function.',  () => {
        assert.strictEqual(jsPackTools.everyOrNone([2,2,2,2,0,2,2,2]), false);
    });
});