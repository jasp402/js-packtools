const jsPackTools = require('../index')();
const assert = require('assert');

describe('SUITE - generateRageDate()',  ()=> {
    it('TEST # 1, Generate range to week into year',  ()=> {
        assert.strictEqual(jsPackTools.generateRageDate('01/01/2019', 7, '12/31/2019').length, 52);
    });
});