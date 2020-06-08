const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('SUITE - objectToDate()', function () {
    it('TEST # 1, decomposes a date on an object', function () {
        let result = { year: 2019, month: 1, day: 21, hour: 0, minute: 0, second: 0, mlSecond: 0 };
        assert.strictEqual(JSON.stringify(u.objectToDate("01/21/2019")), JSON.stringify(result));
    });
});