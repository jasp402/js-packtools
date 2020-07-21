const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - customDate()', function () {
    it('TEST # 1, return type', function () {
        // Logic: custom date, add format, increment day or show how string or Object Date
        assert.strictEqual(typeof u.customDate(), 'string');
        assert.strictEqual(typeof u.customDate(false, false, false, true), 'object');
    });

    it('TEST # 2, change format', function () {
        // Logic: change format
        assert.strictEqual(u.customDate('05/01/2019', 'yyyy-mm-dd'), '2019-05-01');
    });

    it('TEST # 3, increment day', function () {
        // Logic: change format + add days
        assert.strictEqual(u.customDate('05/01/2019', 'yyyy-mm-dd', 15), '2019-05-16');
        // Logic: change format + add days + change out to object date
        assert.strictEqual(typeof u.customDate('05/01/2019', 'yyyy-mm-dd', 15, true), 'object');
    });
});