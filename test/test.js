const assert = require('assert');
const utils = require('../index');
let u = new utils();

describe('TEST # 1 - Test of integrity all functions', function () {
    it('should, check all defined functions', function () {
        assert.ok(typeof u.customDate    === 'function');
        assert.ok(typeof u.differenceDay === 'function');
        assert.ok(typeof u.objectToDate  === 'function');
        assert.ok(typeof u.validateYear  === 'function');
    });

    it('Test, function customDate()',function () {
        // Logic: custom date, add format, increment day or show how string or Object Date
        assert.equal(typeof u.customDate(), 'string');
        assert.equal(typeof u.customDate(false, false, false, true), 'object');
        // Logic: change format
        assert.equal(u.customDate('05/01/2019', 'yyyy-mm-dd'), '2019-05-01');
        // Logic: change format + add days
        assert.equal(u.customDate('05/01/2019', 'yyyy-mm-dd', 15), '2019-05-16');
        // Logic: change format + add days + change out to object date
        assert.equal(typeof u.customDate('05/01/2019', 'yyyy-mm-dd', 15, true), 'object');
    });

    it('Test, function differenceDay()',function () {
        // Logic: count number of day between [startDate & enDate], then return: number.
        // Logic: while that {StartDate} greater than {endDate} result is positive else is negative.
        assert.equal(u.differenceDay('01/01/2019', '01/17/2019'), '17');
        assert.equal(u.differenceDay('05/01/2019', '01/17/2019'), '-103');
        // Logic: if {initDate} is false then not include init date and return -1 day. By default TRUE
        assert.equal(u.differenceDay('01/01/2019', '01/17/2019', false), '16');
    });

    it('Test, function objectToDate()',function () {
        let strTimeA = new Date().getTime();
        let strTimeB = '05/01/2019';
        let strTimeC = 'qwerty1234';
        // Logic: if [strTime] is {Object Date}, then return: Object with date details.
       assert.equal(typeof u.objectToDate(strTimeA), 'object');
        // Logic: if [strTime] is {string}, then return: Object with date details.
       assert.equal(typeof u.objectToDate(strTimeB), 'object');
        // Logic: if [strTime] is {string} but invalidate format, then return: string.
        assert.equal(typeof u.objectToDate(strTimeC), 'string'); //=> 'Invalid Date'
    });

    it('Test, function validateYear()',function () {
        // Logic: if [date] is equal to current year, then is: true
        assert.equal(u.validateYear('05/01/2019'), true);
        assert.equal(u.validateYear('05/01/1994'), false);
        // Logic: if [date] is equal to set year [yearCompare], then is: true
        assert.equal(u.validateYear('05/01/2019', '2019'), true);
        assert.equal(u.validateYear('05/01/2019', '2018'), false);
        // Logic: if [date] is [less than / greater than] according to the [operator] according to set year [yearCompare], then is: true
        assert.equal(u.validateYear('05/01/2019', '2020', '<'), true);
        assert.equal(u.validateYear('05/01/2020', '2020', '<'), false);
        assert.equal(u.validateYear('05/01/2000', '1997', '>'), true);
        assert.equal(u.validateYear('05/01/1996', '1997', '>'), false);
        // Logic: if any [date] is different  of set year [yearCompare] according to the [operator] {!=}, then is: true
        assert.equal(u.validateYear('05/01/2009', '2010', '!='), true);
        assert.equal(u.validateYear('05/01/2010', '2010', '!='), false);
        assert.equal(u.validateYear('05/01/2011', '2010', '!='), true);
    });
});


