const jsPackTools = require('../index')();
const assert      = require('assert');

describe('SUITE - allEqual()', () => {
    it('TEST # 1, All value is equal', () => {
        assert.strictEqual(jsPackTools.allEqual([1, 1, 1, 1, 1, 1, 1, 1]), true);
    });
    it('TEST # 2, At least one value is different', () => {
        assert.strictEqual(jsPackTools.allEqual([1, 1, 1, 1, 2, 1, 1, 1]), false);
    });
});