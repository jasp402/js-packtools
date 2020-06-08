const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('SUITE - capitalLetter()', function () {

    it('TEST # 1, Capitalize the first letter', function () {
        assert.strictEqual(u.capitalLetter('hello word'), 'Hello word');
    });

    it('TEST # 1, Capitalize all words', function () {
        assert.strictEqual(u.capitalLetter('this a demo', true), 'This A Demo');
    });

});