const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('SUITE - differenceDay()', function () {

    it('TEST # 1, Show the difference of days between two dates.', function () {
        //Logic: start day should greater than end day return positive else negative
        assert.ok(u.differenceDay('05/01/2019','05/15/2019') === 15);
    });

    it('TEST # 2, Ignore init date', function () {
        //Logic: count init date? (by default true), if is false -> ignore init date
        assert.ok(u.differenceDay('05/01/2019', '05/15/2019', false) === 14);
    });

});