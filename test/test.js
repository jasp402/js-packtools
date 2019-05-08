const assert = require('assert');
const utils = require('../index');
let u = new utils();

describe('TEST # 1 - Test of integrity all functions', function () {
    it('should, check all defined functions', function () {
        assert.ok(typeof u.customDate === 'function');
        assert.ok(typeof u.differenceDay === 'function');
        assert.ok(typeof u.objectToDate === 'function');
        assert.ok(typeof u.validateYear === 'function');
    });

    it('Test, function customDate()',function () {
        assert.equal(u.customDate('05/07/2019', 'yyyy-mm-dd'), '2019-05-07');
        assert.equal(typeof u.customDate('05/07/2019', 'yyyy-mm-dd', 10, true), 'object');
    });

    it('Test, function differenceDay()',function () {
        assert.equal(u.differenceDay('01/01/2019', '01/17/2019'), '16'); //count since
        assert.equal(u.differenceDay('05/01/2019', '01/17/2019'), '-104');
    });

    it('Test, function objectToDate()',function () {
       assert.equal(typeof u.objectToDate(new Date().getTime()), 'object');
       assert.equal(typeof u.objectToDate('05/01/2019'), 'object');
    });

    it('Test, function validateYear()',function () {
        assert.equal(u.validateYear('05/01/2019'), true);
        assert.equal(u.validateYear('05/01/2019', '2018'), false);
        assert.equal(u.validateYear('05/01/2019', '2018', '!='), true);
    });


});


