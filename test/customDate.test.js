const jsPackTools = require('../index')();
const assert = require('assert');

describe('SUITE - customDate()',  () => {
    it('TEST # 1, customDate return type string',  () => {
        // Logic: custom date, add format, increment day or show how string or Object Date
        assert.strictEqual(typeof jsPackTools.customDate(), 'string');
    });

    it('TEST # 2, customDate return type Object Date', () => {
        assert.strictEqual(typeof jsPackTools.customDate(false, false, false, true), 'object');
    });

    it('TEST # 3, change format', () => {
        // Logic: change format
        assert.strictEqual(jsPackTools.customDate('05/01/2019', 'yyyy-mm-dd'), '2019-05-01');
    });

    it('TEST # 4, increment day return format yyyy-mm-dd and value type string', () => {
        // Logic: change format + add days
        assert.strictEqual(jsPackTools.customDate('02/01/1989', 'yyyy-mm-dd', 14), '1989-02-15');
        // Logic: change format + add days + change out to object date
    });

});