const jsPackTools = require('../index')();
const assert      = require('assert');

describe('SUITE - capitalLetter()', () => {
    it('TEST # 1, Capitalize the first letter', () => {
        assert.strictEqual(jsPackTools.capitalLetter('hello word'), 'Hello word');
    });
    it('TEST # 1, Capitalize all words', () => {
        assert.strictEqual(jsPackTools.capitalLetter('this a demo', true), 'This A Demo');
    });
});