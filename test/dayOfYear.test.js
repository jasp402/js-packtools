const jsPackTools = require('../index')();
const assert      = require('assert');

describe('SUITE - dayOfYear()',  () => {
    it('TEST # 1, get number of day from 02/15/1989',  () => {
        // Logic: get date to -5 day to current date and calculate date transcurred
        let lastWeek = jsPackTools.customDate(null, null, -5);
        assert.strictEqual(jsPackTools.dayOfYear(lastWeek), 5);
    });
});