const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('TEST # 1 - Test of integrity all functions', function () {

    it('should, check all defined functions', function () {
        assert.ok(typeof u.customDate    === 'function');
        assert.ok(typeof u.differenceDay === 'function');
        assert.ok(typeof u.objectToDate  === 'function');
        assert.ok(typeof u.validateYear  === 'function');
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
        let date = u.customDate(null, 'mm/dd/yyyy');
        assert.equal(u.validateYear(date), true);
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


