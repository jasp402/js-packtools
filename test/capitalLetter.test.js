const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('SUITE - capitalLetter()', function () {

    it('TEST # 1, Capitalize the first letter', function () {
        assert.equal(u.capitalLetter('hello word'), 'Hello word');
    });

});