const jsPackTools = require('../index')();
const assert      = require('assert');

describe('SUITE - formatSeconds()', () => {

    it('TEST # 1, Parse number', () => {
        assert.strictEqual(jsPackTools.formatSeconds(0.45), '000.450')
    });

});