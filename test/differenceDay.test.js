const jsPackTools = require('../index')();
const assert = require('assert');

const startDate = new Date('2001-09-11');
const endDate   = new Date('2019-09-11');

describe('SUITE - differenceDay()',  () => {

    it('TEST # 1, Show the difference of days between two dates.',  ()=> {
        //Logic: start day should greater than end day return positive else negative
    assert.strictEqual(jsPackTools.differenceDay(startDate,endDate),6575)
    });

    it('TEST # 2, Ignore init date',  () => {
        //Logic: count init date? (by default true), if is false -> ignore init date
        assert.strictEqual(jsPackTools.differenceDay(startDate, endDate, false), 6574);
    });

});