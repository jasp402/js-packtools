const jsPackTools = require('../index')();
const assert = require('assert');

const RESULT = { year: 2019, month: 1, day: 21, hour: 0, minute: 0, second: 0, mlSecond: 0 };

describe('SUITE - objectToDate()',  ()=> {
    it('TEST # 1, decomposes a date on an object',  ()=> {
        assert.strictEqual(JSON.stringify(jsPackTools.objectToDate("01/21/2019")), JSON.stringify(RESULT));
    });
});