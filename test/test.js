const assert = require('assert');
const utils = require('../index');
let u = new utils();

describe('TEST # 1 - Test of integrity all functions', function () {
    it('should, check all defined functions', function () {
        assert.ok(typeof u.customDate === 'function');
        assert.ok(typeof u.differenceDay === 'function');
    });

    it('Test, function customDate()',function () {
        assert.equal(u.customDate('05/07/2019', 'yyyy-mm-dd'), '2019-05-07');
        assert.equal(u.customDate('05/07/2019', 'yyyy-mm-dd', 10, true), new Date('05/17/2019  12:00:00'));
    });

    it('Test, function differenceDay()',function () {
        assert.equal(u.differenceDay('01/01/2019', '01/17/2019'), '16'); //count since
        assert.equal(u.differenceDay('05/01/2019', '01/17/2019'), '-104');
    });
});


