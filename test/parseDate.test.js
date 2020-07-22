const jsPackTools = require('../index')();
const assert = require('assert');

describe('SUITE - parseDate()',  () => {
    it('TEST # 1, Parse Date with correction day and hour',  () => {
        // Logic: parse date with set meridian and convert 12 hours per 24 hours
        assert.strictEqual(
            jsPackTools.parseDate('2/06/19 6:13 p. m.', 'D/MM/YY h:mm x. x.').toString(),
            new Date('2019-06-02 18:13:00 GMT+00:00').toString()
        );
    });
});